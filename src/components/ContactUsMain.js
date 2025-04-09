import React, { useEffect, useState } from 'react';
import '../css/contactus-main.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import baseURL from '../Environment';
import { useNavigate } from 'react-router-dom';

export default function ContactUsMain() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phoneNumber: '',
    service: '',
    otherInfo: '',
  });
const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const form = e.target;
  
    if (form.checkValidity() === false) {
      form.classList.add('was-validated');
      return;
    }
  
    // Append current page URL to the form data
    const formWithPage = { ...formData, page: window.location.href };
  
    try {
      await axios.post('/contactusmain.php', formWithPage);
      setFormData({
        fullname: '',
        email: '',
        phoneNumber: '',
        service: '',
        otherInfo: '',
      });
  
      form.classList.remove('was-validated');
      form.reset();

      navigate("/thankyou")
    } catch (error) {
      console.error('There was an error submitting the form!', error);

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
  };
  
  useEffect(() => {
    const forms = document.getElementsByClassName('needs-validation');
    Array.prototype.filter.call(forms, (form) => {
      form.addEventListener('submit', (event) => {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HelmetProvider >
      <Helmet >
        <title>Contact Us | Nova Tales Digital Marketing Company</title>
        <meta name="description" content="We are the best Digital Marketing Agency." />
        <meta name="keywords" content="Digital marketing agency, Digital marketing services, Digital Services, SEO service, Best Ecommerce service, Best digital Marketing Company, Skilled Digital Marketing Company, Podcast service, Video Production Company, Web & App development services, Content Marketing" />
      </Helmet>
      <div className="touch">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="get-heading">
                <h1>Get in Touch</h1>
              </div>
              <div className="contact">
                <form className="needs-validation" onSubmit={handleSubmit} noValidate>
                  <div className="name">
                    <label htmlFor="name">Name</label> <br />
                    <input type="text" name="fullname" className="form-control" id="fullname" onChange={handleChange} required />
                    <div className="invalid-tooltip">
                      Name is Required.
                    </div>
                  </div>
                  <div className="email">
                    <label htmlFor="email">E-mail Address</label> <br />
                    <input type="email" name="email" className="form-control" id="email" onChange={handleChange} required />
                    <div className="invalid-tooltip">
                      E-mail Address is Required.
                    </div>
                  </div>
                  <div className="email">
                    <label htmlFor="phoneNumber">Phone Number</label> <br />
                    <input
                      type="text"
                      name="phoneNumber"
                      className="form-control"
                      id="phoneNumber"
                      onChange={(e) => {
                        const value = e.target.value;
                        if (/^\d{0,10}$/.test(value)) {
                          handleChange(e);
                        }
                      }}
                      value={formData.phoneNumber}
                      required
                      pattern="\d{10}"
                      maxLength="10"
                    />
                    <div className="invalid-tooltip">
                      Phone Number is Required.
                    </div>
                  </div>
                  <div className="selection">
                    <label htmlFor="service"> Services Required</label> <br />
                    <select className="custom-select" name="service" id="service" value={formData.service} onChange={handleChange} required>
                      <option value="" disabled>Select Service</option>
                      <option value="Branding">Branding</option>
                      <option value="Logo & Visual Elements">Logo & Visual Elements</option>
                      <option value="Advertising & Marketing Materials">Advertising & Marketing Materials</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Web & App Development">Web & App Development</option>
                      <option value="Video Production">Video Production</option>
                      <option value="Studio Rentals">Studio Rentals</option>
                      <option value="Content Marketing">Content Marketing</option>
                      <option value="Podcast Planning & Production">Podcast Planning & Production</option>
                    </select>
                    <div className="invalid-tooltip">
                      Please choose a Service.
                    </div>
                  </div>

                  <div className="other">
                    <label htmlFor="other_info">Any other information that you would like to provide</label> <br />
                    <input type="text" name="otherInfo" id="otherInfo" onChange={handleChange} />
                  </div>
                  <div className="submit">
                    <input id="submit" name="submit" type="submit" value="Submit" />
                  </div>
                </form>
                <ToastContainer />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="logo-heading">
                <div className="sqs-block-content">
                  <hr />
                </div>
                <h2>NovaTales Media</h2>
                <p className="p1">Visit our Office to take your company to the next level.</p>
                <p className="p2"><b>India Office:</b></p>
                <div className="map pt-3">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15223.561365483194!2d78.3459329!3d17.4649619!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb932a0a23c813%3A0x579fff0ed0e66665!2sNova%20Tales%20Media!5e0!3m2!1sen!2sin!4v1706016071329!5m2!1sen!2sin" width="600" height="350" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Map showing the location of Nova Tales Media"></iframe>
                </div>
                <p className="p2 mt-3"><b>US Office:</b></p>
                <div className="map pt-3 mb-3">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2974.44996218876!2d-88.27181968654996!3d41.79706630976128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880efbb0a42a7553%3A0x919e1847256d27b9!2s2055%20Comprehensive%20Dr%2C%20Aurora%2C%20IL%2060505%2C%20USA!5e0!3m2!1sen!2sin!4v1722510960231!5m2!1sen!2sin" width="600" height="350" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Map showing the location of the US Office"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}
