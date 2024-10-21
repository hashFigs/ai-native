import React from 'react';
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

function App() {
  return (
    <SafeAreaProvider>
        <PaperProvider> {/* Wrap with PaperProvider */}

      <Router>
         <AuthProvider>
         <Layout>
          <Routes>
          <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/portal"
          element={
            <PrivateRoute>
              <HomePage />
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
          path="/script"
          element={
            <PrivateRoute>
              <ScriptPage />
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
        </AuthProvider>
      </Router>
      </PaperProvider>

      </SafeAreaProvider>
    
  );
}

export default App;
