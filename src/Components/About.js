 
import Footer from "../Homepage-Components/Footer"
import image from "../images/about.png"
  
export const About = () => {
  return (
    <div className="outer-about" >
        <div className="about-section container d-flex gap-3 flex-row  ">
            <div className="about-image ">
                        <div className="image">
                            <img src={image} alt="" />
                        </div>
            </div>
            <div className="about-heading-desc">
                     
                    <div className="desc">
                            <span >
                            At Shopmore, we believe that fashion should be a reflection of your unique personality. We're not just an online clothing store; we're your go-to destination for all things stylish, trendy, and comfortable. We understand the power of a well-chosen outfit, and that's why we're dedicated to helping you express yourself through fashion effortlessly.
                            </span>
                    </div>
            </div>
        </div>
        <Footer/>
         
    </div>
  )
}
