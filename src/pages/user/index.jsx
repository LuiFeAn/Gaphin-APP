import * as S from './style';
import { useNavigate } from "react-router-dom";
import HeaderComponent from "../../components/header";
import ProfileInfosComponent from '../../components/profileinfos';
import ClientService from '../../service';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import NotFoundPage from '../404';

const UserPage = ()=> {
    
    const {name} = useParams();
    const Nav = useNavigate();
    const [user,setUser] = useState();

    useEffect(()=>{
        
        const getUser = async () => {

            const resp = await ClientService.getUserByName(name);
            setUser(resp[0]);
        }
        getUser();
    },[user])
    
    if(user){
        return(

           <S.UserPageContainer>
                <HeaderComponent/>
                <ProfileInfosComponent user_pic={user.user_pic} username={user.user_name} userbio={user.user_bio}/>
           </S.UserPageContainer>
        )
    }else{
        
        return <NotFoundPage/>
    }

}

export default UserPage;