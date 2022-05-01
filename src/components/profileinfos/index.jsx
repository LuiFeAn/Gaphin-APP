import * as S from './style';
import { useNavigate } from 'react-router-dom';
import {userInfoContext} from '../../context/userContext';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';

const ProfileInfosComponent = ({username,userbio,user_pic})=> {

    const user = useContext(userInfoContext);

    const {name} = useParams();
    const Nav = useNavigate();

    return(
        <S.ProfileInfosContainer>
           <S.ProfileContainer>
                <S.ProfileImg onClick={(e)=>console.log(e)} src={`http://192.168.2.108:443/${user_pic}`}/>
                <S.InfosContainer>
                    <div className='update-profile'>
                        <h1>{username}</h1>
                        {username != name ? <S.ChangeButton onClick={()=>Nav("/edit")}>Editar Perfil</S.ChangeButton> : <S.ChangeButton>Seguir</S.ChangeButton>}
                    </div>
                    <S.Follow>
                        <div className='follow-icon'>
                            <img src="http://cdn.onlinewebfonts.com/svg/img_562621.png" alt="" />
                            <span><strong>Publicações 0</strong></span>
                        </div>
                        <div className='follow-icon'>
                            <img src="http://cdn.onlinewebfonts.com/svg/img_193993.png" alt="" />
                            <span><strong>Seguindo 0</strong></span>
                        </div>
                        <div className='follow-icon'>
                            <img src="https://i.pinimg.com/originals/91/42/77/9142779445ebc295c746a5fb24911ff8.png" alt="" />
                            <span><strong>Seguidores 0</strong></span>
                        </div>
                    </S.Follow>
                    <p style={{fontSize:20}}>{userbio}</p>
                </S.InfosContainer>
           </S.ProfileContainer>
        </S.ProfileInfosContainer>
    )

}
export default ProfileInfosComponent