import React from 'react'
import TextCard from '../../components/atoms/TextCard'
import AudienceAvatarCreated from '../../components/engagement/AudienceAvatarCreated'
import PersonasCard from '../../components/engagement/PersonasCard'
import {Text} from 'react-native'




const DemographicsData =[ 
    {
    sectionTitle: 'Demographics',
    items: [
      { title: 'Age Range', details: '18-35' },
      { title: 'Gender', details: 'Any' },
      { title: 'Income Range', details: '30k-60k USD' },
      { title: 'Education', details: "Some college or Bachelor's Degree" },
      { title: 'Location', details: 'Urban/Suburban Area' },
      { title: 'Relationship Status', details: 'Single or in a relationship' },
    ],
  },
]



const EngagementPage: React.FC = () => {
       
    return(
    <>
        <AudienceAvatarCreated/>

        <TextCard>
            <Text> This is the Engagement page </Text>

            <PersonasCard data={DemographicsData}/>
        </TextCard>
        
    </>
    )
}

export default EngagementPage
