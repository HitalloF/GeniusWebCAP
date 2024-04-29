import React from 'react';
import { useI18n } from '../context/I18nContext';
import { Link } from 'react-router-dom';



import messages_en from './locales/en/translation.json';
import messages_pt from './locales/pt/translation.json';
import Header from './Header';
import Footer from './Footer';

const messages = {
  en: messages_en,
  pt: messages_pt
};



function About() {
  const { language } = useI18n();
  const { HomeTitle,Contact,Logout, RecifeVivo, HabitaçõesAtraentes, HabitaçõesAtraentestxt, AtividadesComerciaisVibrantes, AtividadesComerciaisVibrantestxt, TurismoEncantador, TurismoEncantadortxt, CulturaViva, CulturaVivatxt, Equipe } = messages[language];

  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-min-h-screen tw-bg-gray-100 tw-py-8">
      <Header />
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
        </div>
      </div>
      <Footer/>
      </div>
    );
}

export default About;
