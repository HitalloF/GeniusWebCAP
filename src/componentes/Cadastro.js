import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Cadastro() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados de Cadastro:", usuario, senha);
    navigate('/login');
  };

  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-min-h-screen tw-bg-gray-100">
      <h1 className="tw-text-2xl tw-font-bold">Cadastro</h1>
      <form onSubmit={handleSubmit} className="tw-w-full tw-max-w-xs tw-mt-8">
        <div className="tw-mb-4">
          <label htmlFor="usuario" className="tw-block tw-text-gray-700 tw-text-sm tw-font-bold tw-mb-2">
            Usuário:
          </label>
          <input
            type="text"
            id="usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            className="tw-shadow tw-appearance-none tw-border tw-rounded tw-w-full tw-py-2 tw-px-3 tw-text-gray-700 tw-leading-tight tw-focus:outline-none tw-focus:shadow-outline"
          />
        </div>
        <div className="tw-mb-6">
          <label htmlFor="senha" className="tw-block tw-text-gray-700 tw-text-sm tw-font-bold tw-mb-2">
            Senha:
          </label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="tw-shadow tw-appearance-none tw-border tw-rounded tw-w-full tw-py-2 tw-px-3 tw-text-gray-700 tw-leading-tight tw-focus:outline-none tw-focus:shadow-outline"
          />
        </div>
        <div className="tw-flex tw-items-center tw-justify-center">
          <button type="submit" className="tw-bg-blue-500 tw-hover:tw-bg-blue-700 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded tw-focus:outline-none tw-focus:shadow-outline">
            Cadastrar
          </button>
        </div>
      </form>
      <Link to="/login" className="tw-mt-4 tw-text-blue-500 tw-hover:tw-text-blue-800">
        Já tem uma conta? Faça login
      </Link>
    </div>
  );
}

export default Cadastro;
