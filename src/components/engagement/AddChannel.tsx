import React, { useState } from 'react';
import styled from 'styled-components/native';
import { TextInput as PaperTextInput, Text } from 'react-native-paper';
import TextCard from '../atoms/TextCard';
import GenericButton from '../atoms/GenericButton';

interface AddChannelProps {
  addChannelSubmit: () => void;
}

const AddChannel: React.FC<AddChannelProps> = ({ addChannelSubmit }) => {
  const [handle, setHandle] = useState("");

  return (
    <TextCard>
      <CardContainer>
        <HeaderText>ADD YOUR CHANNEL @</HeaderText>
        <DescriptionText>
          In order to create scripts in the same way you will do
        </DescriptionText>
        <DescriptionText>
          We first, need to gather samples of your own content, so we can analyze and mimic.
        </DescriptionText>
        <StyledTextInput
          label="@YoutubeChannel"
          value={handle}
          onChangeText={setHandle}
          multiline={false}
        />
        <GenericButton title={'+ Channel'} onPress={addChannelSubmit} />
      </CardContainer>
    </TextCard>
  );
};


const CardContainer = styled.View`
  padding: 20px;
  background-color: #f3f4f6;
  border-radius: 15px;
  margin-vertical: 10px;
  elevation: 5;
  shadow-opacity: 0;
  shadow-radius: 8px;
`;

const HeaderText = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const DescriptionText = styled(Text)`
  margin-bottom: 8px;
  color: #333;
`;

const StyledTextInput = styled(PaperTextInput)`
  background-color: #fff;
  border-radius: 5px;
  color: #333;
  border-width: 1px;
  border-color: #ccc;
  min-height: 18px;
  margin-bottom: 15px;
  margin-top: 8px;

`;

export default AddChannel;
