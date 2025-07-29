import { useEffect,useState } from "react";
import { products } from "../data"
export const Product=({search,type, setCartItems,cartItems})=>{

    const [filteredItems, setFilteredItems] = useState([]);   
    
    useEffect(()=>{
        const filtered=products.filter(prod=>{
            const matchType = type === "all" || prod.type === type;
            const matchSearch = prod.name.toLowerCase().includes(search.toLowerCase());
            return matchType && matchSearch;
        })
        setFilteredItems(filtered)
    },[type,search])
    
    const handleClick = (data,value) => {
        if(value==="add"){
            setCartItems(arr=>(
                {...arr, [data]:(arr[data]||0)+1}
            ))
        }
        else if(value==="remove"){
            setCartItems(arr => {
                let curr = {...arr}
                if(curr[data]>1){
                    curr[data]-=1
                }
                else{
                    delete curr[data]
                }
                return curr
            })
        }
    }
    
    const perItemLen=(name)=>{
        return cartItems[name]
    }
    return(
        <>
        {filteredItems.length===0?(
            <p className="text-center text-gray-700 text-4xl mt-14  ">No items found</p>):
            (<ul className='list-none w-full grid grid-cols-4 gap-4 place-items-center items-center'>
                {filteredItems.map(prod=>{
                return (
                    <div key={prod.id} className="flex flex-col w-64 h-80 m-10 p-4 bg-blue-900 text-gray-100 rounded-2xl hover:shadow-gray-700 hover:shadow-md shadow transition-all ease-in duration-300">
                        <div className="h-1/3">
                            <h2 className="text-2xl font-bold mt-4">{prod.name}</h2>
                            <h3 className="capitalize text-xl">{prod.type}</h3>
                        </div>
                        <div className="mt-6 h-1/3">
                            <p className='font-bold'>Toppings:</p>
                            <ul className='list-inside flex w-full items-start justify-around flex-col'>
                                {prod.topping.map(top=>{
                                    return <li key={top.id}>{top.type}</li>
                                })}
                            </ul>
                        </div>
                        <div className="flex w-full justify-between items-center h-auto">
                            <h2 className="text-3xl font-bold">₹{prod.ppu}</h2>
                            {perItemLen(prod.name)===undefined?   (<button onClick={() => handleClick(prod.name,"add")} className='text-center p-3 bg-white rounded-xl text-xl text-black'
                            ><i className="fa-solid fa-cart-plus"></i></button>) :
                            (
                            <div className="flex p-3 font-bold bg-white rounded-xl text-lg text-black w-2/5 justify-between">
                                <button onClick={() => handleClick(prod.name,"remove")}><i className="fa-solid fa-minus"></i></button>
                                <p>{perItemLen(prod.name)}</p>
                                <button onClick={() => handleClick(prod.name,"add")}><i className="fa-solid fa-plus"></i></button>
                            </div>
                            )}
                        </div>
                    </div>
                )})}   
            </ul >)}
        </>
    )
}