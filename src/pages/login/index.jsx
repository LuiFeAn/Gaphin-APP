import * as S from './style';
import LoginFormComponent from "../../components/loginform";

import { useState,useEffect } from 'react';

const LoginPage = () => {

    return(
        <S.LoginPageContainer>
             <LoginFormComponent/>
        </S.LoginPageContainer>
    )
}
export default LoginPage