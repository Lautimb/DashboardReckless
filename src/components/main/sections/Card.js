export default function Card({children,color,element}){
    return (
        <>
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className={`m-0 font-weight-bold text-${color}`}>{element}</h6>
                    </div>
                    <div className="card-body">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}