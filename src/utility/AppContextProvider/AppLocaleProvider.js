import React from 'react'
import {IntlProvider} from 'react-intl';
import AppLocale from '../localization';
import { useLocaleContext } from './LocaleContextProvider';
import { IntlGlobalProvider } from '../Utils';

export default function AppLocaleProvider(props) {
    const {locale} = useLocaleContext();
    console.log("locale",locale)
    const currentAppLocale = AppLocale[locale.locale];
  return (
    <IntlProvider
      locale={currentAppLocale.locale}
      messages={currentAppLocale.messages}>
      <IntlGlobalProvider>{props.children}</IntlGlobalProvider>
    </IntlProvider>
  )
}
