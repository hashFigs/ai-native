// SubmitButton.tsx
import React from 'react';
import { View } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';

interface SubmitButtonProps {
  onSubmit: () => void;
  text: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onSubmit, text  }) => {
  return (
    <View style={{ alignItems: 'center', marginTop: 20, marginBottom: 90 }}>
      <PaperButton mode="contained" onPress={onSubmit}>
        {text}
      </PaperButton>
    </View>
  );
};

export default SubmitButton;
