import React from 'react';
import ReactDOM from 'react-dom';
import DirectorInfoContainer from './containers/DirectorInfoContainer.jsx';

window.onload = function () {
  ReactDOM.render(
    <DirectorInfoContainer />,
    document.getElementById('app')
  );
};
