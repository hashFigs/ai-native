import React from 'react';
import { Text, TextInput } from 'react-native-paper';
import { View } from 'react-native';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';

interface VideoSectionProps {
  videoTopic: string;
  setVideoTopic: (topic: string) => void;
  formatType: string;
  setFormatType: (format: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  title: string;
  setTitle: (title: string) => void;
}

const VideoSection: React.FC<VideoSectionProps> = ({
  videoTopic,
  setVideoTopic,
  formatType,
  setFormatType,
  selectedCategory,
  setSelectedCategory,
  title,
  setTitle,
}) => {
  return (
    <View style={{ marginBottom: 40, paddingBottom: 34 }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 60,
          backgroundColor: '#fff', // Set background color to white
          borderRadius: 15,
          width: '100%',
          maxWidth: '80%',
          alignSelf: 'center',
          padding: 20,
        }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
          {/* Left Column */}
          <View style={{ flex: 1, paddingRight: 10 }}>
            <Text style={{ fontSize: 16, marginBottom: 10 }}>Video Topic:</Text>
            <TextInput
              label="Enter Video Topic"
              value={videoTopic}
              multiline={true}
              onChangeText={setVideoTopic}
              style={{
                backgroundColor: '#fff', 
                padding: 10,
                borderRadius: 5,
                color: '#333',
                borderWidth: 1,
                borderColor: '#ccc', 
                flex: 1, 
                minHeight: 100, 
              }}
            />
          </View>

           {/* Spacer View */}
  <View style={{ width: 60 }} /> {/* Adjust width here for spacing */}

          {/* Right Column */}
          <View style={{ flex: 1 }}>
            {/* Format */}
            <View style={{ marginBottom: 15 }}>
              <Text style={{ fontSize: 16, marginBottom: 10 }}>Format Type:</Text>
              <FormControl variant="outlined" fullWidth style={{ backgroundColor: '#fff', borderRadius: 5 }}>
                <Select
                  value={formatType}
                  onChange={(e: SelectChangeEvent<string>) => setFormatType(e.target.value)}
                  input={<OutlinedInput style={{ padding: 10, backgroundColor: '#fff', borderRadius: 5, borderColor: '#ccc' }} />}
                  displayEmpty
                  style={{
                    backgroundColor: '#fff',
                    color: '#333',
                    borderRadius: 5,
                    height: 56, // Set a consistent height
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
              <Text style={{ fontSize: 16, marginBottom: 10 }}>Target Length:</Text>
              <FormControl variant="outlined" fullWidth style={{ backgroundColor: '#fff', borderRadius: 5 }}>
                <Select
                  value={selectedCategory}
                  onChange={(e: SelectChangeEvent<string>) => setSelectedCategory(e.target.value)}
                  input={<OutlinedInput style={{ padding: 10, backgroundColor: '#fff', borderRadius: 5, borderColor: '#ccc' }} />}
                  displayEmpty
                  style={{
                    backgroundColor: '#fff',
                    color: '#333',
                    borderRadius: 5,
                    height: 56, // Set a consistent height
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
              <Text style={{ fontSize: 20, marginBottom: 10 }}>Video Title:</Text>
              <TextInput
                label="Video Title"
                value={title}
                style={{
                  backgroundColor: '#fff', // Background color for TextInput
                  paddingTop: 10,
                  borderRadius: 5,
                  color: '#333',
                  borderWidth: 1,
                  borderColor: '#ccc', // Add a border color
                  height: 26, // Set a consistent height
                }}
                onChangeText={setTitle}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default VideoSection;
