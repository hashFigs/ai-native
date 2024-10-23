import React from 'react';
import { View } from 'react-native';

interface TextCardProps {
  children: React.ReactNode;
}

const CenterContent: React.FC<TextCardProps> = ({ children }) => {
  return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          alignSelf: 'center',
        }}
      >
        {children}
      </View>
  );
};

export default CenterContent;