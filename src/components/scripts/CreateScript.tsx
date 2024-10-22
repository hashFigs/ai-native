import React, { useState } from 'react';
import { TextInput, Text,  Button as PaperButton  } from 'react-native-paper';
import { View, Button, Alert} from 'react-native';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select'; 
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';

const CreateScript: React.FC = () => {
  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("");
  const [formatType, setFormatType] = useState("");
  const [videoTopic, setVideoTopic] = useState("");
  const [audienceDescription, setAudienceDescription] = useState(""); 
  const [selectedVoice, setSelectedVoice] = useState("");



  const handleCategorySelect = (event: SelectChangeEvent<string>) => {
    const { target: { value } } = event;
    setSelectedCategory(value);
  };

  const handleFormatSelect = (event: SelectChangeEvent<string>) => {
    const { target: { value } } = event;
    setFormatType(value);
  };
  const handleLanguageSelect = (event: SelectChangeEvent<string>) => {
    const { target: { value } } = event;
    setLanguage(value);
  };
  const handleVoiceSelect = (event: SelectChangeEvent<string>) => {
    const { target: { value } } = event;
    setSelectedVoice(value);
  };

  const handleSubmit = () => {
    console.log( "Form Submitted", `Video Topic: ${videoTopic}\nTitle: ${title}`)
  };


  return (
    <>

    {/* Video Secction */}
    <View style = {{marginBottom: 40, paddingBottom:34}}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 30, backgroundColor: '#ccc', borderRadius: 15, width: '100%', maxWidth: '80%', alignSelf: 'center' }}>
      
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', padding: 20 }}>   
         {/* Left Column */}
          <View style={{ flex: 1, padding: 15, marginRight: 10 }}>
            <Text style={{ fontSize: 16, marginBottom: 5 }}>Video Topic:</Text>
            <TextInput
              label="Enter Video Topic"
              value={videoTopic}
              multiline={true} 
              numberOfLines={11} 
              onChangeText={setVideoTopic}
              style={{
                backgroundColor: '#fff', 
                padding: 10,
                borderRadius: 5, 
                color: '#333', 
              }}
            />
          </View>

         {/* Right Column */}
          <View style={{ flex: 1, padding: 15 }}>
            {/* Format */}
            <View style={{ marginBottom: 15 }}>
              <Text style={{ fontSize: 16, marginBottom: 5 }}>Format Type:</Text>
              <FormControl variant="outlined" fullWidth style={{ backgroundColor: '#fff', borderRadius: 5 }}>
                <Select
                  value={formatType}
                  onChange={handleFormatSelect}
                  input={<OutlinedInput style={{ padding: 10, backgroundColor: '#fff', borderRadius: 5 }} />}
                  displayEmpty
                  style={{
                    backgroundColor: '#fff',
                    color: '#333',
                  }}
                >
                  <MenuItem value="Format 1">Comedy</MenuItem>
                  <MenuItem value="Format 2">Entrepreneurship</MenuItem>
                  <MenuItem value="Format 3">Vlog</MenuItem>
                </Select>
              </FormControl>
            </View>

            {/* Target Length */}
            <View style={{ marginBottom: 15 }}>
              <Text style={{ fontSize: 16, marginBottom: 5 }}>Target Length:</Text>
              <FormControl variant="outlined" fullWidth style={{ backgroundColor: '#fff', borderRadius: 5 }}>
                <Select
                  value={selectedCategory}
                  onChange={handleCategorySelect}
                  input={<OutlinedInput style={{ padding: 10, backgroundColor: '#fff', borderRadius: 5 }} />}
                  displayEmpty
                  style={{
                    backgroundColor: '#fff',
                    color: '#333',
                  }}
                >
                  <MenuItem value="Category 1">5 min, 800 words</MenuItem>
                  <MenuItem value="Category 2">8 min, 1000 words</MenuItem>
                  <MenuItem value="Category 3">10 min, 1200 words</MenuItem>
                </Select>
              </FormControl>
            </View>

            {/* Video Title */}
            <View style={{ marginBottom: 15 }}>
              <Text style={{ fontSize: 16, marginBottom: 5 }}>Video Title:</Text>
              <TextInput
                label="Video Title"
                value={title}
                style={{
                  marginBottom: 10,
                  backgroundColor: '#fff',
                  padding: 10,
                  borderRadius: 5,  
                  color: '#333',  
                }}
                onChangeText={setTitle}
              />
            </View>
          </View>
        </View>


      </View>



     {/* Audience Secction */}

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 30, backgroundColor: '#ccc', borderRadius: 15, width: '100%', maxWidth: '80%', alignSelf: 'center' }}>
      
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', padding: 20 }}>   
       {/* Left Column */}
        <View style={{ flex: 1, padding: 15, marginRight: 10 }}>
          <Text style={{ fontSize: 16, marginBottom: 5 }}>Audience Description:</Text>
          <TextInput
            label="Enter Audience Description"
            value={audienceDescription}
            multiline={true} 
            numberOfLines={11} 
            onChangeText={setAudienceDescription}
            style={{
              backgroundColor: '#fff', 
              padding: 10,
              borderRadius: 5, 
              color: '#333', 
            }}
          />
        </View>

       {/* Right Column */}
        <View style={{ flex: 1, padding: 15 }}>
          {/* Language */}
          <View style={{ marginBottom: 15 }}>
            <Text style={{ fontSize: 16, marginBottom: 5 }}>Language:</Text>
            <FormControl variant="outlined" fullWidth style={{ backgroundColor: '#fff', borderRadius: 5 }}>
              <Select
                value={language}
                onChange={handleLanguageSelect}
                input={<OutlinedInput style={{ padding: 10, backgroundColor: '#fff', borderRadius: 5 }} />}
                displayEmpty
                style={{
                  backgroundColor: '#fff',
                  color: '#333',
                }}
              >
                <MenuItem value="Langauge 1">Catalan</MenuItem>
                <MenuItem value="Language 2">English</MenuItem>
                <MenuItem value="Language 3">Spanish</MenuItem>
              </Select>
            </FormControl>
          </View>

          {/* Voice */}
          <View style={{ marginBottom: 15 }}>
            <Text style={{ fontSize: 16, marginBottom: 5 }}>Voice:</Text>
            <FormControl variant="outlined" fullWidth style={{ backgroundColor: '#fff', borderRadius: 5 }}>
              <Select
                value={selectedVoice}
                onChange={handleVoiceSelect}
                input={<OutlinedInput style={{ padding: 10, backgroundColor: '#fff', borderRadius: 5 }} />}
                displayEmpty
                style={{
                  backgroundColor: '#fff',
                  color: '#333',
                }}
              >
                <MenuItem value="Voice 1">profile 1</MenuItem>
                <MenuItem value="Voice 2">profile 2</MenuItem>
                <MenuItem value="Voice 3">profile 3</MenuItem>
              </Select>
            </FormControl>
          </View>

          {/* script number */}
          <View style={{ marginBottom: 15 }}>
            <Text style={{ fontSize: 16, marginBottom: 5 }}>Script Number:</Text>
            <TextInput
              label="Id:: 1"
              value={title}
              style={{
                marginBottom: 10,
                backgroundColor: '#fff',
                padding: 10,
                borderRadius: 5,  
                color: '#333',  
              }}
              onChangeText={setTitle}
            />
          </View>
        </View>
      </View>
    </View>      
    </View>    
    
      {/* Submit Button */}
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
      <PaperButton mode="contained" onPress={handleSubmit}>
          Submit
      </PaperButton>
      </View>


    </>
  );
};

export default CreateScript;
