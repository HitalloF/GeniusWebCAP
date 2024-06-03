import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import bgImage from '../img/bgc.jpg';

function Cadastro() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (senha !== confirmSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    const loginData = {
      email: usuario,
      senha: senha
    };

    try {
      const response = await axios.post('http://localhost:3001/register', loginData);
      if (response && response.data) {
        console.log('Registro successful:', response.data);
        console.log('aa')
        navigate('/login');
      } else {
        throw new Error('Resposta sem dados');
      }
    } catch (error) {
      console.error('Registro failed:', error.response ? error.response.data : 'Sem detalhes do erro');
      alert('Falha no registro: ' + (error.response ? error.response.data : 'Verifique suas credenciais'));
    }
  };

  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-min-h-screen" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="tw-bg-black tw-bg-opacity-75 tw-p-8 tw-rounded-lg tw-shadow-lg tw-w-full tw-max-w-md">
        <h1 className="tw-text-white tw-text-2xl tw-font-bold tw-mb-8">Cadastro</h1>
        <form onSubmit={handleSubmit}>
          <div className="tw-mb-4">
            <label htmlFor="usuario" className="tw-block tw-text-white tw-text-sm tw-font-bold tw-mb-2">
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
          <div className="tw-mb-4">
            <label htmlFor="senha" className="tw-block tw-text-white tw-text-sm tw-font-bold tw-mb-2">
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
          <div className="tw-mb-4">
            <label htmlFor="confirmSenha" className="tw-block tw-text-white tw-text-sm tw-font-bold tw-mb-2">
              Confirme a Senha:
            </label>
            <input
              type="password"
              id="confirmSenha"
              value={confirmSenha}
              onChange={(e) => setConfirmSenha(e.target.value)}
              className="tw-shadow tw-appearance-none tw-border tw-rounded tw-w-full tw-py-2 tw-px-3 tw-text-gray-700 tw-leading-tight tw-focus:outline-none tw-focus:shadow-outline"
            />
          </div>
          <div className="tw-flex tw-items-center tw-justify-center tw-mb-4">
            <button type="submit" className="tw-bg-blue-500 tw-hover:tw-bg-blue-700 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded tw-focus:outline-none tw-focus:shadow-outline">
              Cadastrar
            </button>
          </div>
        </form>
        <Link to="/login" className="tw-text-white tw-hover:tw-text-blue-800 tw-font-bold">
          Já tem uma conta? Faça login
        </Link>
      </div>
    </div>
  );
}

export default Cadastro;
