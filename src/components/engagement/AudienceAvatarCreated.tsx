import React from 'react'
import CenterContent from '../atoms/CenterContent'
import { Text, StyleSheet, View } from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons'; // Choose your icon set
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'



const AudienceAvatarCreated: React.FC = () => {
   
    
    return(
        <>  <View style = {styles.container}>
            <CenterContent>
                <IonIcon name="md-checkmark-circle" size={30} color="green" />    
                <MaterialIcon name="check-circle" size={30} color="green" />
                <Text style = {styles.boldFont}>Your audience profile is ready</Text>
                <Text>Now, let's craft your first script!</Text>

            </CenterContent>
            </View>    
        
        </>
            
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 35,
        lineHeight: 25
    },
    boldFont:{
        fontSize: 23,
        color: '#0f0',
        marginBottom: 20
    }

});

export default AudienceAvatarCreated
