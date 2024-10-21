import React, { useState } from 'react';
import { TextInput, Text, Menu} from 'react-native-paper';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MdArrowDropDown } from 'react-icons/md';  // Material Design dropdown icon


const CreateScript: React.FC = () => {
  const [language, setLanguage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Select a category");

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    closeMenu(); 
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
        <TouchableOpacity onPress={openMenu}>
        <TextInput
          label="Category"
          value={selectedCategory}
          style={styles.input}
          editable={false} // Prevent manual editing
          right={<MdArrowDropDown size={24} />
        }
        />
        </TouchableOpacity>
        <Menu
          visible={menuVisible}
          onDismiss={closeMenu}
          anchor={"s"}
        >
          <Menu.Item onPress={() => handleCategorySelect("Category 1")} title="Category 1" />
          <Menu.Item onPress={() => handleCategorySelect("Category 2")} title="Category 2" />
          <Menu.Item onPress={() => handleCategorySelect("Category 3")} title="Category 3" />
        </Menu>
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
