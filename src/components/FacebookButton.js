import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import LoaderButton from './LoaderButton';

function waitForInit() {
  return new Promise((res, rej) => {
    const hasFbLoaded = () => {
      if (window.FB) {
        res();
      } else {
        setTimeout(hasFbLoaded, 300);
      }
    };
    hasFbLoaded();
  });
}

export default function FacebookButton(props) {
  const [isLoading, setisLoading] = useState(false);

  useEffect( () => {
    waitForInit();
  }, []);

  function handleError(error, number){
    console.log(error);
  };

  async function handleResponse(data) {
    const { email, accessToken: token, expiresIn } = data;
    const expires_at = expiresIn * 1000 + new Date().getTime();
    const user = { email };

    setisLoading(true);

    try {
      const response = await Auth.federatedSignIn(
        'facebook',
        { token, expires_at },
        user
      );
      setisLoading(false);
      props.onLogin(response);
    } catch(e) {
      setisLoading(false);
      handleError(e, 1);
    }
  }

  function statusChangeCallback(response){
    if (response.status === 'connected') {
      handleResponse(response.authResponse);
    } else {
      handleError(response);
    }
  };

  function checkLoginState(){
    window.FB.getLoginStatus(statusChangeCallback);
  };

  function handleClick(){
    window.FB.login(checkLoginState, {scope: 'public_profile, email'});
  };

  return(
    <LoaderButton
    block
    bsSize='large'
    bsStyle='primary'
    className='FacebookButton'
    onClick={handleClick}
    isLoading={isLoading}
    > Login with Facebook
      </LoaderButton>
  );
}