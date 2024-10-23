import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

interface GenericButtonProps {
  title: string;
  onPress: () => void;
  color?: string;
}

const GenericButton: React.FC<GenericButtonProps> = ({ title, onPress, color }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttonContainer, { backgroundColor: color || '#6750A4' }]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 15,
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
    borderRadius: 20, // Now this will work with TouchableOpacity
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GenericButton;
