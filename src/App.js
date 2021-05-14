import React, { Fragment } from 'react';

// Importing Components

import TestInput from './components/TestInput';
import TestList from './components/TestList';

function App() {
  return (
    <Fragment>
      <div className = "container"> 
        <TestInput />
        <TestList />
      </div>
    </Fragment>
  );
}

export default App;