import React, { useState } from 'react';
import './Layout.css'; 
import SignUpModal from './SignUpModal';
import LogInModal from './LogInModal';
import Menu from './Menu';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSignUpModalVisible, setSignUpModalVisible] = useState(false);
  const [isLogInModalVisible, setLogInModalVisible] = useState(false);

  const closeSignUpModal = () => setSignUpModalVisible(false);
  const closeLogInModal = () => setLogInModalVisible(false);

  const openSignUpModal = () => setSignUpModalVisible(true);
  const openLogInModal = () => setLogInModalVisible(true);

  return (
    <div className="layout">
      <div className="sidebar">
        <Menu onShowLogin={openLogInModal} onShowSignUp={openSignUpModal} />
      </div>
      <div className="content">
        {children}
      </div>
      {/* Modals for Login and SignUp */}
      <SignUpModal visible={isSignUpModalVisible} onClose={closeSignUpModal} />
      <LogInModal visible={isLogInModalVisible} onClose={closeLogInModal} />
    </div>
  );
};

export default Layout;
