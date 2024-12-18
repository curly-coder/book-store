import {useContext, useState, useEffect} from 'react'
import Title from "./Title.jsx";
import {ShopContext} from "../context/ShopContext.jsx";
import Item from "./Item.jsx";

const PopularBooks = () => {

    const {books} = useContext(ShopContext)
    const [popularBooks, setPopularBooks] = useState([])
    useEffect(() => {
        const data = books.filter(item => item.popular)
        setPopularBooks(data.slice(0,5))
    }, [books]);


    return (
        <section className='max-padd-container py-16 bg-white'>
            <Title title1={'Popular'} title2={'Books'} titleStyles={'pb-10'} paraStyles={'!block'}/>
        {/* container */}
            <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10'>
                {popularBooks.map(book => (
                    <div key={book._id}>
                        <Item book={book}/>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default PopularBooks
