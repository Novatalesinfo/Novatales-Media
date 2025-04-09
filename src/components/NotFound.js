import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the index page after 3 seconds
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);

    // Clean up the timer
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Redirecting to the home page...</p>
    </div>
  );
}
