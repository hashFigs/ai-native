import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import TextCard from '../atoms/TextCard';
import GenericButton from '../atoms/GenericButton';

const ToneCreationTopBar: React.FC = () => {
    const handlePress = () => {
        console.log("Pressed");
    };

    return (
        <>
          
            <View style={styles.topBar}>
                <Text style={styles.title}>Channel Tone Preferences</Text>
                <View style={styles.buttonGroup}>
                    <GenericButton title="hola" onPress={handlePress} />
                    <GenericButton title="hola" onPress={handlePress} />
                </View>
            </View>

        </>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
        paddingHorizontal: 20, 
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '70%', 
    },
    title: {
        fontSize: 18,
        flex: 1,
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 10, 
    },
});

export default ToneCreationTopBar;
