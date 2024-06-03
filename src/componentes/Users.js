import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      })
      .catch(error => console.error('Erro ao buscar usuários:', error));
  }, []);

  const deleteUser = async (userId) => {
    try {
      const response = await fetch(`http://localhost:3001/users/${userId}`, {
        method: 'DELETE'
      });
      const data = await response.text();
      console.log('Resposta do servidor:', data);
      setUsers(users.filter(user => user._id !== userId)); // Remove o usuário da lista após deletar
    } catch (error) {
      console.error('Erro ao deletar usuário:', error);
    }
  };

  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-min-h-screen tw-bg-gray-100 tw-py-8">
      <Header />
      <h1 className="tw-text-2xl tw-font-bold tw-mb-4">Lista de Usuários</h1>
      <table className="tw-border-collapse tw-border tw-w-full">
        <thead>
          <tr className="tw-bg-gray-200">
            <th className="tw-border tw-px-4 tw-py-2">Email</th>
            <th className="tw-border tw-px-4 tw-py-2">Senha</th>
            <th className="tw-border tw-px-4 tw-py-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td className="tw-border tw-px-4 tw-py-2">{user.email}</td>
              <td className="tw-border tw-px-4 tw-py-2">{user.senha}</td>
              <td className="tw-border tw-px-4 tw-py-2">
                <button onClick={() => deleteUser(user._id)} className="tw-bg-red-500 tw-hover:tw-bg-red-700 tw-text-white tw-font-bold tw-py-1 tw-px-2 tw-rounded tw-focus:tw-outline-none tw-focus:tw-shadow-outline">Deletar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />
    </div>
  );
}

export default Users;
