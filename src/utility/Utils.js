import {useIntl} from 'react-intl';

let intl;

export function IntlGlobalProvider({children}) {
  intl = useIntl();
  // Keep the 'intl' service reference
  return children;
}

export const appIntl = () => {
  return intl;
};

