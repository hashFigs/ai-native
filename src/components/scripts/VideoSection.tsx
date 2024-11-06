import React from 'react';
import { Text, TextInput } from 'react-native-paper';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import styled from 'styled-components/native';

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
    <Container>
      <InnerContainer>
        <Row>
          <Column>
            <StyledLabel>Video Topic:</StyledLabel>
            <StyledTextInput
              label="Enter Video Topic"
              value={videoTopic}
              multiline={true}
              onChangeText={setVideoTopic}
            />
          </Column>

          <Spacer />

          <Column>
            <InputSection>
              <StyledLabel>Format Type:</StyledLabel>
              <StyledFormControl variant="outlined" fullWidth>
                <Select
                  value={formatType}
                  onChange={(e: SelectChangeEvent<string>) => setFormatType(e.target.value)}
                  input={<OutlinedInput />}
                  displayEmpty
                >
                  <MenuItem value="Format 1">Comedy</MenuItem>
                  <MenuItem value="Format 2">Entrepreneurship</MenuItem>
                  <MenuItem value="Format 3">Vlog</MenuItem>
                </Select>
              </StyledFormControl>
            </InputSection>

            <InputSection>
              <StyledLabel>Target Length:</StyledLabel>
              <StyledFormControl variant="outlined" fullWidth>
                <Select
                  value={selectedCategory}
                  onChange={(e: SelectChangeEvent<string>) => setSelectedCategory(e.target.value)}
                  input={<OutlinedInput />}
                  displayEmpty
                >
                  <MenuItem value="Category 1">5 min, 800 words</MenuItem>
                  <MenuItem value="Category 2">8 min, 1000 words</MenuItem>
                  <MenuItem value="Category 3">10 min, 1200 words</MenuItem>
                </Select>
              </StyledFormControl>
            </InputSection>

            <InputSection>
              <StyledLabel>Video Title:</StyledLabel>
              <StyledTitleInput
                label="Video Title"
                value={title}
                onChangeText={setTitle}
              />
            </InputSection>
          </Column>
        </Row>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.View`
  margin-bottom: 40px;
  padding-bottom: 34px;
`;

const InnerContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  background-color: #eee;
  border-radius: 15px;
  width: 100%;
  max-width: 80%;
  align-self: center;
  padding: 20px;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const Column = styled.View`
  flex: 1;
`;

const Spacer = styled.View`
  width: 60px;
`;

const StyledLabel = styled(Text)`
  font-size: 16px;
  margin-bottom: 10px;
`;

const InputSection = styled.View`
  margin-bottom: 15px;
`;

const StyledFormControl = styled(FormControl)`
  background-color: #fff;
  border-radius: 5px;
`;

const StyledTextInput = styled(TextInput).attrs({
  
})`
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  color: #333;
  border-width: 1px;
  border-color: #ccc;
  flex: 1;
  min-height: 100px;
`;

const StyledTitleInput = styled(TextInput).attrs({
 
})`
  background-color: #fff;
  padding-top: 10px;
  border-radius: 5px;
  color: #333;
  border-width: 1px;
  border-color: #ccc;
  height: 26px;
`;

export default VideoSection;
