import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';  
import { useAuth } from '../context/AuthContext';  

const Menu: React.FC<{ 
  onShowLogin: () => void, 
  onShowSignUp: () => void 
}> = ({ onShowLogin, onShowSignUp }) => {
  const { isLoggedIn, logOut } = useAuth();

  return (
    <nav>
      {isLoggedIn ? (
        <View style={styles.buttonContainer}>
          <Button onPress={logOut} mode="contained" style={styles.button}>
            Log Out
          </Button>
        </View>
      ) : (
        <View style={styles.buttonContainer}>
          <Button mode="contained" onPress={onShowLogin} style={styles.buttonAuth}>
            Log In
          </Button>
          <Button mode="contained" onPress={onShowSignUp} style={styles.buttonAuth}>
            Sign Up
          </Button>
      </View>
      )}
    </nav>
  );
};

const styles = StyleSheet.create({
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',   
      justifyContent: 'flex-end',
      paddingRight: 36,
      paddingTop:16 
    },
    buttonAuth: {
      marginLeft: 10,            
      marginBottom: 10,  
    },
    button: {
      marginBottom: 10,  
    },
    dividerContainer: {
     /*  flexDirection: 'row',   
      alignItems: 'center',   
      marginVertical: 10,     
      width: '100%',   */        
    },
    line: {
     /*  flex: 1,                
      height: 1,              
      backgroundColor: '#ccc',  */ 
    },
    dividerText: {
      /* marginHorizontal: 10,   
      color: '#666',          
      fontWeight: 'bold',      */
    },
  });

export default Menu;
