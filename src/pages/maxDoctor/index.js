import React from 'react';

import LogDescription from '../../components/logDescription';
import Icons from '../../components/icons';
import Form from '../../components/form';

import './scss/mxd.scss';

const MaxDoctor = () => {
  return (
    <div className="mxd_ container d-flex justify-content-center align-items-center flex-md-column">
      <LogDescription />
      <Form />
      <Icons />
    </div>
  );
}

export default MaxDoctor;