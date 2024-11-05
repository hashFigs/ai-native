import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

interface Transcript {
    videoId: string;
    transcript: string;
}

interface Itone {
    transcripts: Transcript[];
}

const ToneEditComponent: React.FC<Itone> = ({ transcripts }) => {
    const [editableTranscripts, setEditableTranscripts] = useState(
        transcripts.map((item) => item.transcript)
    );

    const handleTranscriptChange = (text: string, index: number) => {
        const updatedTranscripts = [...editableTranscripts];
        updatedTranscripts[index] = text;
        setEditableTranscripts(updatedTranscripts);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>This is the Edit Component</Text>
            {transcripts.map((item, index) => (
                <View key={item.videoId} style={styles.textInputContainer}>
                    <Text style={styles.videoLabel}>Transcript for video {item.videoId}:</Text>
                    <TextInput
                        style={styles.textInput}
                        multiline
                        scrollEnabled // Enable scrolling within TextInput
                        value={editableTranscripts[index]}
                        onChangeText={(text) => handleTranscriptChange(text, index)}
                        numberOfLines={10} // Display up to 10 lines initially
                        maxLength={1000} // Optional: limit total characters
                    />
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    textInputContainer: {
        marginBottom: 20,
    },
    videoLabel: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 4,
    },
    textInput: {
        fontSize: 14,
        padding: 8,
        height: 200, 
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        textAlignVertical: 'top', 
    },
});

export default ToneEditComponent;
