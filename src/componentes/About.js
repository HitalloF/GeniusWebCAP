import React from 'react';
import { useI18n } from '../context/I18nContext';
import { Link } from 'react-router-dom';

import jenny from  '../img/membros/jenny.jpeg'
import hitallo from  '../img/membros/hitallo.jpeg'
import theu from  '../img/membros/theu.jpeg'
import ma from  '../img/membros/ma.jpeg'

import messages_en from './locales/en/translation.json';
import messages_pt from './locales/pt/translation.json';

const messages = {
  en: messages_en,
  pt: messages_pt
};
const membros = [
  {
    nome: "Jenyffer Mery",
    matricula: "01599642",
    foto: jenny
  },
  {
    nome: "Hítallo Freitas",
    matricula: "01620638",
    foto: hitallo
  },
  {
    nome: "Márlya Monique",
    matricula: "01597623",
    foto: ma
  },
  {
    nome: "Matheus Lemos",
    matricula: "01608078",
    foto: theu
  },
  {
    nome: "Bruno Soares",
    sobrenome: "da Silva",
    matricula: "11000133",
    foto: "src_do_bruno_soares"
  },
  {
    nome: "Gabriel do Vale",
    sobrenome: "Alcoforado Braga",
    matricula: "24009962",
    foto: "src_do_gabriel_do_vale"
  },
  {
    nome: "Guilherme Pietro",
    sobrenome: "Luna Diniz",
    matricula: "01576841",
    foto: "src_do_guilherme_pietro"
  },
  {
    nome: "Luiz Vinicius",
    sobrenome: "Lima da Silva",
    matricula: "01603161",
    foto: "src_do_luiz_vinicius"
  },
  {
    nome: "Pedro Dutra de Albuquerque",
    sobrenome: "Macedo",
    matricula: "01602996",
    foto: "src_do_pedro_dutra"
  },
  {
    nome: "Ronaldo de Souza Paixão",
    sobrenome: "Junior",
    matricula: "01604034",
    foto: "src_do_ronaldo_de_souza"
  }
];




function About() {
  const { language } = useI18n();
  const { HomeTitle,Contact,Logout, RecifeVivo, HabitaçõesAtraentes, HabitaçõesAtraentestxt, AtividadesComerciaisVibrantes, AtividadesComerciaisVibrantestxt, TurismoEncantador, TurismoEncantadortxt, CulturaViva, CulturaVivatxt, Equipe } = messages[language];

  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-min-h-screen tw-bg-gray-100 tw-py-8">
            <header className="tw-bg-gray-800 tw-text-white tw-py-4 tw-fixed tw-top-0 tw-left-0 tw-w-full tw-flex tw-justify-between tw-items-center tw-z-10">
        <div className="tw-pl-8">
          <Link to="/home" className="tw-text-2xl tw-font-bold">{HomeTitle}</Link>
        </div>
        <div className="tw-flex tw-items-center tw-pr-8">
          <Link to="/about" className="tw-mr-4 hover:tw-text-gray-300">{About}</Link>
          <Link to="/contact" className="tw-mr-4 hover:tw-text-gray-300">{Contact}</Link>
          <button className="tw-px-4 tw-py-2 tw-bg-blue-500 hover:tw-bg-blue-600 tw-text-white tw-font-semibold tw-rounded">{Logout}</button>
        </div>
      </header>
      <div className="tw-max-w-3xl tw-text-center">
      <h1 className="tw-text-2xl tw-font-bold tw-mb-4">
          {RecifeVivo}
        </h1>
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-4 tw-mb-4">
          <div className="tw-bg-white tw-shadow-md tw-rounded-lg tw-p-4 tw-w-40rem tw-flex tw-flex-col tw-items-center">
            <h2 className="tw-text-lg tw-font-semibold tw-mb-2">{HabitaçõesAtraentes}</h2>
            <p>
{HabitaçõesAtraentestxt}
            </p>
          </div>
          <div className="tw-bg-white tw-shadow-md tw-rounded-lg tw-p-4 tw-w-40rem tw-flex tw-flex-col tw-items-center">
            <h2 className="tw-text-lg tw-font-semibold tw-mb-2">{AtividadesComerciaisVibrantes}</h2>
            <p>
             {AtividadesComerciaisVibrantestxt}
            </p>
          </div>
          <div className="tw-bg-white tw-shadow-md tw-rounded-lg tw-p-4 tw-w-40rem tw-flex tw-flex-col tw-items-center">
            <h2 className="tw-text-lg tw-font-semibold tw-mb-2">{TurismoEncantador}</h2>
            <p>{TurismoEncantadortxt}</p>
          </div>
          <div className="tw-bg-white tw-shadow-md tw-rounded-lg tw-p-4 tw-w-40rem tw-flex tw-flex-col tw-items-center">
              <h2 className="tw-text-lg tw-font-semibold tw-mb-2">{CulturaViva}</h2>
            <p>
            {CulturaVivatxt}
            </p>
          </div>
          {/* Outros tópicos omitidos por brevidade */}
        </div>
      </div>
      <h2 className="tw-text-xl tw-font-bold tw-mt-8">Equipe:</h2>
      <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-5 tw-gap-4 tw-mt-4">
  {membros.map((membro, index) => (
    <div key={index} className="tw-bg-white tw-shadow-md tw-rounded-lg tw-p-4 tw-w-40rem tw-flex tw-flex-col tw-items-center">
      {/* Verifica se a foto é uma URL ou uma importação */}
      {typeof membro.foto === 'string' ? (
        <img src={membro.foto} alt={`Foto de ${membro.nome}`} className="tw-rounded-full tw-w-24 tw-h-24 tw-mb-2" />
      ) : (
        <img src={membro.foto.default} alt={`Foto de ${membro.nome}`} className="tw-rounded-full tw-w-24 tw-h-24 tw-mb-2" />
      )}
      <div className="tw-text-center">
        <p className="tw-font-semibold">{membro.nome}</p>
        <p className="tw-text-sm tw-text-gray-600">Matrícula: {membro.matricula}</p>
      </div>
    </div>
  ))}
</div>
      </div>
    );
}

export default About;
