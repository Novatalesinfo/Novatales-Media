import React from 'react'
import "../css/thankyou.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const ThankYou = () => {
    return (
        <div className='thankyou-box'>
            <div className='thankyou-icon'>
                <FontAwesomeIcon icon={faCircleCheck} className='thankyou-fa-icon' />
            </div>
            <h2 style={{
                textAlign:"center" , width:"80%"
            }}>
                Thank you for contacting us. We will get back to you soon.
            </h2>
            
                <button className='thankyou-btn'>
                    <Link to="/" style={{
                        color:"#302243", fontWeight:"600"
                    }}>
                    Back to Home
                    </Link>
                </button>
           
        </div>
    )
}

export default ThankYou
