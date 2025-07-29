
export const SearchBar=({search,setSearch})=>{
    return <>
        <input
            id="search"
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => { setSearch(e.target.value.toLowerCase())}}
            className='p-2 w-48 border-blue-200 border-2'
        />
    </>
}