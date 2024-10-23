import React from 'react';
import { View } from 'react-native';

interface TextCardProps {
  children: React.ReactNode;
}

const TextCard: React.FC<TextCardProps> = ({ children }) => {
  return (
    <View style={{ marginBottom: 40, paddingBottom: 34 }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 60,
          backgroundColor: '#fff', 
          borderRadius: 15,
          width: '100%',
          maxWidth: '80%',
          alignSelf: 'center',
          padding: 20,
        }}
      >
        {children}
      </View>
    </View>
  );
};

export default TextCard;
