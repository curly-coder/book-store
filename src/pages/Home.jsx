import Hero from "../components/Hero.jsx";
import NewArrivals from "../components/NewArrivals.jsx";
import About from "../components/About.jsx";
import PopularBooks from "../components/PopularBooks.jsx";
import Features from "../components/Features.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
    return (
        <>
            <Hero/>
            <NewArrivals/>
            <About/>
            <PopularBooks/>
            <Features/>
            <div className='max-padd-container bg-white'>
            <Footer/>
            </div>
        </>
    )
}
export default Home
