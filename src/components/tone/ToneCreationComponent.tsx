import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';
import { apiRequest } from '../../utils/apiClients';

const ToneCreationComponent: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [generatedTone, setGeneratedTone] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');



  const handleGenerateTone = async () => {
    // Placeholder for tone generation logic
    console.log("genereating tone")
    setGeneratedTone(`Preview of the tone based on: ${inputText}`);


    if (!inputText) {
      setError('All fields are required');
      return;
    }
    console.log("@@inputText", inputText)
    try {
      const response = await apiRequest('/tone/create', 'POST', {inputText}); 
      


    } catch (error) {
      setError('Login failed. Please try again.');
    }

  };



  return (
    <View style={styles.container}>
      {/* Two-column layout */}
      <View style={styles.columns}>
        {/* Left Column - Input */}
        <View style={styles.leftColumn}>
          <TextInput
            style={styles.input}
            placeholder="Write something..."
            value={inputText}
            onChangeText={setInputText}
            multiline
          />
          {/* Button at the bottom of the left column */}
          <View style={styles.buttonContainer}>
            <Button title="Generate Tone" onPress={handleGenerateTone} />
          </View>
        </View>

        {/* Right Column - Preview */}
        <View style={styles.rightColumn}>
          <TextInput
            style={styles.previewInput}
            editable={false} // Make it non-editable, to resemble a preview
            multiline
            value={generatedTone}
            placeholder="Generated tone will appear here..."
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5', 
    height: 300
  },
  columns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1, 
  },
  leftColumn: {
    flex: 1, 
    marginRight: 20,
    justifyContent: 'space-between', 
  },
  rightColumn: {
    flex: 2, // 2/3 of the available space
    justifyContent: 'center',
    height: 300,
  },
  input: {
    flex: 1, 
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff', 
  },
  buttonContainer: {
    marginTop: 20, 
  },
  previewInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff', 
    flex: 1, 
    textAlignVertical: 'top',
  },
});

export default ToneCreationComponent;
