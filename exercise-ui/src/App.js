import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateExercisePage from './pages/CreateExercisePage';
import EditExercisePage from './pages/EditExercisePage';
import { useState } from 'react';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

function App() {

  const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <>
      <div className="App">
        <AppHeader />
        <Router>
          <div>
            <Route path="/" exact>
              <HomePage setExerciseToEdit={ setExerciseToEdit } />
            </Route>
            <Route path="/new-exercise">
              <CreateExercisePage />
            </Route>
            <Route path="/edit-exercise">
              <EditExercisePage exerciseToEdit={ exerciseToEdit } />
            </Route>
          </div>
        </Router>
        <AppFooter />
      </div>
    </>
  );
}

export default App;
