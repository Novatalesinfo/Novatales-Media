import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import { useNavigation } from '../components/NavigationContext';

const ContactButtonWithForm = () => {
  const { handleNavigation } = useNavigation();
  const buttonStyle = {
    position: 'fixed',
    right: '20px', // Position the button on the right side
    top: '50%',
    transform: 'translateY(-50%) rotate(90deg)', // Rotate the button by 90 degrees
    transformOrigin: 'right center', // Ensure the rotation point is the right center
    zIndex: 1000,
    padding: '15px 30px',
    backgroundColor: 'rgb(254 196 54)',
    color: 'rgb(48 34 67)',
    border: 'none',
    cursor: 'pointer',
    whiteSpace: 'nowrap', // Prevent text wrapping
    fontWeight: '600',
  };

  return (
    <div>
   <Link to="/contactus"  onClick={() => handleNavigation('about')}>
   <button style={buttonStyle} >
      Contact Us
      </button>
   </Link>
    </div>
  );
};

export default ContactButtonWithForm;
