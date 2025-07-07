import React, { useState, useEffect } from 'react';
import LocaleContext from './LocaleContext';

export default function LocaleContextProvider({ children }) {
  const [locale, setLocale] = useState(() => {
    return localStorage.getItem('locale') || 'id';
  });

  useEffect(() => {
    localStorage.setItem('locale', locale);
  }, [locale]);

  const toggleLocale = () => {
    setLocale((prev) => (prev === 'id' ? 'en' : 'id'));
  };

  const contextValue = {
    locale,
    toggleLocale,
  };

  return (
    <LocaleContext.Provider value={contextValue}>
      {children}
    </LocaleContext.Provider>
  );
}
