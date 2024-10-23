import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const ChannelSettingsPage: React.FC = () => {
  const [channelName, setChannelName] = useState('');

  return (
    <>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.heading}>Add your YouTube Channel</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Channel Name:</Text>
            <TextInput
              label="@"
              value={channelName}
              onChangeText={setChannelName}
              style={styles.input}
              mode="outlined"
            />
          </View>

          <Button mode="contained" onPress={() => console.log('Channel Name Saved!')}>
            Save Channel Name
          </Button>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 90,
    backgroundColor: '#f5f5f5',
  },
  content: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    width: '100%',
    maxWidth: '50%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
  },
});

export default ChannelSettingsPage;
