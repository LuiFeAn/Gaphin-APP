import * as S from './style';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import ClientService from '../../service/';
import { useNavigate } from 'react-router-dom';

const LoginFormComponent = () => {
    
    const Nav = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [msg,setMsg] = useState('');

    const handleEmail = event => setEmail(event.target.value);
    const handlePassword = event => setPassword(event.target.value);

    const handleClickButton = async ()=> {

        if(email &&  password){

            const resp = await ClientService.Login(email,password);
            
            if(resp.error){
                return setMsg(resp.error);
            }

           localStorage.setItem("itoken",resp.token);
           Nav("/profile");


        }else{
            setMsg("Preencha todos os campos!");
        }

    }

    return(
        <S.LoginContainer>
            <h1>GRAPHIN</h1>
            <h3>LOGIN</h3>
            <S.LoginInput placeholder='Email' value={email} onChange={handleEmail} type="email"/>
            <S.LoginInput placeholder='Senha' value={password} onChange={handlePassword} type="password"/>
            {<span>{msg}</span>}
            <S.LoginButton onClick={handleClickButton}>ENTRAR</S.LoginButton>
           <S.LoginOptionsContainer>
                <span><strong><Link to="/register">Cadastre-se</Link></strong></span>
                <span><Link to="/algumacoisa">Esqueceu a senha?</Link></span>
           </S.LoginOptionsContainer>
        </S.LoginContainer>
    )

}
export default LoginFormComponent;