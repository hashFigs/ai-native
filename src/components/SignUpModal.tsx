import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Modal, Portal, TextInput, Title, Snackbar  } from 'react-native-paper';
import { apiRequest } from '../utils/apiClients';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


interface SignUpParams {
  username: string;
  email: string;
  password: string;
}

interface SignUpModalProps {
  visible: boolean;
  onClose: () => void;
}

const SignUpModal: React.FC<SignUpModalProps> = ({ visible, onClose }) => {
  const [formData, setFormData] = useState<SignUpParams>({ username: '', email: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (name: keyof SignUpParams, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    setError(null);
    setSuccess(false);

    if (!formData.username || !formData.password || !formData.email) {
      setError('All fields are required');
      return;
    }

    try {
      await apiRequest('/register', 'POST', formData);
      setSuccess(true);
      onClose();  // Close modal after successful submission
    } catch (error) {
      setError('Sign-up failed. Please try again.');
    }
  };

  return (
    <Portal>
      <Modal visible={visible} onDismiss={onClose} contentContainerStyle={styles.modalContainer}>
        <View style={styles.modalContent}>
          {/* Close Button */}

          {/* <IconButton
            icon="cancel"
            size={20}
            style={styles.closeButton}
            onPress={onClose}  // Close the modal when pressed
          /> */}
          <MaterialCommunityIcons name="close" onPress={onClose} size={20} />


          <Title style={styles.title}>Sign Up</Title>

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
            label="Username"
            value={formData.username}
            onChangeText={(value) => handleChange('username', value)}
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
        Sign-up successful!
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
    alignSelf: 'center',
    width: '30%',
    position: 'relative',  // For positioning the close button
  },
  modalContent: {
    width: '100%',
  },
  closeButton: {
    position: 'absolute',
    right: 10,   // Positioning in the top-right corner
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

export default SignUpModal;
