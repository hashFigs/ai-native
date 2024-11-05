import React, { useEffect, useState } from 'react'
import ToneInfo from '../../components/tone/ToneInfo'
import ToneCreation from '../../components/tone/ToneCreation'
import { getTokenFromLocalStorage } from '../../utils/localStorage';
import { apiRequest } from '../../utils/apiClients';

const TonePage: React.FC = () => {
       const [loading, setLoading] = useState(true);
       const [data, setData] = useState<any[]>([]);
       const [transcripts, setTranscripts] = useState([])


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

      
    return(
        <>
        <ToneInfo/>
        <ToneCreation/>
        </>
    )
}

export default TonePage
