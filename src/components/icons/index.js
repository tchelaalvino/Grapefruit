import React from 'react';

import compra from './assets/img/icon_06.png';
import quantidade from './assets/img/icon_07.png';
import frete from './assets/img/icon_08.png';
import agilidade from './assets/img/icon_09.png';
import comodidade from './assets/img/icon_10.png';

import './assets/scss/actions.scss';

const Icons = () => {
  return (
    <div className="actions_">
      
      <div className="d-flex justify-content-center">
        <div className="flex-column box_">
          <img src={compra} alt="Facilidade de Compra" />
          <p className="plus_ spf_">FACILIDADE DE COMPRA</p>
        </div>

        <div className="flex-column box_">
          <img src={quantidade} alt="Quantidade não Limitada" />
          <p className="plus_">QUANTIDADE NÃO LIMITADA</p>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <div className="flex-column box_">
          <img src={frete} alt="Frete Grátis" />
          <p className="plus_">FRETE GRÁTIS</p>
        </div>
        <div className="flex-column box_">
          <img src={agilidade} alt="Agilidade" />
          <p className="plus_">AGILIDADE</p>
        </div>
        <div className="flex-column box_">
          <img src={comodidade} alt="Comodidade" />
          <p className="plus_">COMODIDADE</p>
        </div>
      </div>
    </div>
  );
}

export default Icons;