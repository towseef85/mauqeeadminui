import React from 'react'
import AppPageMetadata from '../../AppPageMetadata'
import './index.style.less'
import AppContainer from '../../AppContainer'
import AppIconButton from '../AppIconButton'
import { useNavigate } from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi';

export default function AppCreateView(
    {
        metaTitle,
        pageTitle,
        tooltiptitle,
        children

    }
) {
    const navigate= useNavigate()
  return (
    <>
    <AppPageMetadata title={metaTitle}/>
    <AppContainer title={pageTitle} type='bottom' fullView>
    <div className='mail-detail'>
    <div className="apps-header">
        <AppIconButton
            className='mail-detail-arrow'
            title={tooltiptitle}
            icon={<BiArrowBack />}
            onClick={() => navigate(-1)}
            />
            <h5 className='mb-0 text-truncate'>{tooltiptitle}</h5>
    </div>
    <div className='apps-content-container isDetailView'>
    <div className='mail-detail-body'>
        {children}
    </div>
    </div>
    </div>
    </AppContainer>
    </>
  )
}
