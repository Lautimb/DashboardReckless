import { info } from './info'

export default function FirstSection(){
    return (
        <>        
            {info.map((item,index)=>{
                return( <div key={ index } className="col-md-4 mb-4">
                            <div className={`card border-left-${item.colorDetails} shadow h-100 py-2`}>
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className={`text-xs font-weight-bold text-${item.colorDetails} text-uppercase mb-1`}>{item.title}</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{item.qty}</div>
                                        </div>
                                        <div className="col-auto">
                                            <i className={item.i}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                )      
            })}
            

        </>
    )
}