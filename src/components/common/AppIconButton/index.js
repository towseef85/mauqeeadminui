import React from 'react';
import {Button, Tooltip} from 'antd';
import clsx from 'clsx';
import './index.style.less';

const AppIconButton = ({title, icon, className, onClick, ...rest}) => {
    if (title)
      return (
        <Tooltip title={title}>
          <Button
            className={clsx('icon-btn', className)}
            shape='circle'
            icon={icon}
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            {...rest}
          />
        </Tooltip>
      );
    return (
      <Button
        className={clsx('icon-btn', className)}
        shape='circle'
        icon={icon}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        {...rest}
      />
    );
  };

  export default AppIconButton;