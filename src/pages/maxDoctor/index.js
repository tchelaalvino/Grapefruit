import React from 'react';

import LogDescription from '../../components/logDescription';
import Icons from '../../components/icons';
import Form from '../../components/form';

const MaxDoctor = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center flex-column">
      <LogDescription />
      <Form />
      <Icons />
    </div>
  );
}

export default MaxDoctor;