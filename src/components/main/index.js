import Container from '../containers/Container' 
import PageHeading from '../PageHeading'    
import LastAdded from './sections/LastAdded'
import Label from './sections/Label'
import { useState } from 'react'
import Table from './sections/Table'
import getData from '../services/getData'
import SimpleLabel from './sections/SimpleLabel'

export default function Main(){
   
    const [ totalUsers, setTotalUsers] = useState('0')
    const [ meta, setMeta] = useState([])
    const [ lastProduct, setLastProduct] = useState({})
    const [categories, setCategories] = useState({})
    const eachCategory = Object.entries(categories);
    console.log(eachCategory)
    getData(setTotalUsers,setMeta,setLastProduct, setCategories)

    return (
            <Container classes="container-fluid">
            	<PageHeading />
                <Container classes="row">  
                    <Label color="danger" title="total users" content={totalUsers} item="fas fa-user-check fa-2x text-gray-500"/>
                    <Label color="success" title="total amount" content={`$${meta.totalAmount}`} item="fas fa-dollar-sign fa-2x text-gray-500"/>
                    <Label color="primary" title="products in data base" content={meta.count} item="fas fa-clipboard-list fa-2x text-gray-500"/>
                    <Label color="warning" title="total categories" content={meta.totalCategories} item="fas fa-tshirt fa-2x text-gray-500"/>
                </Container>
                <Container classes="row">               
                  <LastAdded color="primary" imgURL={ lastProduct.images_url} name={lastProduct.title} description={lastProduct.description} detail={lastProduct.detail}/>
                  <Table category={eachCategory}/>
                </Container>

          	</Container>
        )
}