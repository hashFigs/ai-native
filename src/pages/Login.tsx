import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LogInModal from '../components/LogInModal';

const Login: React.FC = () => {
  const location = useLocation();
  const [modalVisible, setModalVisible] = useState(true);

  // Automatically show the modal if on the /signup route
  useEffect(() => {
    console.log("@location", location.pathname)
    if (location.pathname === '/login') {
      setModalVisible(true);
    }
  }, [location.pathname]);

  const handleCloseModal = () => {
    setModalVisible(false); 
  };
   
  console.log("@ModalVisibility", modalVisible)
  return (
    <div>
      
      <LogInModal visible={modalVisible} onClose={handleCloseModal} />
    </div>
  );
};

export default Login;