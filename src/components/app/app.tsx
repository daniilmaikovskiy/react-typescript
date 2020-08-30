import React from 'react';
import classes from './app.module.scss';

const App = () => {
  const wrapperStyle: React.CSSProperties = { minHeight: window.innerHeight };

  return (
    <div className={classes.wrapper} style={wrapperStyle}>
      <h1 className={classes.greeting}>Welcome to my TypeScript react-app-template</h1>
      <span className={classes.signature}>Author: daniil maikovskiy</span>
    </div>
  );
};

export default App;
