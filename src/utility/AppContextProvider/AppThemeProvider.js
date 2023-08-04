import React, {useEffect} from 'react';
import {ConfigProvider} from 'antd';
import { useLayoutContext } from './LayoutContextProvider';
import { useLocaleContext } from './LocaleContextProvider';
import AppLocale from '../localization';

const AppThemeProvider = (props) => {
    const {direction} = useLayoutContext();
    const {locale} = useLocaleContext();
  
    const {antLocale} = AppLocale[locale.locale];
  
    useEffect(() => {
      document.body.setAttribute('dir', direction);
    }, [direction]);
  
    return (
      <ConfigProvider direction={direction} locale={antLocale}>
        {props.children}
      </ConfigProvider>
    );
  };
  
  export default React.memo(AppThemeProvider);