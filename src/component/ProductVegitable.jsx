import vegitable from "../data/vegetables";
import ProductHeadingInf from "./ProductHeadingInf";

export default function ProductVegitable(){
    return(
        <section className="font-poppins">
        <ProductHeadingInf heading="All Vegitable Products"/>
            

        <div className="grid grid-cols-2 gap-8 px-5 mt-12 sm:grid-cols-3 lg:grid-cols-4 xl:px-30">
                {
                    vegitable.map((item)=>(
                        <div key={item.id} className="flex flex-col gap-4 items-center" >
                            <img className="w-50" src={item.img} alt={item.name} />
                            <p className="font-bold text-xl ">{item.name}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}