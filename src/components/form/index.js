import React, { useEffect, useState } from 'react';

import api from './services/api';
import './scss/form.scss';

const Form = () => {
  const [estados, setEstado] = useState([]);
  const [crm, setCrm] = useState(0);
  const [state, setState] = useState();
  const [errors, setErrors] = useState({});
  const [sucesso, setSucesso] = useState(false)

  useEffect(() => {
    api.get('localidades/estados').then((res) => {
      setEstado(res.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate());
    setSucesso(true);
  }

  const validate = () => {
    let errors = {};
    if (crm.length < 5 || crm.length > 5 || crm === 0) {
      errors.crm = "Campo CRM é obrigatório"
    }

    if(state === undefined) {
      errors.state = "Campo Estado é obrigatório"
    }
    return errors;
  }

  return (
    <>
      <form className="form_" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <input 
            type="text" 
            name="crm"
            className={`input_ form-control ${errors.crm ? 'is-invalid' : ''}`}
            placeholder="00000"
            onChange={(e) => setCrm(e.target.value)} 
          />
          {errors.crm && <p className="error_">{errors.crm}</p>}
        </div>

        <div className="form-group">  
          <select className={`select_ form-control ${errors.state ? 'is-invalid' : ''}`} onChange={(e) => setState(e.target.value)} name="state">
            <option className="option_">Selecione</option>
            {estados.map((state) => (
              <option key={state.id} value={state.sigla} className="option_">
                {state.sigla}
              </option>
            ))}
          </select>
        </div>
        {errors.state && <p className="error_">{errors.state}</p>}

        <button type="submit" className="btn btn-ouline btn_">CONTINUE</button>
      </form>

      <p className="description_">
        CANAL DE COMPRA EXCLUSIVO PARA CLASSE MÉDICA
      </p>
      {sucesso ? <Success /> : null}
    </>
  );
}

const Success = () => {
  return (
    <h1>SUCESSAAAAASSSSOOOOO</h1>
  );
}

export default Form;