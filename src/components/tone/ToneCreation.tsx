import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import TextCard from '../atoms/TextCard';
import ToneCreationTopBar from './ToneCreationTopBar';
import ToneCreationComponent from './ToneCreationComponent';
import ToneEditComponent from './ToneEditComponent';
import ToneKeywords from './ToneKeywords';
import { apiRequest } from '../../utils/apiClients';
import { getTokenFromLocalStorage } from '../../utils/localStorage';

const ToneCreation: React.FC = () => {
    const [activeTab, setActiveTab] = useState<number>(1);
    const [pacing, setPacing] = useState<string>("");
    const [sentenceStructure, setSentenceStructure] = useState<string>("");
    const [tone, setTone] = useState<string>("");
    const [wordChoice, setWordChoice] = useState<string>("");
    const [inputText, setInputText] = useState<string>('');
    const [generatedTone, setGeneratedTone] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [isSettingsVisible, setIsSettingsVisible]=useState<boolean>(false)

    const handleGenerateTone = async () => {
        if (!inputText) {
            setError('All fields are required');
            return;
        }
        const authToken= getTokenFromLocalStorage();
        
        if(!authToken){
            setError("you need to be authenticated");
            return;
        }

        try {
            const authToken = getTokenFromLocalStorage();
            const response = await apiRequest(
                '/tone/create', 
                'POST', 
                { inputText },
                { headers: { Authorization: `Bearer ${authToken}` } } );
            setGeneratedTone(response.tonePreview);
            setPacing(response.tone.pacing);
            setTone(response.tone.tone);
            setWordChoice(response.tone.wordChoice);
            setSentenceStructure(response.tone.sentenceStructure);
            setIsSettingsVisible(true);
            setError('');
        } catch (error) {
            setError('Failed to generate tone. Please try again.');
        }
    };

    return (
        <View style={styles.container}>
            <TextCard>
                <ToneCreationTopBar />

                {/* Submenu / Tabs */}
                <View style={styles.tabs}>
                    <TouchableOpacity
                        style={[styles.tabButton, activeTab === 1 && styles.activeTab]}
                        onPress={() => setActiveTab(1)}
                    >
                        <Text style={styles.tabText}>Create a Tone</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.tabButton, activeTab === 2 && styles.activeTab]}
                        onPress={() => setActiveTab(2)}
                    >
                        <Text style={styles.tabText}>Edit Tone</Text>
                    </TouchableOpacity>
                </View>

                {/* Render content based on the active tab */}
                <View style={styles.content}>
                    {activeTab === 1 && (
                        <ToneCreationComponent
                            inputText={inputText}
                            setInputText={setInputText}
                            handleGenerateTone={handleGenerateTone}
                            generatedTone={generatedTone}
                            error={error}
                        />
                    )}
                    {activeTab === 2 && <ToneEditComponent transcripts={["asdasdasdasddas"]}/>}
                </View>
                {isSettingsVisible &&    
                <ToneKeywords
                    pacing={pacing}
                    sentenceStructure={sentenceStructure}
                    tone={tone}
                    wordChoice={wordChoice}
                />
            }
            </TextCard>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
        width: '100%',
    },
    tabs: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
    },
    tabButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginHorizontal: 10,
        borderBottomWidth: 2,
        borderBottomColor: 'transparent',
    },
    activeTab: {
        borderBottomColor: '#000',
    },
    tabText: {
        fontSize: 16,
    },
    content: {
        marginTop: 20,
        width: '100%',
    },
});

export default ToneCreation;
