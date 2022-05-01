import * as S from './style';
import {userInfoContext} from '../../context/userContext';
import { useContext } from 'react';
import ProfileInfosComponent from '../../components/profileinfos';
import UserProvider from '../../context/userContext';
import HeaderComponent from '../../components/header';

const HomePage = ()=> {

    const user = useContext(userInfoContext);
    console.log(user);
    
    return(
        <>
            <HeaderComponent/>
            <ProfileInfosComponent 
            username={user.user_name}
            userbio={user.user_bio}
            user_pic={user.user_pic}
            />
        </>
    )

}

export default HomePage;