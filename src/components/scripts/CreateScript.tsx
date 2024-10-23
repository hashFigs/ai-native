import React, { useState } from 'react';
import VideoSection from './VideoSection';
import AudienceSection from './AudienceSection';
import SubmitButton from '../SubmitButton';
import { apiRequest } from '../../utils/apiClients'; 
import { useNavigate } from 'react-router-dom'; 


const CreateScript: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    language: '',
    selectedCategory: '',
    formatType: '',
    videoTopic: '',
    audienceDescription: '',
    selectedVoice: '',
  });

  const [ , setError] = useState<string | null>(null);
  const [ , setSuccess] = useState<boolean>(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };
  const navigate = useNavigate(); 

  const handleSubmit = async () => {
    console.log("Form Submitted", formData);
    setError(null);
    setSuccess(false);
  /* 
    if (!formData.title || !formData.language || !formData.videoTopic) {
      setError('Please fill in all required fields.');
      return;
    } */

    try {
      const response = await apiRequest('/script/create', 'POST', formData); 
      console.log("@response", response);
      setSuccess(true);
      navigate('/edit-script', { state: { response } });

    } catch (error) {
      setError('Script creation failed. Please try again.');
    }
  };

  return (
    <>
      <VideoSection
        videoTopic={formData.videoTopic}
        setVideoTopic={(value) => handleInputChange('videoTopic', value)}
        formatType={formData.formatType}
        setFormatType={(value) => handleInputChange('formatType', value)}
        selectedCategory={formData.selectedCategory}
        setSelectedCategory={(value) => handleInputChange('selectedCategory', value)}
        title={formData.title}
        setTitle={(value) => handleInputChange('title', value)}
      />
      <AudienceSection
        audienceDescription={formData.audienceDescription}
        setAudienceDescription={(value) => handleInputChange('audienceDescription', value)}
        language={formData.language}
        setLanguage={(value) => handleInputChange('language', value)}
        selectedVoice={formData.selectedVoice}
        setSelectedVoice={(value) => handleInputChange('selectedVoice', value)}
      />
      <SubmitButton onSubmit={handleSubmit} text="Create Script" />
    </>
  );
};

export default CreateScript;
