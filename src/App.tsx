
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper'; // Import PaperProvider

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Adjust the import path as necessary
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Layout from './components/Layout'; // Import your Layout component
import './App.css';
import SignUp from './pages/SignUp';
import PrivateRoute from './components/PrivateRoute';
import ScriptPage from './pages/Scripts/ScriptPage';
import ChannelSettingsPage from './pages/ChannelSettings/ChannelSettingsPage';
import ThumbnailPage from './pages/Thumbnail/ThumbnailPage';
import AnalyticsPage from './pages/Analytics/AnalyticsPage';
import EditScript from './pages/Scripts/EditScript';
import LandingPage from './pages/LandingPage';
import EngagementPage from './pages/Engagement/Engagement';
import TonePage from './pages/Tone/Tone';
import InsightsPage from './pages/Insights/Insights';
import PreferencesPage from './pages/Preferences/Preferences';



function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider> 
        <Router>
          <AuthProvider>
            <Layout>
              <Routes>
                <Route path="/signup" element={<SignUp />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/edit-script" element={<EditScript />} />

                  
                  <Route
                    path="/portal"
                    element={
                      <PrivateRoute>
                        <HomePage />
                      </PrivateRoute>
                    }
                  />
                 
                  <Route
                    path="/script"
                    element={
                      <PrivateRoute>
                        <ScriptPage />
                      </PrivateRoute>
                    }
                  />

                  <Route
                    path="/Engagement"
                    element={
                      <PrivateRoute>
                        <EngagementPage />
                      </PrivateRoute>
                    }
                  />


                  <Route
                    path="/Tone"
                    element={
                      <PrivateRoute>
                        <TonePage />
                      </PrivateRoute>
                    }
                  />


                  <Route
                    path="/insights"
                    element={
                      <PrivateRoute>
                        <InsightsPage />
                      </PrivateRoute>
                    }
                  />


                  <Route
                    path="/preferences"
                    element={
                      <PrivateRoute>
                        <PreferencesPage />
                      </PrivateRoute>
                    }
                  />



                  <Route
                    path="/youtubeChannelSeetings"
                    element={
                      <PrivateRoute>
                        <ChannelSettingsPage />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/thumbnails"
                    element={
                      <PrivateRoute>
                        <ThumbnailPage />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/analytics"
                    element={
                      <PrivateRoute>
                        <AnalyticsPage />
                      </PrivateRoute>
                    }
                  />
                </Routes>
              </Layout>
            {/*   <LogInModal visible={true} onClose={()=>console.log("closing modal")} /> */}
            
            </AuthProvider>  
          </Router>
        </PaperProvider>
      </SafeAreaProvider>
    
  );
}

export default App;
