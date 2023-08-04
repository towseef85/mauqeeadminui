import React, {createContext, useContext, useState} from 'react';
import defaultConfig from './defaultConfig';

const LayoutContext = createContext();
const LayoutActionsContext = createContext();

export const useLayoutContext = () => useContext(LayoutContext);

export const useLayoutActionsContext = () => useContext(LayoutActionsContext);

const LayoutContextProvider = ({children}) => {
    const [direction, updateDirection] = useState(defaultConfig.direction);
    return(
        <LayoutContext.Provider
      value={{
        direction,
        rtlLocale: defaultConfig.rtlLocale,
      }}>
            <LayoutActionsContext.Provider
        value={{
          updateDirection,
        }}>
        {children}
      </LayoutActionsContext.Provider>
      </LayoutContext.Provider>
    )
}

export default LayoutContextProvider;