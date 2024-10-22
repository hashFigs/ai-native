import React, { useState } from 'react';
import { TextInput, Text } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select'; // Import SelectChangeEvent
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';

const CreateScript: React.FC = () => {
  const [language, setLanguage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategorySelect = (event: SelectChangeEvent<string>) => {
    const {
      target: { value },
    } = event;
    setSelectedCategory(value);
  };

  return (
    <View style={styles.container}>
      <h3>Script Creation</h3>
      
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Language:</Text>
        <TextInput
          label="Language"
          value={language}
          style={styles.input}
          onChangeText={setLanguage}
        />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Title:</Text>
        <TextInput
          label="Title"
          value={title}
          style={styles.input}
          onChangeText={setTitle}
        />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Category:</Text>
        <FormControl variant="outlined" fullWidth>
           <InputLabel>Category</InputLabel>
          <Select
            value={selectedCategory}
            onChange={handleCategorySelect}
            input={<OutlinedInput label="Category" />}
            displayEmpty
          >
            {/* <MenuItem value="">
              <em>Select a category</em>
            </MenuItem> */}
            <MenuItem value="Category 1">Category 1</MenuItem>
            <MenuItem value="Category 2">Category 2</MenuItem>
            <MenuItem value="Category 3">Category 3</MenuItem>
          </Select>
        </FormControl>
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Description:</Text>
        <TextInput
          label="Description"
          value={description}
          style={styles.input}
          onChangeText={setDescription}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  fieldContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    marginBottom: 10,
  },
});

export default CreateScript;
