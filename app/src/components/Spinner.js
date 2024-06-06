import React from 'react';
import loading from './loading.gif';

function Spinner() {
  return (
    <div className='d-flex justify-content-center my-3'>
      <img src={loading} alt="loading"/>
    </div>
  )
}

export default Spinner