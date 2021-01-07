import React from 'react';
import Main from './components/Main';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import NavBar from './components/Navbar';
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>


export default App;
