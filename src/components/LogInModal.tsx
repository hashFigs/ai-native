import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Modal, Portal, TextInput, Title, Snackbar } from 'react-native-paper';
import { apiRequest } from '../utils/apiClients'; 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useAuth } from '../context/AuthContext';

interface LoginParams {
  email: string;
  password: string;
}

interface LogInModalProps {
  visible: boolean;
  onClose: () => void;
}

const LogInModal: React.FC<LogInModalProps> = ({ visible, onClose }) => {
  const [formData, setFormData] = useState<LoginParams>({ email: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const { logIn } = useAuth();

  const handleChange = (name: keyof LoginParams, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    setError(null);
    setSuccess(false);

    if (!formData.email || !formData.password) {
      setError('All fields are required');
      return;
    }

    try {
      const response = await apiRequest('/login', 'POST', formData); 
      logIn(response.token); 
      setSuccess(true);
      onClose(); 
    } catch (error) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <Portal>
      <Modal visible={visible} onDismiss={onClose} contentContainerStyle={styles.modalContainer}>
        <View style={styles.modalContent}>
          {/* Header with Title and Close Button */}
          <View style={styles.header}>
            <Title style={styles.title}>Log In</Title>
            <TouchableOpacity onPress={onClose}>
          
              <i className="material-icons" style={styles.icon}>close</i>

            </TouchableOpacity>
          </View>

          {error && (
            <Snackbar visible={!!error} onDismiss={() => setError(null)}>
              {error}
            </Snackbar>
          )}

          <TextInput
            label="Email"
            value={formData.email}
            onChangeText={(value) => handleChange('email', value)}
            style={styles.input}
            mode="outlined"
          />
          <TextInput
            label="Password"
            value={formData.password}
            onChangeText={(value) => handleChange('password', value)}
            style={styles.input}
            mode="outlined"
            secureTextEntry
          />
          <Button mode="contained" onPress={handleSubmit}>
            Submit
          </Button>
        </View>
      </Modal>

      <Snackbar visible={success} onDismiss={() => setSuccess(false)} duration={3000}>
        Login successful!
      </Snackbar>
    </Portal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%', 
    maxWidth: 400, 
    height: 'auto',
    position: 'absolute', 
    top: '35%', 
    left: '50%', 
    transform: [{ translateX: -0.5 * 400 }, { translateY: -0.5 * 300 }],
  },
  modalContent: {
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Center vertically
    marginBottom: 20,
  },
  title: {
    textAlign: 'center',
  },
  input: {
    marginBottom: 10,
  },
  icon: {
    fontSize: 30,
    color: '#666',
  },
});

export default LogInModal;
