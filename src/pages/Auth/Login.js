import React from 'react'
import { useNavigate} from 'react-router-dom';
import {useIntl} from 'react-intl';
import {Button, Checkbox, Form, Input} from 'antd';
import {useAuthMethod} from '../../utility/helpers/AuthHooks'
import IntlMessages from '../../utility/IntlMessages';

export default function Login() {
    const navigate = useNavigate();
  const {signInUser} = useAuthMethod();

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const onGoToForgetPassword = () => {
    navigate('/forget-password', {tab: 'jwtAuth'});
  };

  function onRememberMe(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  const {messages} = useIntl();
  return (
    <div className='sign'>
    <div className='sign-content'>
      <Form
        className='sign-form'
        name='basic'
        initialValues={{
          remember: true,
          username: 'bob',
          password: 'Pa$$w0rd',
        }}
        onFinish={signInUser}
        onFinishFailed={onFinishFailed}>
        <Form.Item
          name='username'
          className='form-field'
          rules={[{required: true, message: 'Please input your Username!'}]}>
          <Input placeholder={messages['loginemail']} />
        </Form.Item>

        <Form.Item
          name='password'
          className='form-field'
          rules={[{required: true, message: 'Please input your Password!'}]}>
          <Input.Password placeholder={messages['loginpassword']} />
        </Form.Item>

        <div className='rememberMe'>
          <Checkbox onChange={onRememberMe}>
            <IntlMessages id='rememberme' />
          </Checkbox>

          <span className='sign-link' onClick={onGoToForgetPassword}>
            <IntlMessages id='forgetpassword' />
          </span>
        </div>

        <div className='form-btn-field'>
          <Button type='primary' htmlType='submit' className='sign-btn'>
            <IntlMessages id='loginbtn' />
          </Button>
        </div>

        {/* <div className='form-field-action'>
          <span className='sign-text-grey'>
            <IntlMessages id='common.dontHaveAccount' />
          </span>
          <Link to='/signup' className='underlineNone colorTextPrimary'>
            <IntlMessages id='common.signup' />
          </Link>
        </div> */}
      </Form>
    </div>
  </div>
  )
}
