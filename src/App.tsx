import React from 'react';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import { AppContainer } from './styles/App';

const App = () => (
  <AppContainer>
    <Sidebar />
    <MainContent />
  </AppContainer>
);

export default App;
