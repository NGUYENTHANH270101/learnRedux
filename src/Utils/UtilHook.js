import { useCallback, useEffect, useRef } from 'react'
import axios from '../Utils/Axios'
// hook chung để check regestt
function useIsMounted() {
    const isMounted = useRef(false)

    useEffect(() => {
        isMounted.current = true

        return () => {
            isMounted.current = false
        }
    }, [])

    return useCallback(() => isMounted.current, []) //  khi sử dụng useCallback thì nó sẽ check lai fuction () => isMounted.current là fuction cũ 
}


// hook chung call API
function useFetching(url, handle) {
    const IsMouted = useIsMounted() // tạo ra 1 object có key là {current:false}    
    useEffect(() => {
        const controller = new AbortController();
        axios.get(url, {
            signal: controller.signal,
        }).then(res => {
            if (IsMouted()) {
                handle(res)
            }

        }).catch(err => {
            if (err.code !== 'ERR_CANCELED') {
                console.log('err', err);

            }
        })

        return () => {
            controller.abort()  // cancel request
        }
    }, [IsMouted, url, handle])
}

export default async function useFetch(url, options = {}, dependencies = []) {
    const controller = new AbortController();
    return await axios.get(url, { signal: controller.signal }).then(res => {
        console.log(res)
        if (res.status === 200) return res.data.data
        return res.json().then(json => Promise.reject(json))
    })

}

export {
    useIsMounted,
    useFetching,
    useFetch
} 