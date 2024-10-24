import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import TextCard from '../atoms/TextCard';
import ToneCreationTopBar from './ToneCreationTopBar';
import ToneCreationComponent from './ToneCreationComponent';
import ToneEditComponent from './ToneEditComponent';

const Tab1Component: React.FC = () => (
    <ToneCreationComponent />
);

const Tab2Component: React.FC = () => (
    <ToneEditComponent />
);



const ToneCreation: React.FC = () => {
    const [activeTab, setActiveTab] = useState<number>(1); // Tracks active tab

    return (
        <>
            <View style={styles.container}>
                <TextCard >
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
                        {activeTab === 1 && <Tab1Component />}
                        {activeTab === 2 && <Tab2Component />}
                    </View>
                </TextCard>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
        width: '100%', 
    },
    fullWidthCard: {
        width: '100%', 
        paddingHorizontal: 0, 
        flex: 1,
    },
    tabs: {
        flexDirection: 'row',
        justifyContent: 'center', // Center the tabs
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
        paddingHorizontal: 0, // Remove content padding to allow more width
        width: '100%',
    },
});

export default ToneCreation;
