import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import notfound from "../images/404notfound.jpg"
export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the index page after 3 seconds
    const timer = setTimeout(() => {
      navigate('/');
    }, 2000);

    // Clean up the timer
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className='d-flex justify-content-center flex-column align-items-center' style={{
      height: "50%", paddingTop: "100px"
    }}>
      <div className='' >
        <img src={notfound} alt='notfound' style={{
          width: "50vw"
          , height: "35vw"
        }} />
      </div>
      <p>Redirecting to the home page...</p>
    </div>
  );
}
