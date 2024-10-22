// AudienceSection.tsx
import React from 'react';
import { Text, TextInput } from 'react-native-paper';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select'; 
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import { View } from 'react-native';

interface AudienceSectionProps {
  audienceDescription: string;
  setAudienceDescription: (description: string) => void;
  language: string;
  setLanguage: (lang: string) => void;
  selectedVoice: string;
  setSelectedVoice: (voice: string) => void;
}

const AudienceSection: React.FC<AudienceSectionProps> = ({
  audienceDescription,
  setAudienceDescription,
  language,
  setLanguage,
  selectedVoice,
  setSelectedVoice,
}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 0, backgroundColor: '#ccc', borderRadius: 15, width: '100%', maxWidth: '80%', alignSelf: 'center' }}>
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
                onChange={(e: SelectChangeEvent<string>) => setLanguage(e.target.value)}
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
                onChange={(e: SelectChangeEvent<string>) => setSelectedVoice(e.target.value)}
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
        </View>
      </View>
    </View>
  );
};

export default AudienceSection;
