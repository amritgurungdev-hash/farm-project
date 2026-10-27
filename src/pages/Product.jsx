import ProductComponent from "../component/ProductComponent";
import vegetable from "../data/vegetables";
import spices from "../data/spices";
export default function Product(){
    return(
        <div>
            <ProductComponent/>

            <div className="flex flex-col gap-4 mt-15 px-5 sm:px-10 xl:px-30">
                <h2 className="font-bold text-3xl">Vegetable Products</h2>
                <hr className="h-1 border-0 bg-green-500" />
                </div>

        <div className="grid grid-cols-2 gap-8 px-5 mt-12 sm:grid-cols-3 lg:grid-cols-4 xl:px-30">
                {
                    vegetable.map((item)=>(
                        <div key={item.id} className="flex flex-col gap-4 items-center" >
                            <img className="w-50" src={item.img} alt={item.name} />
                            <p className="font-bold text-xl ">{item.name}</p>
                        </div>
                    ))
                }
            </div>

            
        

            <div className="flex flex-col gap-4 mt-15 px-5 sm:px-10 xl:px-30">
                <h2 className="font-bold text-3xl">Spices
</h2>
                <hr className="h-1 border-0 bg-green-500" />
                </div>

        <div className="grid grid-cols-2 gap-8 px-5 mt-12 sm:grid-cols-3 lg:grid-cols-4 xl:px-30">
                {
                spices.map((item)=>(
                        <div key={item.id} className="flex flex-col gap-4 items-center" >
                            <img className="w-50" src={item.img} alt={item.name} />
                            <p className="font-bold text-xl ">{item.name}</p>
                        </div>
                    ))
                }
            </div>
            </div>
        
    )
}