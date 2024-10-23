import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import TextCard from '../../components/atoms/TextCard';
import AudienceAvatarCreated from '../../components/engagement/AudienceAvatarCreated';
import PersonasCard from '../../components/engagement/PersonasCard';

const DemographicsData = [
  {
    sectionTitle: 'Demographics',
    items: [
      { title: 'Age Range', details: '18-35' },
      { title: 'Gender', details: 'Any' },
      { title: 'Income Range', details: '30k-60k USD' },
      { title: "Education", details: "Some college or Bachelor's Degree" },
      { title: 'Location', details: 'Urban/Suburban Area' },
      { title: 'Relationship Status', details: 'Single or in a relationship' },
    ],
  },
];

const PsychographicsData = [
  {
    sectionTitle: 'Psychographics',
    items: [
      { title: 'Motivators', details: 'Self-improvement, Achievement' },
      { title: 'Values', details: 'Growth, Positivity' },
      { title: 'Attitudes', details: 'Optimistic, Open to change' },
      { title: 'Lifestyle', details: 'Active, Socially engaged' },
      { title: 'Fears', details: 'Stagnation, Failure' },
      { title: 'Goals', details: 'Career advancement, Personal fulfillment' },
    ],
  },
];

const EngagementPage: React.FC = () => {
  const { width } = useWindowDimensions();

  // Adjust layout based on screen width
  const isSmallScreen = width < 600;

  return (
    <>
      <AudienceAvatarCreated />

      <TextCard>
        <Text> This is the Engagement page </Text>

        <View style={[styles.personasContainer, isSmallScreen && styles.personasContainerSmall]}>
          <View style={styles.personaWrapper}>
            <PersonasCard data={DemographicsData} />
          </View>
          <View style={styles.personaWrapper}>
            <PersonasCard data={PsychographicsData} />
          </View>
        </View>
      </TextCard>
    </>
  );
};

const styles = StyleSheet.create({
  personasContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    marginTop: 20,
    alignItems: 'stretch',
  },
  personasContainerSmall: {
    flexDirection: 'column', 
  },
  personaWrapper: {
    flex: 1,
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: '#f3f4f6',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    elevation: 0,
    shadowColor: 'transparent',
    marginBottom: 20, // Add margin for vertical stacking in small screens
  },
});

export default EngagementPage;
