import React from 'react'

export const Footer = () => {
  return (
    <div className='footer d-flex container flex-row flex-wrap justify-content-around'> 
        <div className="footer1 d-flex flex-column gap-3">
            <ul className='text-center' style={{padding:"5px" , borderRadius:"3px" , border:"1px solid black"}}>
                <li> USEFULL LINKS</li>
            </ul>
            <ul className='d-flex flex-column gap-2 ' style={{paddingLeft:"40px" , borderLeft:"2px solid #1fa6f2"}}>
                <li>About</li>
                <li>Shop</li>
                <li>Catalauge</li>
                <li>New Arrivals</li>
                <li>Contact</li>
            </ul>
        </div>
      

       
        <div className="footer3">
            <span> Follow Us On</span>
         <ul className='my-5 d-flex flex-column gap-4'>
            <li><i className="fa-brands fa-instagram"></i></li>
            <li><i className="fa-brands fa-facebook"></i></li>
            <li><i className="fa-brands fa-twitter"></i></li>
         </ul>

        </div>
    </div>
  )
}
export default Footer
