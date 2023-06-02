import React from 'react';
import ReactDOM from 'react-dom';
import Lista from './Lista';
import Formulario from './Formulario'

function Index() {

  return (
      <div className='container justify-content-center col-6 mt-5'>
        <div>
          <Formulario />
        </div>
        <div className='mt-5'>
          <Lista />
        </div>
      </div>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));