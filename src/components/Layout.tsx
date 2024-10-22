import React, { useState } from 'react';
import './Layout.css'; 
import SignUpModal from './SignUpModal';
import LogInModal from './LogInModal';
import Menu from './Menu';
import SubMenu from './Submenu';
import Logo from '../assets/logo.webp'; 
import Footer from './Footer';
import {  View, Image, Text } from 'react-native';  


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSignUpModalVisible, setSignUpModalVisible] = useState(false);
  const [isLogInModalVisible, setLogInModalVisible] = useState(false);

  const closeSignUpModal = () => setSignUpModalVisible(false);
  const closeLogInModal = () => setLogInModalVisible(false);

  const openSignUpModal = () => setSignUpModalVisible(true);
  const openLogInModal = () => setLogInModalVisible(true);

  return (
<>
<View style={{ flex: 1, minHeight: '100vh', flexDirection: 'column' }}>
    {/* Menu and Header */}
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
        <Image source={Logo} style={{ width: 80, height: 80, resizeMode: 'contain' }} />
        <Text style={{ color: '#900', fontSize: 32, fontWeight: 'bold', padding: 10}}>Foloweo.AI</Text>
      </View>
      <Menu onShowLogin={openLogInModal} onShowSignUp={openSignUpModal} />
    </View>
    
    {/* Submenu */}
    <View style={{ color: '#fff', backgroundColor: '#666' }}>
      <SubMenu onShowLogin={openLogInModal} onShowSignUp={openSignUpModal} />
    </View>

    {/* Main Content */}
    <View>{children}</View>

    <Footer />  
  
  </View>
  
  {/* Modal outside of the layout */}
  <SignUpModal visible={isSignUpModalVisible} onClose={closeSignUpModal} />
  <LogInModal visible={isLogInModalVisible} onClose={closeLogInModal} />
</>

  );
};



export default Layout;


