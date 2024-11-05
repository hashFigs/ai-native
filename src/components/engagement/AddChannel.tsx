import React, { useState } from 'react';
import { View, StyleSheet} from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import TextCard from '../atoms/TextCard';
import GenericButton from '../atoms/GenericButton';
import { apiRequest } from '../../utils/apiClients';


interface AddchannelProps {
    addChannelSubmit: () => void;
    
  }

const AddChannel: React.FC<AddchannelProps> = ({addChannelSubmit}) => {
       const [handle, setHandle] = useState("") 
      
      
    return (
        <TextCard>
        <View style={styles.cardContainer}>
            <Text style={styles.header}>ADD YOUR CHANNEL @</Text>
            <Text>In order to create scripts in the same way you will do</Text>
            <Text>We first, need to gather samples of your own content, so we can anlyse and mymic.</Text>
            <TextInput
              label="@YoutubeChannel"
              value={handle}
              multiline={false}
              onChangeText={setHandle}
              style={ styles.inputText}
            />
            <GenericButton title={'+ Channel'} onPress={addChannelSubmit}/>

        </View>
        </TextCard>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    
    },
    cardContainer: {
        padding: 20,
        backgroundColor: '#f3f4f6',
        borderRadius: 15,
        marginVertical: 10,
        elevation: 5,
        shadowOpacity: 0,
        shadowRadius: 8,
      },
      inputText: {
        backgroundColor: '#fff', 
        borderRadius: 5,
        color: '#333',
        borderWidth: 1,
        borderColor: '#ccc', 
        flex: 1, 
        minHeight: 18, 
      },
    header: {
        fontSize: 18,
        
    }
});

export default AddChannel;
