import Card from './Card'
import SimpleLabel from './SimpleLabel'

export default function Table({category}){



    return( 
            <>  
                <Card element="Total by category in database" color="primary">
                    <div className="row">
                    {
                        category.map((cat, i) => {
                            return <SimpleLabel key={i} category= { `${cat[0]}: ${cat[1]}` } />
                        })
                    }
                    </div>
                </Card>
            </>
)}   