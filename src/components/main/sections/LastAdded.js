import Card from './Card'

export default function LastAdded({color, imgURL, name, description, detail}){

    
    return( 
            <>  
                <Card element="Last product in data base" color="primary">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{height: '25rem'}} src={imgURL} alt="image dummy"/>
                    </div>
                    <h6 className={`m-0 font-weight-bold text-${color}`}>{name}</h6>
                    <p className="text-gray-900">{description}</p>
                    <a target="_blank" rel="nofollow" href={detail}>View product detail</a>     
                </Card>
             </>
    )
}   