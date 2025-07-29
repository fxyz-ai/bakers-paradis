import { category } from "../data"

export const Filter=({setType,type})=>{

    const handleFilter=(filt)=>{
    setType(filt)
}    

    return <>
        {category.map(item=>{
            return <button key={item.input} className='pr-2 pl-2 m-3 border-blue-500 border-2 text-xl active:bg-blue-500 active:text-slate-900' onClick={() => handleFilter(`${item.input}`)}>{item.category}</button>
        })}
    </>
}