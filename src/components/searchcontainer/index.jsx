import * as S from './style';
import UserSearchComponent from '../usersearch';

const SearchContainer = ({users})=> {
    
    if(users){
        console.log(users);
        return(
        
            <S.SearchContainer>
                {users.map((user)=>(
                    <UserSearchComponent userphoto={user.user_pic} username={user.user_name}/>
                ))}
            </S.SearchContainer>
            
        )
    }

}

export default SearchContainer