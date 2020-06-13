import React from 'react';
import { TextInput, View, StatusBar } from 'react-native';

import Routes from './routes';


export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#f10" hidden={false} />
      <Routes />
    </>
  );
};
