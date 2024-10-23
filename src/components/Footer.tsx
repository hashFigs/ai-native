import {View, Text, StyleSheet } from 'react-native'

const Footer: React.FC = () => {

    return(
    <View style={styles.container}>
        <Text style={{ color: '#fff' }}>© 2024 Foloweo.AI - All rights reserved.</Text>
    </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333',
        padding: 10, 
        bottom: 0,
        width: '100%' 
    },
})

export default Footer
