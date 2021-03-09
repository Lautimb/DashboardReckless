import {useEffect} from 'react'

export default function GetData(setTotalUsers, setMeta, setLastProduct, setCategories, setPaginatedProducts){
    useEffect(()=>{
        fetch('http://localhost:3300/api/products')
            .then( res => res.json())
                .then( data => {
                  setMeta(data.meta)
                  setLastProduct(data.meta.lastProduct)
                  setCategories(data.meta.countByCategory)
                  setPaginatedProducts(data.paginatedProducts.rows)
                })
        fetch('http://localhost:3300/api/users')
            .then(res => res.json())
                .then(data =>{
                  setTotalUsers(data.meta.count)
                })
    },[])
}