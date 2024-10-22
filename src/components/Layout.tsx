import React, { useState } from 'react';
import './Layout.css'; 
import SignUpModal from './SignUpModal';
import LogInModal from './LogInModal';
import Menu from './Menu';
import Logo from '../assets/logo.webp'; 
import { StyleSheet, View, Image } from 'react-native';  


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSignUpModalVisible, setSignUpModalVisible] = useState(false);
  const [isLogInModalVisible, setLogInModalVisible] = useState(false);

  const closeSignUpModal = () => setSignUpModalVisible(false);
  const closeLogInModal = () => setLogInModalVisible(false);

  const openSignUpModal = () => setSignUpModalVisible(true);
  const openLogInModal = () => setLogInModalVisible(true);

  return (
    <>
    <View>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
        <Image source={Logo} style={{ width: 80, height: 80, resizeMode: 'contain' }} />
        <h3>Foloweo.AI</h3>
      </View>
      <Menu onShowLogin={openLogInModal} onShowSignUp={openSignUpModal} />
    </View>
    
    <View style={styles.submenu}>
      <h1>Submenu</h1>

    </View>


    <View>
    
      {children}
    
    
    </View>
      <SignUpModal visible={isSignUpModalVisible} onClose={closeSignUpModal} />
      <LogInModal visible={isLogInModalVisible} onClose={closeLogInModal} />
    </View>
    

  </>
  );
};


const styles = StyleSheet.create({
  submenu: {
    color: '#fff',
    backgroundColor: '#666', 
    
  }
  
});


export default Layout;


