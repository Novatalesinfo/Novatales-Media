import React, { useEffect, useState } from 'react'
import RocketImage from '../../images/rocket 2-01.png'
import Cloud1Image from '../../images/rocket 3-01.png'
import Cloud2Image from '../../images/IMG_20231227_151842.png'
import '../../css/servisesCss/ServiceContact.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Bounce } from 'react-toastify' // Import the Bounce transition effect
import baseURL from '../../Environment'
import { useNavigate } from 'react-router-dom'

export default function ServiceContactForm() {
  // Initialize form data state
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phonenumber: '',
    message: ''
  })
  const navigate = useNavigate()
  // Handle form input changes
  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }))
  }

  // Handle phone number input to allow only digits
  const handlePhoneChange = e => {
    const { value } = e.target
    // Remove non-numeric characters
    const numericValue = value.replace(/\D/g, '')
    setFormData(prevFormData => ({
      ...prevFormData,
      phonenumber: numericValue
    }))
  }

  // Handle form submission
  const handleSubmit = e => {
    e.preventDefault()

    // Append current page URL to the form data
    const formWithPage = { ...formData, page: window.location.href }

    // Send form data to the server
    axios
      .post('/servicecontact.php', formWithPage)
      .then(response => {
        // Handle success
        // Clear form fields
        setFormData({
          fullname: '',
          email: '',
          phonenumber: '',
          message: ''
        })
        navigate("/thankyou")
      })

      .catch(error => {
        console.error('There was an error submitting the form!', error)
        // Handle error
        toast.error(
          'Oops! We encountered an issue sending your message. Please try again later.',
          {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
            transition: Bounce
          }
        )
      })
  }

  // Initialize AOS library for animations
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div>
      <div className='service-contact'>
        <div className='contact-now'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6'>
                <div data-aos='fade-up'>
                  <img
                    src={RocketImage}
                    alt='Rocket illustration representing progress and growth'
                    width='550px'
                    className='rocket'
                  />
                </div>

                <h4>
                  {' '}
                  Fill out the form and one of our experts will get in touch
                  within 24 hours.
                </h4>
                <div data-aos='fade-up'>
                  <img
                    src={Cloud1Image}
                    alt='Cloud graphic element for design accent'
                    width='700px'
                    className='cloud1'
                  />
                  <img
                    src={Cloud2Image}
                    alt='Additional cloud graphic for design accent'
                    className='cloud2'
                    width='700px'
                  />
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='service-contact-us'>
                  <form onSubmit={handleSubmit}>
                    <input
                      type='text'
                      name='fullname'
                      id='fullname'
                      required
                      value={formData.fullname}
                      onChange={handleChange}
                      placeholder='Your Full Name'
                    />
                    <br />
                    <input
                      type='email'
                      name='email'
                      id='email'
                      required
                      aria-required='true'
                      pattern='^.+@.+\.[a-zA-Z]{2,63}$'
                      maxLength='250'
                      value={formData.email}
                      onChange={handleChange}
                      placeholder='Email Address'
                    />
                    <br />
                    <input
                      type='tel'
                      name='phonenumber'
                      id='phonenumber'
                      required
                      value={formData.phonenumber}
                      onChange={handlePhoneChange}
                      pattern='\d{10}'
                      placeholder='Phone Number'
                      maxLength='10'
                    />
                    <br />
                    <textarea
                      name='message'
                      id='message'
                      value={formData.message}
                      onChange={handleChange}
                      placeholder='Your Message'
                      rows='3'
                      required
                    />
                    <br />
                    <input
                      id='submit'
                      type='submit'
                      value='REQUEST A QUOTE NOW'
                    />
                  </form>
                  <ToastContainer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
