import * as S from './style';
import { Link } from 'react-router-dom';

const LoginFormComponent = () => {

    return(
        <S.LoginContainer>
            <h1>GRAPHIN</h1>
            <span>Email</span>
            <S.LoginInput type="email"/>
            <span>Senha</span>
            <S.LoginInput type="password"/>
            <S.LoginButton>ENTRAR</S.LoginButton>
           <S.LoginOptionsContainer>
                <span><strong><Link to="/algumacoisa">Cadastre-se</Link></strong></span>
                <span><Link to="/algumacoisa">Esqueceu a senha?</Link></span>
           </S.LoginOptionsContainer>
        </S.LoginContainer>
    )

}
export default LoginFormComponent;