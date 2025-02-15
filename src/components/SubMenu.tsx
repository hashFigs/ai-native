import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';  
import { useAuth } from '../context/AuthContext';




const SubMenu: React.FC = () => {
  const { isLoggedIn  } = useAuth();
  const navigate = useNavigate();
  const location = useLocation(); // To detect the current page

  
  const menuItems = [
    { name: 'Scripts', path: '/script' },
    { name: 'Engagement', path: '/engagement' },
    { name: 'Tone', path: '/tone' },
    { name: 'Insights', path: '/insights' },
    { name: 'Prefereences', path: '/preferences' },

  ];

  return (
    <>
    {isLoggedIn && (
    <View style={ { flexDirection: 'column', alignItems: 'center', paddingVertical: 20, backgroundColor: '#ccc'}}>
      <View style={styles.menuItems}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => navigate(item.path)}>
            <Text style={[
              styles.menuItem, 
              location.pathname === item.path && styles.activeMenuItem
            ]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
    )}
    {!isLoggedIn && (
          <View style={ { flexDirection: 'column', alignItems: 'center', paddingVertical: 20, backgroundColor: '#666'}}>
            Submenu
          </View>
          )}
    
</>
  );
};

const styles = StyleSheet.create({
 
  menuItems: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  menuItem: {
    marginHorizontal: 20,
    fontSize: 18,
    color: '#fff',
    paddingBottom: 5,
  },
  activeMenuItem: {
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
  },
  logoutText: {
    marginTop: 20,
    fontSize: 16,
    color: '#fff',
  },
});

export default SubMenu;
