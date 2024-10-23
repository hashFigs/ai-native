import React, { useState } from 'react';
import './Layout.css'; 
import SignUpModal from './SignUpModal';
import LogInModal from './LogInModal';
import Menu from './Menu';
import SubMenu from './Submenu';
import Footer from './Footer';
import {  View, Image, Text, Dimensions } from 'react-native';  

import Logo from '../assets/logo.webp';


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSignUpModalVisible, setSignUpModalVisible] = useState(false);
  const [isLogInModalVisible, setLogInModalVisible] = useState(false);

  const closeSignUpModal = () => setSignUpModalVisible(false);
  const closeLogInModal = () => setLogInModalVisible(false);

  const openSignUpModal = () => setSignUpModalVisible(true);
  const openLogInModal = () => setLogInModalVisible(true);

  const screenHeight = Dimensions.get('window').height;

  return (
<>
<View style={{ flex: 1, minHeight: screenHeight, flexDirection: 'column' }}>
    {/* Menu and Header */}
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
        <Image source={Logo} style={{ width: 80, height: 80, resizeMode: 'contain' }} />
        <Text style={{ color: '#900', fontSize: 32, fontWeight: 'bold', padding: 10}}>Foloweo.AI</Text>
      </View>
      <Menu onShowLogin={openLogInModal} onShowSignUp={openSignUpModal} />
    </View>
    
    {/* Submenu */}
    <View style={{backgroundColor: '#fff' }}>
      <SubMenu  />
    </View>

    {/* Main Content */}
    <View style={{backgroundColor: '#f3f4f6'}}>
      {children}
    </View>

    <Footer />  
  
  </View>
  
  {/* Modal outside of the layout */}
  <SignUpModal visible={isSignUpModalVisible} onClose={closeSignUpModal} />
  <LogInModal visible={isLogInModalVisible} onClose={closeLogInModal} />
</>

  );
};



export default Layout;


