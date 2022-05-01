import { createContext, useState,useEffect } from 'react';
import ClientService from '../service';

export const userInfoContext = createContext();

//Provedor de informações do usuário
const UserProvider = ({children})=>{

    const [user,setUser] = useState();

    useEffect(()=>{
        const getUser = async ()=> {
            const resp = await ClientService.getUser();
            setUser(resp[0]);
        }
        getUser();
    },[user]);
    

    if(user){
        return(
            <userInfoContext.Provider value={user}>
                {children}
            </userInfoContext.Provider>
        )
    }
}

export default UserProvider