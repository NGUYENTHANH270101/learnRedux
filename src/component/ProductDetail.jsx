import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router"
import { appContext } from "../context/appContext";
const apiUrl = 'https://fakestoreapi.com/products'

export default function ProductDetail() {
    // const { product } = useContext(appContext)
    // console.log(product);
    const { id } = useParams()
    const [product, setProduct] = useState([])
    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch(apiUrl + '/' + `${id}`, {
                method: 'GET',
                headers: {
                    "ngrok-skip-browser-warning": "69420",
                },
            })
            setProduct(await response.json())
        }

        getProduct()
    }, [])
    const ShowProductDetail = () => {
        return (
            <>
                <div class="product">
                    {/* <img src={product.data.image_detail} /> */}
                    <div class="info">
                        <div class="name">{product.price}</div>
                    </div>

                </div>
            </>
        )
    }
    return (
        <>

            <ShowProductDetail />
        </>
    )
}
