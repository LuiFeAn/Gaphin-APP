import * as S from './style';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import ClientService from '../../service/';
import { useNavigate } from 'react-router-dom';

const RegisterFormComponent = () => {
    
    const Nav = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const [msg,setMsg] = useState('');

    const handleEmail = event => setEmail(event.target.value);
    const handlePassword = event => setPassword(event.target.value);
    const handleName = event => setName(event.target.value);

    const handleClickButton = async ()=> {

        if(email && password && name){

            const resp = await ClientService.register(name,email,password);
            setMsg(resp.msg);
            setEmail('');
            setPassword('');
            setName('');

        }else{

            setMsg("Preencha todos os campos !");
        }
    }

    return(
        <S.LoginContainer>
            <h1>GRAPHIN</h1>
            <h3>CADASTRO</h3>
            <S.LoginInput placeholder='Email' value={email} onChange={handleEmail} type="email"/>
            <span>Senha</span>
            <S.LoginInput placeholder='Senha' value={password} onChange={handlePassword} type="password"/>
            <S.LoginInput placeholder='Nome Completo' value={name} onChange={handleName}/>
            {msg}
            <S.LoginButton onClick={handleClickButton}>CADASTRAR</S.LoginButton>
        </S.LoginContainer>
    )

}
export default RegisterFormComponent;