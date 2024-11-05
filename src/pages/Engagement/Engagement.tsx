import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import TextCard from '../../components/atoms/TextCard';
import AudienceAvatarCreated from '../../components/engagement/AudienceAvatarCreated';
import PersonasCard from '../../components/engagement/PersonasCard';
import { getTokenFromLocalStorage } from '../../utils/localStorage';
import { apiRequest } from '../../utils/apiClients';
import AddChannel from '../../components/engagement/AddChannel';

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
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const authToken = getTokenFromLocalStorage();
        setLoading(true); 
        const response = await apiRequest(
          '/api/youtube/channels', 
          'GET', 
          { headers: { Authorization: `Bearer ${authToken}` } } );
        setData(response || []); 
        console.log("@@data", response)
      } catch (err) {
        console.log("error")
      } finally {
        setLoading(false); 
      }
    };

    fetchData(); 
  }, []); 
  
  const handleSubmit = async () =>{
    try {
        const response = await apiRequest('/api/youtube/fetch-channel-data', 'POST', {"handle": "CleetusM"});
        setData(response || []); 

    }catch{

    }
   }

  
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 600;
   
  return (
    <>
      {data.length === 0 ? (
        <AddChannel addChannelSubmit = {handleSubmit}/>
      ) : (
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
      )}
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
