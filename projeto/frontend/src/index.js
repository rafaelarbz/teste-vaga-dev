import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import ReactDOM from 'react-dom';
import FormularioEditar from './FormularioEditar';
import Principal from './Principal';

function Index() {

  return (
    <BrowserRouter>      
      <div className='container justify-content-center col-6 mt-5'>
          <Routes>
            <Route exact path='/' element={<Principal />}/>
            <Route path=':id/editar' element={<FormularioEditar />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));