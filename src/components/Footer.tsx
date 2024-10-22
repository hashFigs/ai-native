import {View, Text} from 'react-native'

const Footer: React.FC = () => {

    return(
    <View style={{ backgroundColor: '#333', padding: 10, textAlign: 'center', position: 'fixed', bottom: 0, width: '100%' }}>
        <Text style={{ color: '#fff' }}>© 2024 Foloweo.AI - All rights reserved.</Text>
    </View>
    );
}

export default Footer
