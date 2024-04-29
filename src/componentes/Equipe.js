import React from 'react'
import jenny from  '../img/membros/jenny.jpeg'
import hitallo from  '../img/membros/hitallo.jpeg'
import theu from  '../img/membros/theu.jpeg'
import ma from  '../img/membros/ma.jpeg'
import alan from '../img/membros/alan.jpg'
import { Link } from 'react-router-dom'
import Home from './Home'
import { useI18n } from '../context/I18nContext';



import messages_en from './locales/en/translation.json';
import messages_pt from './locales/pt/translation.json';
import Header from './Header'
import Footer from './Footer'

const membros = [
  {
    nome: "Jenyffer Mery",
    matricula: "01599642",
    foto: jenny,
    funcao: "HTML E CSS"
  },
  {
    nome: "Hítallo Freitas",
    matricula: "01620638",
    foto: hitallo,
    funcao: "Revisor e JS"
  },
  {
    nome: "Márlya Monique",
    matricula: "01597623",
    foto:  ma,
    funcao: "HTML E CSS"
  },
  {
    nome: "Matheus Lemos",
    matricula: "01608078",
    foto: theu,
    funcao: "HTML E CSS"
  },
  {
    nome: "Bruno Soares",
    sobrenome: "da Silva",
    matricula: "11000133",
    foto: alan,
    funcao: "Textos"
  },
  {
    nome: "Gabriel do Vale",
    sobrenome: "Alcoforado Braga",
    matricula: "24009962",
    foto: alan,
    funcao: "HTML e CSS"
  },
  {
    nome: "Guilherme Pietro",
    sobrenome: "Luna Diniz",
    matricula: "01576841",
    foto: alan,
    funcao: "Textos"
  },
  {
    nome: "Luiz Vinicius",
    sobrenome: "Lima da Silva",
    matricula: "01603161",
    foto: alan,
    funcao: "Textos"
  },
  {
    nome: "Pedro Albuquerque",
    sobrenome: "Macedo",
    matricula: "01602996",
    foto: alan,
    funcao: "tradução"
  },
  {
    nome: "Ronaldo de Souza Paixão",
    sobrenome: "Junior",
    matricula: "01604034",
    foto: alan,
    funcao: "tradução"
  },
  {
    nome: "Luis Fernando",
    sobrenome: "Junior",
    matricula: "0160159580204034",
    foto: alan,
    funcao: "tradução"
  }
];

const messages = {
  en: messages_en,
  pt: messages_pt
};


const Equipe = () => {
  const { language } = useI18n();
  const {
    HomeTitle,
    About,
    Contact,
    Logout,
    Equipe
  } = messages[language];

  return (
    <div>

    <Header />
      <main className="tw-pt-20">
        <h1 className="tw-bg-white tw-shadow-md tw-justify-center tw-text-center tw-mb-4">{    Equipe
}</h1>
        <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-5 tw-gap-4">
          {membros.map((membro, index) => (
            <div key={index} className="tw-bg-white tw-shadow-md tw-rounded-lg tw-p-4 tw-w-40rem tw-flex tw-flex-col tw-items-center">
              <img src={membro.foto} alt={`Foto de ${membro.nome}`} className="tw-rounded-full tw-w-24 tw-h-24 tw-mb-2" />
              <div className="tw-text-center">
                <p className="tw-font-semibold">{membro.nome}</p>
                <p className="tw-text-sm tw-text-gray-600">Matrícula: {membro.matricula}</p>
                <p className="tw-text-sm tw-text-gray-600">Função: {membro.funcao}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer/>
    </div>
  );
};
export default Equipe