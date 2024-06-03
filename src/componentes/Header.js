import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../context/I18nContext';

import messages_en from './locales/en/translation.json';
import messages_pt from './locales/pt/translation.json';
import Equipe from './Equipe';

const messages = {
  en: messages_en,
  pt: messages_pt
};

function Header() {
  const { language } = useI18n();
  const {
    HomeTitle,
    About,
    Contact,
    Logout,
    Equipe
  } = messages[language];


  return (
    <div className="tw-bg-gray-100">
      <header className="tw-bg-gray-800 tw-text-white tw-py-4 tw-fixed tw-top-0 tw-left-0 tw-w-full tw-flex tw-justify-between tw-items-center tw-z-10">
        <div className="tw-pl-8">
          <Link to="/home" className="tw-text-2xl tw-font-bold">{HomeTitle}</Link>
        </div>
        <div className="tw-flex tw-items-center tw-pr-8">
          <Link to="/about" className="tw-mr-4 hover:tw-text-gray-300">{About}</Link>
          <Link to="/contact" className="tw-mr-4 hover:tw-text-gray-300">{Contact}</Link>
          <Link to="/equipe" className="tw-mr-4 hover:tw-text-gray-300">{Equipe}</Link>
          <Link to="/pokemon" className="tw-mr-4 hover:tw-text-gray-300">Pokemon</Link>
          <Link to="/" className="tw-mr-4 hover:tw-text-gray-300"> <button className="tw-px-4 tw-py-2 tw-bg-blue-500 hover:tw-bg-blue-600 tw-text-white tw-font-semibold tw-rounded">{Logout}</button></Link>
        </div>
      </header>

    </div>
  );
}

export default Header;
