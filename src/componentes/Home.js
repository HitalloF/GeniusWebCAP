import React from 'react';
import { useI18n } from '../context/I18nContext';

import messages_en from './locales/en/translation.json';
import messages_pt from './locales/pt/translation.json';
import Header from './Header';
import Footer from './Footer';

import moeda from '../img/eventos/moeda.jpg'
import antigo from '../img/eventos/antigo.jpg'
import marco from '../img/eventos/marc.jpg'
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
    Equipe
  } = messages[language];

  const eventos = [
    {
      id: 1,
      titulo: "Carnaval do Recife Antigo",
      descricao: "Venha vivenciar um dos carnavais mais vibrantes do Brasil, com frevo, maracatu e atrações incríveis pelas ruas históricas do Recife Antigo.",
      imagem: antigo
    },
    {
      id: 2,
      titulo: "Festival Recife de Teatro Nacional",
      descricao: "Um festival que reúne peças de teatro de todo o país, destacando a rica produção cultural e a diversidade do teatro brasileiro.",
      imagem: moeda
    },
    {
      id: 3,
      titulo: "São João de Recife",
      descricao: "Celebre o São João no coração de Recife com quadrilhas juninas, comidas típicas e muito forró pé-de-serra.",
      imagem: marco
    },
    {
      id: 4,
      titulo: "Feira de Artesanato de Pernambuco",
      descricao: "Explore a maior feira de artesanato do estado, com produtos feitos por artesãos locais, incluindo esculturas, tecidos e joias.",
      imagem: antigo
    },
    {
      id: 5,
      titulo: "Recife Antigo de Coração",
      descricao: "Um projeto que acontece todo primeiro domingo do mês, transformando o Recife Antigo em um grande palco cultural com atividades para todas as idades.",
      imagem: moeda
    },
    {
      id: 6,
      titulo: "Noite Cultural na Rua da Moeda",
      descricao: "Desfrute de uma noite cultural na famosa Rua da Moeda, com música ao vivo, galerias de arte abertas e gastronomia local.",
      imagem: marco
    },
  ];


  return (
    <div className="tw-bg-gray-100">
      <Header />
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
      <Footer/>
    </div>
  );
}

export default Home;
