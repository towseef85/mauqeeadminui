import React,{useState} from 'react'
import languageData from './data';
import { Dropdown, Space } from 'antd';
import { useLocaleContext, useLocaleActionsContext } from '../../../../utility/AppContextProvider/LocaleContextProvider';
import { useLayoutActionsContext } from '../../../../utility/AppContextProvider/LayoutContextProvider';
import {IoLanguageOutline} from 'react-icons/io5';
import './index.style.less'

const items = [
    {
      label: 'English',
      icon:<i className={`flag flag-24 flag-us`} />,
      locale:'en',
      key: 1,
    },
    {
      label: 'Arabic',
      icon:<i className={`flag flag-24 flag-sa`} />,
      locale:'ar',
      key: 2,
    }
  ];

export default function AppLanguageSwitcher() {
    const {rtlLocale, locale} = useLocaleContext();
    const {updateLocale} = useLocaleActionsContext();
    const {updateDirection} = useLayoutActionsContext();
    const [open, setOpen] = useState(false)
    const onClick = ( {key}) => {
        const getlocal = languageData.filter((x)=>x.key == key)
       if(key == 1){
        updateDirection('ltr')
       }else{
        updateDirection('rtl')
       }
        updateLocale(getlocal[0])
      };
      const handleOpenChange = (flag) => {
        setOpen(flag);
      };

  return (
    <Dropdown
    menu={{
      items,
      onClick
    }}
    overlayStyle={{zIndex: 1052}}
  >
    <a className='ant-dropdown-link langBtn' onClick={(e) => e.preventDefault()}>
      <Space >
        <span className='lang-icon'>

        <IoLanguageOutline />
        </span>
      </Space>
    </a>
  </Dropdown>
  )
}
