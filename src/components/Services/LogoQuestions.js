
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import ServiceContactForm from './ServiceContactForm';
import AllServices from '../AllServices';
import '../../css/servisesCss/logo.css'
import axios from 'axios';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import baseURL from '../../Environment';
import { useNavigate } from 'react-router-dom';
export default function LogoQuestions() {
  const [activeKey, setActiveKey] = useState("0");
  const [isOtherSelected, setIsOtherSelected] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [logoFormData, setLogoFormData] = useState({
    // Define state variables for logo form data
    fullName: '',
    phoneNumber: '',
    email: '',
    companyName: '',
    logoTagline: '',
    createTagline: '',
    newBusiness: '',
    existingBusinessReason: '',
    message: '',
    organizationDescription: '',
    mainProductsServices: '',
    targetCustomers: '',
    industries: '',
    targetMarket: '',
    targetmessage: '',
    competitors: '',
    logoComplexity: '',
    logoIdeas: '',
    colorPalette: '',
    Colors: '',
    desiredFont: '',
    logoStyles: '',
    logoMessage: '',
    companyNameMeaning: '',
    logoExamples: '',
    colorCombinations: ''
  });
  const navigate = useNavigate()
  // Define a function to handle logo form input changes
  const handleLogoFormChange = (e) => {
    const { name, value } = e.target;
    setLogoFormData({
      ...logoFormData,
      [name]: value
    });
  };

  // Define a function to handle radio button changes
  const handleRadioChange = (event) => {
    // Check if the "other" option is selected
    setIsOtherSelected(event.target.id === 'other');

    // Extract the name and value from the event target
    const { name, value } = event.target;

    // Update the logo form data with the new value
    setLogoFormData({
      ...logoFormData,
      [name]: value
    });
  };

  // Define a function to handle final form submission
  const handleFinalSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/questionnaire.php', logoFormData);
      console.log('Form submission successful:', response.data);
      // Clear the form data
      setLogoFormData({
        fullName: '',
        phoneNumber: '',
        email: '',
        companyName: '',
        logoTagline: '',
        createTagline: '',
        newBusiness: '',
        existingBusinessReason: '',
        message: '',
        organizationDescription: '',
        mainProductsServices: '',
        targetCustomers: '',
        industries: '',
        targetMarket: '',
        targetmessage: '',
        competitors: '',
        logoComplexity: '',
        logoIdeas: '',
        colorPalette: '',
        Colors: '',
        desiredFont: '',
        logoStyles: '',
        logoMessage: '',
        companyNameMeaning: '',
        logoExamples: '',
        colorCombinations: ''
      });
      navigate("/thankyou")
    } catch (error) {
      console.error('Error submitting form:', error);
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
      // Handle error - display an error message, etc.
    }
  };



  // Define a function to move to the next step
  const nextStep = () => {
    let allFieldsFilled = true;

    // Check if all required fields in the current step are filled out
    switch (currentStep) {
      case 1:
        allFieldsFilled =
          logoFormData.fullName !== '' &&
          logoFormData.phoneNumber !== '' &&
          logoFormData.email !== '';
        break;
      case 2:
        allFieldsFilled =
          logoFormData.companyName !== '' &&
          logoFormData.logoTagline !== '' &&
          logoFormData.createTagline !== '' &&
          logoFormData.newBusiness !== '' &&
          (logoFormData.existingBusinessReason !== 'Other' ||
            (logoFormData.message && logoFormData.message !== ''));
        break;
      case 3:
        allFieldsFilled =
          logoFormData.organizationDescription !== '' &&
          logoFormData.mainProductsServices !== '' &&
          logoFormData.targetCustomers !== '' &&
          logoFormData.industries !== '' &&
          (logoFormData.targetMarket !== 'Other' ||
            (logoFormData.targetmessage && logoFormData.targetmessage !== ''));
        break;
      case 4:
        allFieldsFilled =
          logoFormData.competitors !== '' &&
          logoFormData.logoComplexity !== '' &&
          logoFormData.logoIdeas !== '' &&
          logoFormData.colorPalette !== '' &&
          logoFormData.Colors !== '';
        break;
      case 5:
        allFieldsFilled =
          logoFormData.desiredFont !== '' &&
          logoFormData.logoStyles !== '' &&
          logoFormData.logoMessage !== '' &&
          logoFormData.companyNameMeaning !== '' &&
          logoFormData.logoExamples !== '' &&
          logoFormData.colorCombinations !== '';
        break;
      default:
        break;
    }

    if (allFieldsFilled) {
      setCurrentStep(currentStep + 1);
    } else {
      alert('Please fill out all required fields before proceeding.');
      // Optionally, you can scroll to the first unfilled required field or handle the UI as needed.
    }
  };


  return (
    <HelmetProvider >
      <Helmet>
        <title>Logo Design Questionnaire</title>
        <meta
          name="description"
          content="Complete the form to share information about your business in NovaTales Logo Design Questionnaire."
        />
        <meta name="keywords"
          content="Logo Design Company, Best Logo Design Company, Logo Designing, Logo Designing Agency, Design and Branding Company." />
      </Helmet>
      <div className='Logo-Questions'>
        <Container className=' mt-5'>
          <h1 className='mb-5 text-center'>LOGO DESIGN QUESTIONNAIRE</h1>
          <Accordion activeKey={activeKey}>
            <Accordion.Item eventKey="0">
              <Accordion.Body>
                <Form onSubmit={handleFinalSubmit}>
                  {/* Step 1 Questions */}
                  {currentStep === 1 && (
                    <div className='accordion-form mb-4'>
                      <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                        <Form.Label className="mb-3">Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="fullName"
                          placeholder="Enter Your Name"
                          value={logoFormData.fullName}
                          onChange={handleLogoFormChange}
                          autoFocus
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="mb-3">Phone Number</Form.Label>
                        <Form.Control
                          type="text"
                          name="phoneNumber"
                          placeholder="Enter Your Mobile Number"
                          value={logoFormData.phoneNumber}
                          onChange={handleLogoFormChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="mb-3">Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Enter Your Email Address"
                          value={logoFormData.email}
                          onChange={handleLogoFormChange}
                          required
                        />
                      </Form.Group>
                      <Button onClick={nextStep}>
                        Submit
                      </Button>

                    </div>
                  )}
                  {currentStep === 2 && (
                    <div>
                      <Form.Group className="mb-4" controlId="companyName">
                        <Form.Label className="mb-3">State your company name?</Form.Label>
                        <Form.Control
                          type="text"
                          name="companyName"
                          value={logoFormData.companyName}
                          onChange={handleLogoFormChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="logoTagline">
                        <Form.Label className="mb-3">Does your logo have a tag line and should it appear in the design?</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          name="logoTagline"
                          value={logoFormData.logoTagline}
                          onChange={handleRadioChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="createTagline">
                        <Form.Label className="mb-3">Do you need us to create a tagline?</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          name="createTagline"
                          value={logoFormData.createTagline}
                          onChange={handleLogoFormChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="newBusiness">
                        <Form.Label className="mb-3">Are you a new business startup?</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          name="newBusiness"
                          value={logoFormData.newBusiness}
                          onChange={handleLogoFormChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="existingBusinessReason">
                        <Form.Label className="mb-3">If you are an existing business, what are the reasons you want a new logo?</Form.Label>
                        <Form.Check
                          type="radio"
                          label="Rebranding"
                          name="existingBusinessReason"
                          value="Rebranding"
                          id="rebranding"
                          onChange={handleRadioChange}
                          className='mb-3'
                        />
                        <Form.Check
                          type="radio"
                          label="Expansion into newer domains"
                          name="existingBusinessReason"
                          value="Expansion into newer domains"
                          id="expansion_domains"
                          onChange={handleRadioChange}
                          className='mb-3'
                        />
                        <Form.Check
                          type="radio"
                          label="Expansion into newer regions"
                          name="existingBusinessReason"
                          value="Expansion into newer regions"
                          id="expansion_regions"
                          onChange={handleRadioChange}
                          className='mb-3'
                        />
                        <Form.Check
                          type="radio"
                          label="Other"
                          name="existingBusinessReason"
                          value="Other"
                          id="other"
                          onChange={handleRadioChange}
                          className='mb-3'
                        />
                        {isOtherSelected && (
                          <Form.Control
                            as="textarea"
                            rows={3}
                            name="message"
                            value={logoFormData.message}
                            placeholder="Please explain further"
                            onChange={handleLogoFormChange}
                            className='mt-3'
                          />
                        )}
                      </Form.Group>
                      <button onClick={nextStep} className='next-button'>Next <FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>
                  )}
                  {/* Step 2 Questions */}
                  {currentStep === 3 && (
                    <div>
                      <Form.Group className="mb-4" controlId="organizationDescription">
                        <Form.Label className="mb-3">Describe what your organization does.</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          name="organizationDescription"
                          value={logoFormData.organizationDescription}
                          onChange={handleLogoFormChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="mainProductsServices">
                        <Form.Label className="mb-3">Mention your main products / services</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          name="mainProductsServices"
                          value={logoFormData.mainProductsServices}
                          onChange={handleLogoFormChange}
                        />
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="targetCustomers">
                        <Form.Label className="mb-3">Who are your target customers?</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          name="targetCustomers"
                          value={logoFormData.targetCustomers}
                          onChange={handleLogoFormChange}
                        />
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="industries">
                        <Form.Label className="mb-3">What industries do you work in?</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          name="industries"
                          value={logoFormData.industries}
                          onChange={handleLogoFormChange}
                        />
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="targetMarket">
                        <Form.Label className="mb-3">What is your target market?</Form.Label>
                        <Form.Check
                          type="radio"
                          label="Local business"
                          name="targetMarket"
                          value="Local business"
                          id="Local-business"
                          onChange={handleRadioChange}
                          className='mb-3'
                        />
                        <Form.Check
                          type="radio"
                          label="Pan India"
                          name="targetMarket"
                          id="Pan-India"
                          value="Pan India"
                          onChange={handleRadioChange}
                          className='mb-3'
                        />
                        <Form.Check
                          type="radio"
                          label="International - specify names of countries:"
                          name="targetMarket"
                          value="International - specify names of countries:"
                          id="International"
                          onChange={handleRadioChange}
                          className='mb-3'
                        />
                        <Form.Check
                          type="radio"
                          label="Global"
                          name="targetMarket"
                          value="International - specify names of countries:"
                          id="Global"
                          onChange={handleRadioChange}
                          className='mb-3'
                        />
                        <Form.Check
                          type="radio"
                          label="Other"
                          name="targetMarket"
                          value="Other"
                          id="other"
                          onChange={handleRadioChange}
                          className='mb-3'
                        />
                        {isOtherSelected && (
                          <Form.Control as="textarea" rows={3} placeholder="Please explain further" className='mt-3'
                            name="targetmessage"
                            value={logoFormData.targetmessage}
                            onChange={handleLogoFormChange}
                          />
                        )}
                      </Form.Group>
                      <button onClick={nextStep} className='next-button'>Next <FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>
                  )}
                  {currentStep === 4 && (
                    <div>
                      <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1"></Form.Group>
                      <Form.Group
                        className="mb-4"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label className="mb-3">Name a few companies that you consider to be your peers or competitors:</Form.Label>
                        <Form.Control as="textarea" rows={3}
                          name="competitors"
                          value={logoFormData.competitors}
                          onChange={handleLogoFormChange}
                          required />
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="mb-3">Do you want your logo to be:</Form.Label>
                        <Form.Check
                          type="radio"
                          label="Very simple"
                          name="logoComplexity"
                          value='Very simple'
                          id="Very-simple"
                          onChange={handleRadioChange}
                          className='mb-3'
                        />
                        <Form.Check
                          type="radio"
                          label="Intricate / elaborate"
                          name="logoComplexity"
                          value="Intricate / elaborate"
                          id="Intricate"
                          onChange={handleRadioChange}
                          className='mb-3'
                        />
                        <Form.Check
                          type="radio"
                          label="In between A and B"
                          name="logoComplexity"
                          value="In between A and B"
                          id="In-between"
                          onChange={handleRadioChange}
                          className='mb-3'
                        />
                        <Form.Check
                          type="radio"
                          label="no preference"
                          name="logoComplexity"
                          value='no preference'
                          id="preference"
                          onChange={handleRadioChange}
                          className='mb-3'
                        />
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="mb-3">Do you have any specific ideas in mind for your desired logo?</Form.Label>
                        <div className="row">
                          <div className="col-lg-4">
                            <Form.Check
                              type="radio"
                              label="Vertical logo"
                              name="logoIdeas"
                              value="Vertical logo"
                              id="Vertical"
                              onChange={handleRadioChange}
                              className='mb-3'
                            />
                            <Form.Check
                              type="radio"
                              label="Horizontal logo"
                              name="logoIdeas"
                              value="Horizontal logo"
                              id="Horizontal-logo"
                              onChange={handleRadioChange}
                              className='mb-3'
                            />
                            <Form.Check
                              type="radio"
                              label="Logo mark (only image icon)"
                              name="logoIdeas"
                              value='Logo mark (only image icon)'
                              id="Logo"
                              onChange={handleRadioChange}
                              className='mb-3'
                            />
                            <Form.Check
                              type="radio"
                              label="Wordmark (only text)"
                              name="logoIdeas"
                              value="Wordmark (only text)"
                              id="Wordmark"
                              onChange={handleRadioChange}
                              className='mb-3'
                            />
                            <Form.Check
                              type="radio"
                              label="Combination mark (image + text)"
                              name="logoIdeas"
                              value="Combination mark (image + text)"
                              id="Combination"
                              onChange={handleRadioChange}
                              className='mb-3'
                            />
                          </div>
                          <div className="col-lg-8">
                            <Form.Check
                              type="radio"
                              label="Letter mark (only initials)"
                              name="logoIdeas"
                              value="Letter mark (only initials)"
                              id="Letter-mark"
                              onChange={handleRadioChange}
                              className='mb-3'
                            />
                            <Form.Check
                              type="radio"
                              label="Abstract mark (abstract imagery)"
                              name="logoIdeas"
                              value="Abstract mark (abstract imagery)"
                              id="Abstract"
                              onChange={handleRadioChange}
                              className='mb-3'
                            />
                            <Form.Check
                              type="radio"
                              label="Emblem logo (combines text and imagery within a frame or border)"
                              name="logoIdeas"
                              value="Emblem logo (combines text and imagery within a frame or border)"
                              id="Emblem"
                              onChange={handleRadioChange}
                              className='mb-3'
                            /><Form.Check
                              type="radio"
                              label="Mascot logo (any animal or being that best represents your company)"
                              name="logoIdeas"
                              value='Mascot logo'
                              id="Mascot"
                              onChange={handleRadioChange}
                              className='mb-3'
                            />
                          </div>
                        </div>
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="mb-3">Please select the color palette(s) you'd like to use for your logo. Choose all
                          options that sound appealing, we will be using multiple colors, color blends,
                          gradients, etc</Form.Label>
                        <div className="row">
                          <div className="col-lg-4">
                            <Form.Check type="radio" label="BLACK (prestige, sophistication, power)" name="colorPalette" id="black" className='mb-3' value="BLACK (prestige, sophistication, power)" onChange={handleRadioChange} />
                            <Form.Check type="radio" label="WHITE (pure, efficient, complete)" name="colorPalette" id="white" className='mb-3' value="WHITE (pure, efficient, complete)" onChange={handleRadioChange} />
                            <Form.Check type="radio" label="GREY (balance, neutral, calm)" name="colorPalette" id="grey" className='mb-3' value='GREY (balance, neutral, calm)' onChange={handleRadioChange} />
                            <Form.Check type="radio" label="BLUE (trust, integrity, knowledge)" name="colorPalette" id="blue" className='mb-3' value='BLUE (trust, integrity, knowledge)' onChange={handleRadioChange} />
                            <Form.Check type="radio" label="GREEN (growth, health, nature)" name="colorPalette" id="green" className='mb-3' value='GREEN (growth, health, nature)' onChange={handleRadioChange} />
                            <Form.Check type="radio" label="DARK GREEN (wealth, generosity, savings)" name="colorPalette" id="darkGreen" className='mb-3' value='DARK GREEN (wealth, generosity, savings)' onChange={handleRadioChange} />
                            <Form.Check type="radio" label="RED (strength, action, energy)" name="colorPalette" id="red" className='mb-3' value="RED (strength, action, energy)" onChange={handleRadioChange} />
                            <Form.Check type="radio" label="YELLOW (clarity, optimism, speed)" name="colorPalette" id="yellow" className='mb-3' value='YELLOW (clarity, optimism, speed)' onChange={handleRadioChange} />
                          </div>
                          <div className="col-lg-8">
                            <Form.Check type="radio" label="ORANGE (confidence, enthusiasm, youthful)" name="colorPalette" id="orange" value="ORANGE (confidence, enthusiasm, youthful)" className='mb-3' onChange={handleRadioChange} />
                            <Form.Check type="radio" label="PURPLE (creative, imaginative, wise)" name="colorPalette" id="purple" value="PURPLPURPLE (creative, imaginative, wise)" className='mb-3' onChange={handleRadioChange} />
                            <Form.Check type="radio" label="PINK (friendly, compassion, playful)" name="colorPalette" id="pink" value="PINK (friendly, compassion, playful)" className='mb-3' onChange={handleRadioChange} />
                            <Form.Check type="radio" label="BROWN (natural, earthy, durable, comfort)" name="colorPalette" id="brown" value="BROWN (natural, earthy, durable, comfort)" className='mb-3' onChange={handleRadioChange} />
                            <Form.Check type="radio" label="BEIGE (simplicity, warmth, understated elegance)" name="colorPalette" id="beige" value="BEIGE (simplicity, warmth, understated elegance)" className='mb-3' onChange={handleRadioChange} />
                            <Form.Check type="radio" label="SILVER (scientific, clean, modern)" name="colorPalette" id="silver" value="SILVER (scientific, clean, modern)" className='mb-3' onChange={handleRadioChange} />
                            <Form.Check type="radio" label="GOLD (luxury, elegant, prestige, opulence)" name="colorPalette" id="gold" value="GOLD (luxury, elegant, prestige, opulence)" className='mb-3' onChange={handleRadioChange} />
                            <Form.Check type="radio" label="No Preference" name="colorPalette" id="noPreference" value="No Preference" className='mb-3' onChange={handleRadioChange} />
                          </div>
                        </div>
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="mb-3">Mention any colors that you do not want to use</Form.Label>
                        <Form.Control as="textarea" rows={3}
                          name="Colors"
                          value={logoFormData.Colors}
                          onChange={handleLogoFormChange}
                          required
                        />
                      </Form.Group>
                      <button onClick={nextStep} className='next-button'>Next <FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>
                  )}
                  {/* Step 4 Questions */}
                  {currentStep === 5 && (
                    <div>
                      <Form.Group
                        className="mb-4"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label className="mb-3">Mention any desired font that you want us to use</Form.Label>
                        <Form.Control as="textarea" rows={3}
                          name="desiredFont"
                          value={logoFormData.desiredFont}
                          onChange={handleLogoFormChange}
                          required />
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="mb-3">What logo style(s) will appeal best to your target market? Tick all that apply.</Form.Label>
                        <div className="row">
                          <div className="col-lg-4">
                            <Form.Check type="radio" label="classic" name="logoStyles" id="classic" value="classic" className='mb-3' onChange={handleRadioChange} />
                            <Form.Check type="radio" label="modern" name="logoStyles" id="modern" value="modern" className='mb-3' onChange={handleRadioChange} />
                            <Form.Check type="radio" label="mature" name="logoStyles" id="mature" value="mature" className='mb-3' onChange={handleRadioChange} />
                            <Form.Check type="radio" label="youthful" name="logoStyles" id="youthful" value="youthful" className='mb-3' onChange={handleRadioChange} />
                            <Form.Check type="radio" label="feminine" name="logoStyles" id="feminine" value="feminine" className='mb-3' onChange={handleRadioChange} />
                            <Form.Check type="radio" label="masculine" name="logoStyles" id="masculine" value="masculine" className='mb-3' onChange={handleRadioChange} />
                            <Form.Check type="radio" label="playful" name="logoStyles" id="playful" value="playful" className='mb-3' onChange={handleRadioChange} />
                          </div>
                          <div className="col-lg-4">
                            <Form.Check type="radio" label="sophisticated" name="logoStyles" id="sophisticated" value="sophisticated" className='mb-3' onChange={handleRadioChange} />
                            <Form.Check type="radio" label="economical" name="logoStyles" id="economical" value="economical" className='mb-3' onChange={handleRadioChange} />
                            <Form.Check type="radio" label="luxurious" name="logoStyles" id="luxurious" value="luxurious" className='mb-3' onChange={handleRadioChange} />
                            <Form.Check type="radio" label="geometric" name="logoStyles" id="geometric" value="geometric" className='mb-3' onChange={handleRadioChange} />
                            <Form.Check type="radio" label="organic" name="logoStyles" id="organic" value="organic" className='mb-3' onChange={handleRadioChange} />
                            <Form.Check type="radio" label="abstract" name="logoStyles" id="abstract" value="abstract" className='mb-3' onChange={handleRadioChange} />
                            <Form.Check type="radio" label="literal" name="logoStyles" id="literal" value="literal" className='mb-3' onChange={handleRadioChange} />
                            <Form.Check type="radio" label="Other – please explain:" name="logoStyles" id="other" value="other" className='mb-3' onChange={handleRadioChange} />
                            {isOtherSelected && (
                              <Form.Control as="textarea" rows={3} placeholder="Please explain further" className='mt-3'
                                name="logoStyles"
                                // value={logoFormData.logoStyles}
                                onChange={handleLogoFormChange}
                                required />
                            )}
                          </div>
                        </div>

                      </Form.Group>
                      <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="mb-3">What message do you feel your logo should portray?</Form.Label>
                        <Form.Control as="textarea" rows={3}
                          name="logoMessage"
                          value={logoFormData.logoMessage}
                          onChange={handleLogoFormChange}
                          required />
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="mb-3">What is the meaning of your company name? How did you come up with it? Is
                          there a backstory to it that we can explore?</Form.Label>
                        <Form.Control as="textarea" rows={3}
                          name="companyNameMeaning"
                          value={logoFormData.companyNameMeaning}
                          onChange={handleLogoFormChange}
                          required />
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="mb-3">Please provide us with examples of logos you like and why.</Form.Label>
                        <Form.Control as="textarea" rows={3}
                          name="logoExamples"
                          value={logoFormData.logoExamples}
                          onChange={handleLogoFormChange}
                          required />
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="mb-3">What type of color combinations do you prefer?</Form.Label>
                        <div className="row">
                          <div className="col-lg-4">
                            <Form.Check type="radio" label="PLEASANT / LIGHT COLORS" name="colorCombinations" id="pleasantLight" value="PLEASANT / LIGHT COLORS" className='mb-3' onChange={handleRadioChange} />
                            <Form.Check type="radio" label="RICH / DARK COLORS" name="colorCombinations" id="richDark" value="RICH / DARK COLORS" className='mb-3' onChange={handleRadioChange} />
                            <Form.Check type="radio" label="BRIGHT / POP COLORS" name="colorCombinations" id="brightPop" value="BRIGHT / POP COLORS" className='mb-3' onChange={handleRadioChange} />
                          </div>
                          <div className="col-lg-8">
                            <Form.Check type="radio" label="METALLIC (like gold, silver, chrome, bronze, copper)" name="colorCombinations" id="metallic" value="METALLIC (like gold, silver, chrome, bronze, copper)" className='mb-3' onChange={handleRadioChange} />
                            <Form.Check type="radio" label="MONOCHROME (different shades of single color)" name="colorCombinations" id="monochrome" value="MONOCHROME (different shades of single color)" className='mb-3' onChange={handleRadioChange} />
                            <Form.Check type="radio" label="No preference" name="colorCombinations" id="noPreferenceColors" value="No preference" className='mb-3' onChange={handleRadioChange} />
                          </div>
                        </div>
                      </Form.Group>
                      <Button type="submit">Submit</Button>
                    </div>
                  )}
                </Form>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
        <AllServices />
        <ServiceContactForm />
      </div>
    </HelmetProvider>
  )
}
