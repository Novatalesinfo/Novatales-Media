import React, { useState } from 'react';
import ContactImage from '../images/women illustration.png';
import '../css/Home.css';
import '../css/HomeMediaQuery.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify'; // Import the Bounce transition effect
import baseURL from '../Environment';
import { useNavigate } from 'react-router-dom';
export default function ContactForm() {
  // Define state for form data
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate()
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formWithPage = { ...formData, page: window.location.href };
      const response = await axios.post('/servicecontact.php', formWithPage); // Fixed URL format
      if (response && response.status === 200) {
        setFormData({
          fullname: '',
          email: '',
          phoneNumber: '',
          message: ''
        });
        navigate("/thankyou")
      } else {
        toast.error('Oops! We encountered an issue sending your message. Please try again later.', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          transition: Bounce,
        });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };



  return (
    <div>
      <div id="contact-us">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <div className="contact-image">
              <img src={ContactImage} alt="contact-us" width="100%" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="contact">
              <div className="contact-heading">
                <h2>Contact Us</h2>
              </div>
              <div className="contact-form">
                <form id="FrmEnquiry" onSubmit={handleSubmit}>
                  <input
                    name="fullname"
                    id="fullname"
                    required
                    placeholder="Your Name"
                    value={formData.fullname}
                    onChange={handleChange}
                  /><br />
                  <input
                    name="email"
                    id="email"
                    type="email"
                    required
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                  /><br />
                  <input
                    name="phoneNumber"
                    id="phoneNumber"
                    type="text"
                    required
                    placeholder="Your Mobile Number"
                    value={formData.phoneNumber}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (/^\d{0,10}$/.test(value)) {
                        handleChange(e);
                      }
                    }}
                  /><br />
                  <div className="clearfix"></div>
                  <div className="message">
                    <textarea
                      name="message"
                      id="message"
                      required
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="submit">
                    <input id="submit" type="submit" value="Submit" className="btn pink" />
                  </div>
                </form>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
