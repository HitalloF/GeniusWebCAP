import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../context/I18nContext';

import messages_en from './locales/en/translation.json';
import messages_pt from './locales/pt/translation.json';

const messages = {
  en: messages_en,
  pt: messages_pt
};

function Home() {
  const { language } = useI18n();
  const {
    HomeTitle,
    About,
    Contact,
    Logout,
  } = messages[language];

  const eventos = [
    {
      id: 1,
      titulo: "Carnaval do Recife Antigo",
      descricao: "Venha vivenciar um dos carnavais mais vibrantes do Brasil, com frevo, maracatu e atrações incríveis pelas ruas históricas do Recife Antigo.",
      imagem: "carnaval_recife_antigo.jpg"
    },
    {
      id: 2,
      titulo: "Festival Recife de Teatro Nacional",
      descricao: "Um festival que reúne peças de teatro de todo o país, destacando a rica produção cultural e a diversidade do teatro brasileiro.",
      imagem: "festival_teatro_recife.jpg"
    },
    {
      id: 3,
      titulo: "São João de Recife",
      descricao: "Celebre o São João no coração de Recife com quadrilhas juninas, comidas típicas e muito forró pé-de-serra.",
      imagem: "sao_joao_recife.jpg"
    },
    {
      id: 4,
      titulo: "Feira de Artesanato de Pernambuco",
      descricao: "Explore a maior feira de artesanato do estado, com produtos feitos por artesãos locais, incluindo esculturas, tecidos e joias.",
      imagem: "feira_artesanato_pe.jpg"
    },
    {
      id: 5,
      titulo: "Recife Antigo de Coração",
      descricao: "Um projeto que acontece todo primeiro domingo do mês, transformando o Recife Antigo em um grande palco cultural com atividades para todas as idades.",
      imagem: "recife_antigo_coracao.jpg"
    },
    {
      id: 6,
      titulo: "Noite Cultural na Rua da Moeda",
      descricao: "Desfrute de uma noite cultural na famosa Rua da Moeda, com música ao vivo, galerias de arte abertas e gastronomia local.",
      imagem: "noite_cultural_rua_moeda.jpg"
    },
  ];


  return (
    <div className="tw-bg-gray-100">
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
      <div className="tw-max-w-6xl tw-mx-auto tw-pt-20 tw-pb-10 tw-flex tw-flex-wrap tw-justify-around">
        {eventos.map(evento => (
          <div key={evento.id} className="tw-w-full tw-max-w-md tw-mx-4 tw-my-4 tw-bg-white tw-shadow-lg tw-rounded-lg tw-flex-grow tw-basis-[25%]">
            <img src={evento.imagem} alt={evento.titulo} className="tw-w-full tw-h-64 tw-object-cover tw-rounded-t-lg" />
            <div className="tw-p-6">
              <h2 className="tw-text-lg tw-font-semibold tw-text-gray-800">{evento.titulo}</h2>
              <p className="tw-mt-2 tw-text-sm tw-text-gray-600">{evento.descricao}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Home;
