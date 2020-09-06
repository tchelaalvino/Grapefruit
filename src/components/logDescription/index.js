import React from 'react';

import logo from './assets/img/logo_01.png';

import './assets/scss/dsc.scss';

const LogDescription = () => {
  return (
    <div className="describe_">
      <img src={logo} alt="Logotipo" className="logo_" />
      <h3 className="description_">
        A PLATAFORMA DE COMPRA DIRETA DO SEU ANESTÉSICO TÓPICO
      </h3>
    </div>
  );
}

export default LogDescription;