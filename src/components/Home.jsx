import Navbar from "./Navbar"
import "./Home.css"
import Footer from "./footer"
const Home = () => {
  return (
    <>
        <Navbar/>
    <div className="container">
        <div className="main">
            <h1>You got the travel plans, We got the travel vans</h1>
            <h2>Add Adventure to your life by joining the #vanlife movement. </h2>
            <h2>Rent the perfect van to make your perfect road trip.</h2>
            <button className="button">Find your Van</button>
            <Footer/>
        </div>
    </div>
    </>
  )
}

export default Home