import * as S from './style';
import { useNavigate } from 'react-router-dom';
import {userInfoContext} from '../../context/userContext';
import { useContext } from 'react';

const UserMenuComponent = ({menupos})=> {

    const Nav = useNavigate();

    const user = useContext(userInfoContext);

    const handleProfile = ()=> {

        Nav("/profile");
    }

    const handleClickSkip = () =>{
        
        localStorage.removeItem("itoken");
        Nav("/");

    }

    return(
        <S.UserMenuContainer menupos={menupos}>
            <S.UserMenuOptions>
                <S.UserMenuIcons src={`http://192.168.2.108:443/${user.user_pic}`}/>
                <h3 onClick={handleProfile}>Perfil</h3>
            </S.UserMenuOptions>
            <S.UserMenuOptions>
                <S.UserMenuIcons src='https://cdn1.iconfinder.com/data/icons/basic-ui-elements-coloricon/21/46-512.png'/>
               <h3 onClick={handleClickSkip}>Sair</h3>
            </S.UserMenuOptions>
        </S.UserMenuContainer>
    )

}
export default UserMenuComponent