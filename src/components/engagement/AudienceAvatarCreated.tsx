import React from 'react'
import CenterContent from '../atoms/CenterContent'
import { Text, StyleSheet, View } from 'react-native'
import GenericButton from '../atoms/GenericButton'
import { useNavigate } from 'react-router-dom'




const AudienceAvatarCreated: React.FC = () => {
    const navigate = useNavigate();

    const handlePress = () => {
        navigate("/script")
    };
    
    return(
        <>  <View style = {styles.container}>
            <CenterContent>

                <i className="material-icons" style={styles.icon}>check_circle</i>
               
                <Text style = {styles.boldFont}>Your audience profile is ready</Text>
                <Text style = {styles.secundaryFont}>Now, let's craft your first script!</Text>
                <GenericButton
                    title = "+ Create your firt script"
                    onPress ={handlePress} />

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
        color: '#990',
        marginBottom: 20
    },
    secundaryFont: {
        fontSize: 23,
        color: '#999',
        marginBottom: 20
    },
    
    icon: {
        fontSize: 30,
        color: 'green',
      },

});

export default AudienceAvatarCreated
