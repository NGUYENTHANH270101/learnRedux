import { createContext } from "react";
import { useEffect, useState, useParams } from "react";
// const apiUrl = 'https://reqres.in/api/users/2'
const apiUrl = 'https://fakestoreapi.com/products'

export const appContext = createContext({})

export const AppProvider = ({ children }) => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [isDay, setIsDay] = useState(true)
    const themeStyle = {
        day: {
            backgorundColor: 'rgba(228,228,228)',
            color: 'black'
        },
        night: {
            backgorundColor: 'black',
            color: 'white'
        }
    }
    let componentMounted = (true)
    useEffect(() => {

        // fetch(apiUrl)
        //     .then(res => res.json())
        //     .then(res => {
        //         setData(res.data)
        //     })
        const getProducts = async () => {
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    "ngrok-skip-browser-warning": "69420",
                },
            })
            if (componentMounted) {
                setData(await response.clone().json())
                setFilter(await response.json())

            }
            return () => {
                componentMounted = false
            }
        }
        console.log(apiUrl);

        getProducts()
    }, [])


    return <appContext.Provider value={{ filter, isDay, setIsDay, themeStyle: themeStyle[isDay ? 'day' : 'night'] }}>
        {children}
    </appContext.Provider>
}