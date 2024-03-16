import { IoSearch } from "react-icons/io5";

const Search = () => {
    return(
        <div className=" 
        w-2/5
        h-8
        bg-white
        rounded
        px-2
        flex
        center
        max-md:w-64
        ">
            <input type="text" placeholder="O que está procurando?" className="h-7 w-11/12 border-transparent focus:outline-none text-black"/>
            <button className="text-black pl-6">
                <IoSearch className="text-xl"/>
            </button>
        </div>
    )
}

export { Search }