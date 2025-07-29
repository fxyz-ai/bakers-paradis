import { useState } from "react"
export const Cart=({cartItems,setCartItems})=>{
    
    const [showDiv,SetShowDiv]=useState(false)
    
    const openCart=()=>{
        SetShowDiv(prev=>!prev)
    }
    
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
    
    return <>
        <button className="fixed top-6 right-6 text-2xl text-center p-4 shadow-md shadow-gray-300-100 bg-gray-800 rounded-xl text-white bg-clip-padding" onClick={openCart}>
        
        {showDiv?(
            <><i className="fa-solid fa-circle-xmark"></i></>
        ):
        (
            <><i className="fa-solid fa-cart-shopping"></i></>
        )}
        </button>
        {showDiv && (
            <div className="w-1/4 h-96 bg-gray-500 fixed top-24 rounded-xl right-5 p-8 overflow-auto">
                <h3 className="font-bold text-2xl">Items in cart: {cartItems.length}</h3>
                {Object.entries(cartItems).map(([item,quantity]) =>{
                    return(<>
                        <div className="flex justify-between">
                            <p key={item} className="text-xl mb-6">{item}: </p>
                            <div className="flex p-2 font-bold  h-fit ml-6 mb-6 bg-white rounded-lg text-sm text-black w-1/4 justify-between">
                                <button onClick={() => handleClick(item,"remove")}><i className="fa-solid fa-minus"></i></button>
                                <p>{quantity}</p>
                                <button onClick={() => handleClick(item,"add")}><i className="fa-solid fa-plus"></i></button>
                            </div>
                        </div>
                    </>)
                })}
            </div>
        )}
    </>
}