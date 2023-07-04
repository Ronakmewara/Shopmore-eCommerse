import React from 'react'

export const Popup = ({showpopup}) => {
  return (
    <div>
        <div className={`${showpopup ? ` hidden`: ` `}`}>
            <div className="popup">
                <p> Item Added to the cart ! </p>
            </div>
        </div>
    </div>
  )
}
export default Popup;
