import React from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

interface ToneCreationComponentProps {
    inputText: string;
    setInputText: React.Dispatch<React.SetStateAction<string>>;
    handleGenerateTone: () => void;
    generatedTone: string;
    error: string;
}

const ToneCreationComponent: React.FC<ToneCreationComponentProps> = ({
    inputText,
    setInputText,
    handleGenerateTone,
    generatedTone,
    error,
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.columns}>
                <View style={styles.leftColumn}>
                    <TextInput
                        style={styles.input}
                        placeholder="Write something..."
                        value={inputText}
                        onChangeText={setInputText}
                        multiline
                    />
                    <View style={styles.buttonContainer}>
                        <Button title="Generate Tone" onPress={handleGenerateTone} />
                    </View>
                </View>
                <View style={styles.rightColumn}>
                    <TextInput
                        style={styles.previewInput}
                        editable={false}
                        multiline
                        value={generatedTone}
                        placeholder="Generated tone will appear here..."
                    />
                </View>
            </View>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
        height: 300,
    },
    columns: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
    },
    leftColumn: {
        flex: 1,
        marginRight: 20,
        justifyContent: 'space-between',
    },
    rightColumn: {
        flex: 2,
        justifyContent: 'center',
        height: 300,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    buttonContainer: {
        marginTop: 20,
    },
    previewInput: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        flex: 1,
        textAlignVertical: 'top',
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
    },
});

export default ToneCreationComponent;
