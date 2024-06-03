import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { useI18n } from '../context/I18nContext';
import messages_en from './locales/en/translation.json';
import messages_pt from './locales/pt/translation.json';
import bh from '../img/bg.jpg';
import Footer from './Footer';

const messages = {
  en: messages_en,
  pt: messages_pt,
};

function Login() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();
  const { language, toggleLanguage } = useI18n();
  const { login, username, password, submit, HomeTitle, register } = messages[language];
  const languageLabel = language === 'pt' ? 'EN' : 'PT';

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = { email: usuario, senha: senha };

    try {
      const response = await axios.post('http://localhost:3001/login', loginData);
      if (response && response.data) {
        console.log('Login successful:', loginData, response.data);
        navigate('/home');
      } else {
        throw new Error('Resposta sem dados');
      }
    } catch (error) {
      console.error('Login failed:', error.response ? error.response.data : 'Sem detalhes do erro');
      alert('Falha no login: ' + (error.response ? error.response.data : 'Verifique suas credenciais'));
    }
  };

  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-min-h-screen" style={{ backgroundImage: `url(${bh})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="tw-absolute tw-top-4 tw-right-4">
        <button type="button" onClick={toggleLanguage} className="tw-bg-gray-300 tw-hover:tw-bg-gray-400 tw-font-bold tw-py-2 tw-px-4 tw-rounded tw-focus:outline-none tw-focus:shadow-outline">
          {languageLabel}
        </button>
      </div>
      <h1 className="tw-text-white tw-text-xl tw-drop-shadow-sm tw-font-bold tw-mb-10 xs:tw-text-4xl">{HomeTitle}</h1>
      <div className="tw-bg-slate-200 tw-bg-opacity-25 tw-p-8 tw-rounded-lg tw-shadow-lg xs:tw-p-4 xs:tw-bg-black xs:tw-bg-opacity-75">
        <h2 className="tw-text-2xl tw-font-bold tw-text-white xs:tw-text-xl">{login}</h2>
        <form onSubmit={handleSubmit} className="tw-w-full">
          <div className="tw-mb-4">
            <label htmlFor="usuario" className="tw-text-white tw-block tw-text-sm tw-font-bold tw-mb-2">{username}</label>
            <input type="text" id="usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} className="tw-shadow tw-appearance-none tw-border tw-rounded tw-w-full tw-py-2 tw-px-3 tw-leading-tight tw-focus:outline-none tw-focus:shadow-outline" />
          </div>
          <div className="tw-mb-6">
            <label htmlFor="senha" className="tw-block tw-text-white tw-text-sm tw-font-bold tw-mb-2">{password}</label>
            <input type="password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} className="tw-shadow tw-appearance-none tw-border tw-rounded tw-w-full tw-py-2 tw-px-3 tw-leading-tight tw-focus:outline-none tw-focus:shadow-outline" />
          </div>
          <div className="tw-flex tw-justify-center">
            <button type="submit" className="tw-bg-blue-500 tw-hover:tw-bg-blue-700 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded tw-focus:outline-none tw-focus:shadow-outline xs:tw-py-1 xs:tw-px-2">{submit}</button>
          </div>
        </form>
        <Link to="/cadastro" className="tw-text-white tw-inline-block tw-align-baseline tw-font-bold tw-text-sm tw-hover:tw-text-blue-800">
          {register}
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
