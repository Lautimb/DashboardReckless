import {useEffect, useState} from 'react'

export default function Product () {
    
    const [ previousPage, setPreviousPage]= useState(null)
    const [ currentPage, setCurrentPage]= useState('http://localhost:3300/api/products?page=1')
    const [ nextPage, setNextPage]= useState(null)
    const [ products, setProducts]= useState([])

    useEffect(() => {

        fetch(currentPage)
            .then((res)=> res.json())
            .then((data)=>{
                setPreviousPage(data.meta.previousPage)
                setCurrentPage(data.meta.currentPage)
                setNextPage(data.meta.nextPage)
                setProducts(data.paginatedProducts.rows)
            })
    }, [currentPage] )

    const changeCurrentPage = (number, e) => {
        setCurrentPage(number)
        e.preventDefault()
    }

    return(
            <>
            {
                products.map( (product, i) =>{
                    return (
                        <div className="card" key={i} style={{width: "18rem" }}>
                            <img src={product.images_url[0]} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title text-gray-900">{product.name}</h5>
                            </div>
                        </div>
                    )
                })
            }

            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <a 
                        className="page-link"
                        onClick={ (e)=> changeCurrentPage(previousPage, e) } 
                        aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li className="page-item">
                        <a 
                        className="page-link" 
                        onClick={ (e)=> changeCurrentPage(nextPage, e) }
                        aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
            

            </>
        )
}

