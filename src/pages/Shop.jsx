import {RiSearch2Line} from "react-icons/ri";
import {LuSettings2} from "react-icons/lu";
import {categories} from "../assets/data.jsx";
import Title from "../components/Title.jsx";
import {useContext, useEffect, useState} from "react";
import {ShopContext} from "../context/ShopContext.jsx";
import  Item from "../components/Item.jsx";
import Footer from "../components/Footer.jsx";


const Shop = () => {

    const {books} = useContext(ShopContext)
    const [category, setCategory] = useState([])
    const [sortType, setSortType] = useState('relevant')
    const [filteredBooks, setFilteredBooks] = useState([])
    const [search, setSearch] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 10

    const toggleFilter =(value, setState) => {
        setState((prev)=> prev.includes(value) ? prev.filter((item) => item!=value) : [...prev,value])
    }

    const applyFilters = () => {
        let filtered = [...books]

        if(search){
            filtered = filtered.filter(book => book.name.toLowerCase().includes(search.toLowerCase()))
        }
        if(category.length){
            filtered = filtered.filter(book => category.includes(book.category))
        }
        return filtered
    }

    const applySorting = (booksList) => {
        switch(sortType){
            case 'low':
                return booksList.sort((a,b) => a.price - b.price)
            case 'high':
                return booksList.sort((a,b) => b.price - a.price)
            default:
                return booksList
        }
    }

    useEffect(() => {
        let filtered = applyFilters()
        let sorted = applySorting(filtered)
        setFilteredBooks(sorted)
        setCurrentPage(1)
    }, [category, sortType, books, search])

    const getPaginatedBooks = () => {
        const startIndex = (currentPage - 1) * itemsPerPage
        const endIndex = startIndex + itemsPerPage
        return filteredBooks.slice(startIndex, endIndex)
    }

    const totalPages = Math.ceil(filteredBooks.length / itemsPerPage)

    return (
        <section className='max-padd-container bg-white'>
            <div className='pt-28'>
            {/*search box*/}
                <div className='w-full max-w-2xl flexCenter mx-auto'>
                    <div className='inline-flex items-center justify-center bg-primary overflow-hidden w-full rounded-full p-4 px-5'>
                        <div className='text-lg cursor-pointer'> <RiSearch2Line/> </div>
                        <input type="text"
                               placeholder='Search products...'
                               value={search}
                               onChange={(e) => setSearch(e.target.value)}
                               className='border-none outline-none w-full text-sm pl-4 bg-primary'
                        />
                        <div className='cursor-pointer flexCenter text-lg border-l pl-2'><LuSettings2/></div>
                    </div>
                </div>
                {/*categories filter*/}
                <div className='mt-12 mb-16'>
                    <h4 className='h4 mb-4 hidden sm:flex'>Categories:</h4>
                    <div className='flexCenter sm:flexStart flex-wrap gap-x-12 gap-y-4 mx-auto'>
                        {categories.map((cat) => (
                            <label key={cat.name}>
                                <input value={cat.name} onChange={(e) => toggleFilter(e.target.value, setCategory)} type='checkbox' className='hidden peer'/>
                                <div className='flexCenter flex-col gap-2 peer-checked:text-secondaryOne cursor-pointer'>
                                    <div className='bg-primary h-20 w-20 flexCenter rounded-full'>
                                        <img src={cat.image} className='object-cover h-10 w-10'/>
                                    </div>
                                    <span className='medium-14'>{cat.name}</span>
                                </div>
                            </label>
                        ))}
                    </div>
                </div>
               {/*books container*/}
                <div className='mt-8'>
                {/*title and sort*/}
                    <div className='flexBetween !items-start gap-7 flex-wrap pb-16 max-sm:flexCenter text-center'>
                        <Title title1={'Our'} title2={'Book List'} titleStyles={'pb-0 text-start'} paraStyles={'!block'}/>
                        <div className='flexCenter gap-x-2'>
                            <span className='hidden sm:flex-medium medium-16'>Sort by:</span>
                            <select onChange={(e) => setSortType(e.target.value)} className='text-sm p-2.5 outline-none bg-primary text-gray-30 rounded'>
                                <option value='relevant'>Relevant</option>
                                <option value='low'>Low</option>
                                <option value='high'>High</option>
                            </select>
                        </div>
                    </div>
                    {/*books*/}
                    <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
                        {getPaginatedBooks().length > 0 ? (
                            getPaginatedBooks().map((book) => (
                                <Item book={book} key={book._id}/>
                            ))
                        ) : (
                            <p>No books found</p>
                        )}
                    </div>
                </div>
                {/*pagination*/}
                <div className='flexCenter mt-14 mb-10 gap-4'>
                    {/*previous button*/}
                    <button
                        className={`btn-secondary !py-1 !px-3 ${currentPage === 1} && "opacity-50 cursor-not-allowed"`}
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage((prev) => prev - 1)}
                    >
                        Previous
                    </button>
                    {/*page numbers*/}
                    {Array.from({length: totalPages}, (_, index) =>
                        <button key={index + 1}
                                onClick={() => setCurrentPage(index + 1)}
                                className={`btn-light !py-1 !px-3 ${currentPage === index + 1 && "!bg-secondaryOne"}`}
                        >
                            {index + 1}
                        </button>
                    )}
                    {/*next button*/}
                    <button
                        className={`btn-secondary !py-1 !px-3 ${currentPage === totalPages} && "opacity-50 cursor-not-allowed"`}
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage((prev) => prev + 1)}
                    >
                        Next
                    </button>
                </div>
            </div>
            <Footer/>
        </section>
    )
}
export default Shop