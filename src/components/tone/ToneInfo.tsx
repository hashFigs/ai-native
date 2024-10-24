import React from 'react';
import CenterContent from '../atoms/CenterContent';
import { Text, StyleSheet, View } from 'react-native';
import TextCard from '../atoms/TextCard';

const ToneInfo: React.FC = () => {
    return (
        <>
            <View style={styles.container}>
                <TextCard>
                    {/* Override CenterContent's centering */}
                    <View style={styles.leftAlign}>
                        <View style={styles.bulletItem}>
                            <Text style={styles.microphone}>🎤</Text>
                            <Text style={styles.boldFont}>Your channel tone establishes the distinctive style, mood, and language of your content.</Text>
                        </View>

                        <View style={styles.bulletItem}>
                            <Text style={styles.checkmark}>✓</Text>
                            <Text style={styles.secundaryFont}>You can develop custom tones using examples from your own writing.</Text>
                        </View>

                        <View style={styles.bulletItem}>
                            <Text style={styles.checkmark}>✓</Text>
                            <Text style={styles.secundaryFont}>A tone has already been crafted based on the transcripts from your most-watched videos.</Text>
                        </View>

                        <View style={styles.bulletItem}>
                            <Text style={styles.checkmark}>✓</Text>
                            <Text style={styles.secundaryFont}>You also have the flexibility to create tones from your writing samples or transcripts from any YouTube channel.</Text>
                        </View>
                    </View>
                </TextCard>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        lineHeight: 25,
    },
    leftAlign: {
        alignItems: 'flex-start', // Align everything to the left
    },
    bulletItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    checkmark: {
        color: 'green',
        marginRight: 10,
    },
    microphone: {
        color: 'red',
        marginRight: 20,
    },
    boldFont: {
        fontSize: 20,
        color: '#990',
    },
    secundaryFont: {
        fontSize: 18,
        color: '#999',
    },
});

export default ToneInfo;
