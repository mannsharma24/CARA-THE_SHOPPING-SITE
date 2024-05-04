/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import "../styles/Hero.css";
const Hero = () => {
  return (
    <div className="hero bg-base-200 bg-blend-overlay">
    <div className="hero-content text-center">
      <div className="max-w-xl">
        <h1 className="text-6xl font-bold max-md:text-4xl text-accent-content">Best Clothing Shop Of The Year!</h1>
        <p className="py-6 text-2xl max-md:text-lg text-accent-content">
        Discover elegance, style, and impeccable service at our award-winning Clothing Shop of the Year. From trending looks to timeless classics, we've got you covered.
        </p>
        <Link to="/shop" className="btn btn-wide bg-blue-600 hover:bg-blue-500 text-white">Shop Now</Link>
      </div>
    </div>
  </div>
  )
}

export default Hero