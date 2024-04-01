// Login.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useI18n } from '../context/I18nContext'
import messages_en from './locales/en/translation.json';
import messages_pt from './locales/pt/translation.json';

const messages = {
  en: messages_en,
  pt: messages_pt
};

function Login() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();
  const { language, toggleLanguage } = useI18n();
  const { login, username, password, submit } = messages[language];
  const languageLabel = language === 'pt' ? 'EN' : 'PT'; // Rotula o botão de alternância de idioma

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados de Login:", usuario, senha);
    navigate('/home');
  };

  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-min-h-screen tw-bg-gray-100">
              <button type="button" onClick={toggleLanguage} className="tw-bg-gray-300 tw-hover:tw-bg-gray-400 tw-text-gray-700 tw-font-bold tw-py-2 tw-px-4 tw-rounded tw-focus:outline-none tw-focus:shadow-outline">
          {languageLabel}
        </button>
      <div>
        <h1>Recife Vivo: Tecnologia para uma Cidade Vibrante</h1>
      </div>
      <div className="tw-flex tw-justify-between tw-w-full tw-px-4">

      </div>
      <h1 className="tw-text-2xl tw-font-bold">{login}</h1>
      <form onSubmit={handleSubmit} className="tw-w-full tw-max-w-xs">
        <div className="tw-mb-4">
          <label htmlFor="usuario" className="tw-block tw-text-gray-700 tw-text-sm tw-font-bold tw-mb-2">
            {username}
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
            {password}
          </label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="tw-shadow tw-appearance-none tw-border tw-rounded tw-w-full tw-py-2 tw-px-3 tw-text-gray-700 tw-leading-tight tw-focus:outline-none tw-focus:shadow-outline"
          />
        </div>
        <div className="tw-flex tw-justify-center">
          <button type="submit" className="tw-bg-blue-500 tw-hover:tw-bg-blue-700 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded tw-focus:outline-none tw-focus:shadow-outline">
            {submit}
          </button>
        </div>
      </form>
      <Link to="/cadastro" className="tw-inline-block tw-align-baseline tw-font-bold tw-text-sm tw-text-blue-500 tw-hover:tw-text-blue-800">
        Não tem uma conta? Cadastre-se
      </Link>
    </div>
  );
}

export default Login;
