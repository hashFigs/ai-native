import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, FlatList } from 'react-native';
import { useTheme } from 'styled-components/native';

interface Transcript {
    videoId: string;
    transcript: string;
}

interface Itone {
    transcripts: Transcript[];
}

const ToneEditComponent: React.FC<Itone> = ({ transcripts }) => {
    const theme = useTheme();

    // State with a type for editable transcripts
    const [editableTranscripts, setEditableTranscripts] = useState<{ [videoId: string]: string }>(
        transcripts.reduce((acc, item) => ({ ...acc, [item.videoId]: item.transcript }), {})
    );

    const handleTranscriptChange = (text: string, videoId: string) => {
        setEditableTranscripts((prev) => ({ ...prev, [videoId]: text }));
    };

    const renderItem = ({ item }: { item: Transcript }) => (
        <View style={styles.textInputContainer}>
            <Text style={[styles.videoLabel, { fontFamily: theme.fonts.regular, color: theme.colors.text, fontSize: theme.fontsize.title }]}>
                Transcript for video {item.videoId}:
            </Text>
            <TextInput
                style={[
                    styles.textInput,
                    {
                        fontFamily: theme.fonts.regular,
                        color: theme.colors.text,
                        fontSize: 16,
                        lineHeight: 16 * theme.lineHeight.extra,
                    },
                ]}
                multiline
                scrollEnabled
                value={editableTranscripts[item.videoId]}
                onChangeText={(text) => handleTranscriptChange(text, item.videoId)}
                numberOfLines={10}
                maxLength={1000}
            />
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={[styles.title, { fontFamily: theme.fonts.bold, color: theme.colors.text }]}>
                This is the Edit Component
            </Text>
            <FlatList
                data={transcripts}
                renderItem={renderItem}
                keyExtractor={(item) => item.videoId}
                initialNumToRender={5}
                maxToRenderPerBatch={5}
                windowSize={10}
            />
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
        marginBottom: 12,
    },
    textInputContainer: {
        marginBottom: 20,
    },
    videoLabel: {
        fontSize: 14,
        marginBottom: 4,
    },
    textInput: {
        padding: 8,
        height: 200,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        textAlignVertical: 'top',
    },
});

export default ToneEditComponent;
