import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Modal, Portal, TextInput, Title, Snackbar } from 'react-native-paper';
import { apiRequest } from '../utils/apiClients'; // Ensure this is set up to handle your API requests
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useAuth } from '../context/AuthContext'; // Import AuthContext

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
      const response = await apiRequest('/login', 'POST', formData); // Make sure the API endpoint is correct
      logIn(response.token); 
      setSuccess(true);
      onClose(); // Close modal after successful login
    } catch (error) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <Portal>
      <Modal visible={visible} onDismiss={onClose} contentContainerStyle={styles.modalContainer}>
        <View style={styles.modalContent}>
          {/* Close Button */}
          <MaterialCommunityIcons name="close" onPress={onClose} size={20} style={styles.closeButton} />

          <Title style={styles.title}>Log In</Title>

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
    width: '80%', // Make the modal width a percentage of the screen
    maxWidth: 400, // Optional: set a max width for larger screens
    height: 'auto',
    position: 'absolute', // Changed from relative to absolute
    top: '35%', // Center vertically
    left: '50%', // Center horizontally
    transform: [{ translateX: -0.5 * 400 }, { translateY: -0.5 * 300 }],
  },
  modalContent: {
    width: '100%',
  },
  closeButton: {
    position: 'absolute',
    right: 10, // Positioning in the top-right corner
    top: 10,
  },
  title: {
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    marginBottom: 10,
  },
});

export default LogInModal;
