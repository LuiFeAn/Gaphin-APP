import * as S from './style';
import ClientService from '../../service';
import SearchContainer from '../searchcontainer';
import { userInfoContext } from '../../context/userContext';
import UserMenuComponent from '../usermenu';
import { useState } from 'react';
import { useContext } from 'react';


const HeaderComponent = () => {

    const user = useContext(userInfoContext);

    const [users,setUsers] = useState();
    const [has,setHas] = useState(false)
    const [click,setClick] = useState(false);
    const [menuPos,setMenuPos] = useState('-500px');

    const handleClick = ()=> {

        if(!click){
            setClick(true);
            setMenuPos("0px")
        }else{
            setClick(false);
            setMenuPos("-500px");
        }
    }
    
    const handleInput = async (event)=> {

        if(event.target.value){

            setHas(true);
            const resp = await ClientService.getUserByName(event.target.value);

            console.log(resp);
            if(resp){
                setUsers(resp);
            }

        }else{

            setHas(false);
        }
    }

    return(
        <S.Header>
            <h1>GRAPHIN</h1>
            <S.HeaderInput onChange={handleInput} placeholder='PESQUISAR'/>
                {has ? <SearchContainer users={users}/> : null}
                <S.HeaderHambIcon onClick={handleClick}>
                    <div></div>
                    <div></div>
                    <div></div>
                </S.HeaderHambIcon>
                {user ?  <S.HeaderUserImg onClick={handleClick} src={`http://192.168.2.108:443/${user.user_pic}`}/> : null}
                {<UserMenuComponent menupos={menuPos}/>}
        </S.Header>
    )

}
export default HeaderComponent