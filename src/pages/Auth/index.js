import React from 'react'
import './index.style.less'
import {Card} from 'antd';
import Login from './Login';

export default function SignIn() {
  return (
    <div style={{marginTop:'10%'}}>

    <div className='auth-wrap' key={'wrap'}>
     
    <Card className='auth-card'>
      <div className='auth-main-content'>
        <div className='auth-card-header'>
        <div className="app-logo">
        <img
          src="/images/logo.png"
          style={{ height: "70px", padding: "10px" }}
        />
        </div>
        </div>
        <Login/>
        </div>
        <div className='auth-wel-action'>
            <div className='auth-wel-content'>
              <h2>Welcome to Lavishkeys</h2>
              <p>
               Best Property Management System for managing your Real state
              </p>
            </div>
          </div>
      </Card>
      </div>
    </div>
  )
}
