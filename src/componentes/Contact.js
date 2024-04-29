// ContactPage.js

import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Contact() {
  return (
    <>
    <Header/>
    <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-min-h-screen tw-bg-gray-100 tw-p-6">

      <div className="tw-bg-white tw-p-8 tw-rounded-lg tw-shadow-lg tw-w-full tw-max-w-md">
        <h1 className="tw-text-xl tw-font-bold tw-text-gray-900 tw-mb-4">Contato</h1>
        <div className="tw-mb-4">
          <h2 className="tw-text-sm tw-font-bold tw-text-gray-700">Email:</h2>
          <p className="tw-text-gray-900">contato@recifevivo.com</p>
        </div>
        <div className="tw-mb-6">
          <h2 className="tw-text-sm tw-font-bold tw-text-gray-700">Telefone:</h2>
          <p className="tw-text-gray-900">81 9 8243-3710</p>
        </div>
      </div>
      <Footer/>
    </div>
    </>
  );
}

export default Contact;