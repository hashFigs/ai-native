import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Modal, Portal, TextInput, Title, Snackbar, IconButton } from 'react-native-paper';
import { MdClose, MdHome } from 'react-icons/md'; // Material Design Home icon
import { useNavigate } from 'react-router-dom';
import { apiRequest } from '../utils/apiClients';
import { storeTokenInLocalStorage } from '../utils/localStorage';
import { useAuth } from '../context/AuthContext';  // Import AuthContext

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
  const navigate = useNavigate();
  const { logIn } = useAuth();  // Access logIn function from AuthContext

  const handleChange = (name: keyof LoginParams, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    setError(null);
    setSuccess(false);

    if (!formData.email || !formData.password) {
      setError('Username and password are required');
      return;
    }

    try {
      const response = await apiRequest('/login', 'POST', formData);
      storeTokenInLocalStorage(response.token);
      logIn(response.token);  // Update login state
      setSuccess(true);
      onClose();  // Close modal
      navigate('/portal');  // Redirect to the /portal page
    } catch (error) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Portal>
        <Modal visible={visible} contentContainerStyle={styles.modalContainer}>
          <View style={styles.modalContent}>
           
          <MdClose size={20} onClick={onClose} />
            
            <Title>Log In</Title>
            {error && (
              <Snackbar visible={!!error} onDismiss={() => setError(null)}>
                {error}
              </Snackbar>
            )}
            <TextInput
              label="email"
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
      </Portal>

      <Snackbar visible={success} onDismiss={() => setSuccess(false)} duration={3000}>
        Login successful!
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center', 
    width: '30%',
  },
  modalContent: {
    width: '100%',
  },
  closeButton: {
    position: 'absolute',
    right: 10,   // Positioning in the top-right corner
    top: 10,
  },
  input: {
    marginBottom: 10,
  },
});

export default LogInModal;
