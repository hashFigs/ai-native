import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ToneKeywordsProps {
    pacing: string;
    sentenceStructure: string;
    tone: string;
    wordChoice: string;
}

const ToneKeywords: React.FC<ToneKeywordsProps> = ({ pacing, sentenceStructure, tone, wordChoice }) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.description}>Pacing:</Text>
                <Text style={styles.value}>{pacing}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.description}>Sentence Structure:</Text>
                <Text style={styles.value}>{sentenceStructure}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.description}>Tone:</Text>
                <Text style={styles.value}>{tone}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.description}>Word Choice:</Text>
                <Text style={styles.value}>{wordChoice}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        backgroundColor: '#fff',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    description: {
        fontWeight: 'bold',
        color: '#333',
    },
    value: {
        color: '#555',
    },
});

export default ToneKeywords;
