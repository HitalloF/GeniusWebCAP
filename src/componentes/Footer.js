// Footer.js

import React from 'react';
import { useI18n } from '../context/I18nContext';
import messages_en from './locales/en/translation.json';
import messages_pt from './locales/pt/translation.json';

const messages = {
    en: messages_en,
    pt: messages_pt,
};

function Footer() {
    const { language } = useI18n(); 
    const { footer } = messages[language];

    return (
        <div className="tw-fixed tw-inset-x-0 tw-bottom-0 tw-bg-black tw-text-white tw-text-center tw-py-2">
            <p>{footer}</p> 
        </div>
    );
}

export default Footer;
