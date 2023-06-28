import { useState, useEffect } from "react";
import React, { useContext } from "react";
import '../component/Products.css'
import { Link } from 'react-router-dom'
import { appContext } from "../context/appContext";
// const apiKey = process.env.URL
// const apiUrl = 'https://fakestoreapi.com/products'
const Products = () => {
    // const [data, setData] = useState([])
    // const [filter, setFilter] = useState(data)
    // let componentMounted = (true)

    // useEffect(() => {
    //     const getProducts = async () => {
    //         const response = await fetch(apiUrl, {
    //             method: 'GET',
    //             headers: {
    //                 "ngrok-skip-browser-warning": "69420",
    //             },
    //         })
    //         if (componentMounted) {
    //             setData(await response.clone().json())
    //             setFilter(await response.json())

    //         }
    //         return () => {
    //             componentMounted = false
    //         }
    //     }
    //     console.log(apiUrl);

    //     getProducts()
    // }, [])

    const { filter, themeStyle } = useContext(appContext)
    console.log({ filter });
    const ShowProducts = () => {
        return (
            <>
                {filter?.map((product) => {
                    return (
                        <div class="product" style={{
                            ...themeStyle
                        }}>
                            <Link to={`/product/${product.id}`}>
                                <img src={product.image} alt={product.title} />
                            </Link>

                            <div class="info">
                                <div class="name">{product.title}</div>
                                <div class="price">${product.price}</div>
                            </div>

                        </div>
                    )
                })}
            </>
        )
    }
    return (
        <div>
            <div className="container ">
                <div className="row">
                    <div className="colum-12 ">
                        <h1 >Laster Product</h1>
                        {/* <img src={filter?.image} alt="" /> */}
                        <hr />
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </div>

                </div>

                <ShowProducts />
                {/* {filter.map(product)=>} */}
            </div>
        </div>
    )
}

export default Products

