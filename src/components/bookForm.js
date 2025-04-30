import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const BookForm = () => {
    const initialFormData = {
        fullName: "",
        email: "",
        phoneNumber: "",
        hospitalname: ""
    }
    const [formData, setFormData] = useState(initialFormData);
    const [consent, setConsent] = useState(false);
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({});
    const navigate = useNavigate()
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        setErrors((prev) => ({
            ...prev,
            [name]: "", // clear error on change
        }));
    }
    const handleCheckbox = (e) => {
        setConsent(e.target.checked);
        setErrors((prev) => ({
            ...prev,
            consent: "", // clear checkbox error
        }));
    }
    // Validate the form fields for all the input fields including checkbox
    const validate = () => {
        const newErrors = {};
        if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
        if (!formData.hospitalname.trim()) newErrors.hospitalname = "Hospital name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }
        if (!formData.phoneNumber.trim()) {
            newErrors.phoneNumber = "Phone number is required";
        } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
            newErrors.phoneNumber = "Phone number must be 10 digits";
        }
        if (!consent) {
            newErrors.consent = "Please provide consent to be contacted";
        }
        return newErrors;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        try {
            setLoading(true);
            const formWithPage = { ...formData, page: window.location.href };
             axios.post("/healthform.php", formWithPage).then(
                res => {
                    setFormData(initialFormData);
                    setConsent(false);
                    navigate("/thankyou");
                }
             )                                                    
        } catch (error) {
            console.error('Error:', error);
            toast.error(
                error?.response?.data?.message ||
                'Oops! We encountered an issue sending your message. Please try again later.',
                {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored',
                }
            );
        } finally {
            setLoading(false);
        }
    }
    return (
        <div className="service-content LogoVisual " style={{
            backgroundColor: "#f9f9f9",
            padding: "30px 0px"
        }}>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="row align-items-center">
                        <div className="col-xl-4">
                            <h3 className='text-center ' style={{
                                fontSize: "38px"
                            }}>
                                Get a Free Consultation
                            </h3>
                        </div>
                        <div className="col-xl-8 d-flex flex-column justify-content-center align-items-center">
                            <div className='row w-100'>
                                <div className='col-lg-6 col-xl-3 my-2'>
                                    <input className='form-control w-100 py-2' disabled={loading} type='text' name='fullName' onChange={handleChange} value={formData.fullName} placeholder='Name' />
                                    {errors.fullName && <small className="text-danger">{errors.fullName}</small>}
                                </div>
                                <div className='col-lg-6 col-xl-3 my-2'>
                                    <input className='form-control w-100 py-2' disabled={loading} type='email' name='email' onChange={handleChange} value={formData.email} placeholder='Email' />
                                    {errors.email && <small className="text-danger">{errors.email}</small>}
                                </div>
                                <div className='col-lg-6 col-xl-3 my-2'>
                                    <input className='form-control w-100 py-2' disabled={loading} type='text' name='phoneNumber' onChange={handleChange} value={formData.phoneNumber} placeholder=' Phone Number' />
                                    {errors.phoneNumber && <small className="text-danger">{errors.phoneNumber}</small>}
                                </div>
                                <div className='col-lg-6 col-xl-3 my-2'>
                                    <input className='form-control w-100 py-2' disabled={loading} type='text' name='hospitalname' onChange={handleChange} value={formData.hospitalname} placeholder='Hospital Name' />
                                    {errors.hospitalname && <small className="text-danger">{errors.hospitalname}</small>}
                                </div>
                            </div>
                            <div className='text-center d-flex justify-content-center gap-3 flex-md-row flex-column align-items-center mb-2 mt-4'>
                                <div>
                                    <input type='checkbox' disabled={loading} checked={consent} style={{
                                        cursor: "pointer"
                                    }} onChange={handleCheckbox} />
                                    <span className='ps-2 '>I hereby give my consent for NovaTales Media LLP to contact me.</span>
                                    {errors.consent && <div className="text-danger small">{errors.consent}</div>}
                                </div>
                                <div className="submit">
                                    <input id="submit" disabled={loading} type="submit" value="Submit" className="btn pink" style={{
                                        backgroundColor: "#fec436",
                                        borderRadius: "30px",
                                        padding: "8px 22px", fontWeight: "500"
                                    }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default BookForm;
