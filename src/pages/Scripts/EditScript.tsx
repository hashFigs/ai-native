import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { useLocation, useNavigate } from 'react-router-dom';

const EditScript: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { response } = location.state || {};

  // Initialize the script paragraphs and corresponding comments
  const formattedScript = response?.script
    ? response.script.split('\n').filter((line: string) => line.trim() !== '')
    : ['No response data found'];

  const [comments, setComments] = useState<string[]>(Array(formattedScript.length).fill(""));

  // Handle comment changes for each paragraph
  const handleCommentChange = (text: string, index: number) => {
    const newComments = [...comments];
    newComments[index] = text;
    setComments(newComments);
  };

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineLarge" style={styles.title}>Script Proposal</Text>
      <View style={styles.columnsContainer}>
        {/* Script Data Section */}
        <View style={styles.column}>
          <Text style={styles.label}>Script Data:</Text>
          <View style={styles.textArea}>
            {formattedScript.map((line: string, index: number) => (
              <TextInput
                key={index}
                mode="outlined"
                value={line}
                multiline
                numberOfLines={4}
                style={styles.scriptTextArea}
                editable={false}
              />
            ))}
          </View>
        </View>

        {/* Comments Section */}
        <View style={styles.column}>
          <Text style={styles.label}>Comments:</Text>
          <View style={styles.textArea}>
            {formattedScript.map((_, index: number) => (
              <TextInput
                key={index}
                mode="outlined"
                placeholder="Add your comments here..."
                multiline
                numberOfLines={4}
                value={comments[index]}
                onChangeText={(text) => handleCommentChange(text, index)}
                style={styles.commentTextArea}
              />
            ))}
          </View>
        </View>
      </View>

      {/* Button to go back */}
      <Button mode="contained" onPress={handleGoBack} style={styles.button}>
        Create Another Script
      </Button>
    </View>
  );
};

// Basic styling for layout and elements
const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 15,
    width: '100%',
    maxWidth: '80%',
    alignSelf: 'center',
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
  },
  columnsContainer: {
    flexDirection: 'row' as const,
    justifyContent: 'space-between',
    width: '100%',
    padding: 20,
  },
  column: {
    flex: 1,
    padding: 15,
    marginRight: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  textArea: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    color: '#333',
    height: 'auto',
  },
  scriptTextArea: {
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
  },
  commentTextArea: {
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007bff',
  },
};

export default EditScript;
