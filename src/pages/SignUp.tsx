import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SignUpModal from '../components/SignUpModal';

const SignUpPage: React.FC = () => {
  const location = useLocation();
  const [modalVisible, setModalVisible] = useState(false);

  // Automatically show the modal if on the /signup route
  useEffect(() => {
    console.log("@location", location.pathname)
    if (location.pathname === '/signUp') {
      setModalVisible(true);
    }
  }, [location.pathname]);

  const handleCloseModal = () => {
    setModalVisible(false); 
  };
   
  console.log("@ModalVisibility", modalVisible)
  return (
    <div>
      
      <SignUpModal visible={modalVisible} onClose={handleCloseModal} />
    </div>
  );
};

export default SignUpPage;
