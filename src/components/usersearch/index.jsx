import * as S from './style';
import { Link } from 'react-router-dom';

const UserSearchComponent = ({userphoto,username})=> {

    return(
        <S.UserSearchContainer>
            <img src={`http://192.168.2.108:443/${userphoto}`} alt="" />
            <Link to={`/profile/${username}`}>{username}</Link>
        </S.UserSearchContainer>
    )

}

export default UserSearchComponent