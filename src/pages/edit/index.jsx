import * as S from './style';
import HeaderComponent from '../../components/header';
import { AppInput,AppTextBox } from '../../components/input/style';
import ClientService from '../../service';
import { useState } from 'react';

const EditPage = ()=> {

    const [msg,setMsg] = useState('');
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [photo,setPhoto] = useState('');
    const [bio,setBio] = useState('');

    const handleName = event => setName(event.target.value);
    const handleBio = event => setBio(event.target.value);
    const handleEmail = event => setEmail(event.target.value);
    const handlePassword = event => setPassword(event.target.value);

    const handlePhoto = (event)=> {
        
        setPhoto(event.target.files[0]);
    }


    const handleClick = async ()=> {

        const resp = await ClientService.updateUser(name,email,password,bio,photo);

        if(resp.error){
            return setMsg(resp.error);
        }

        setMsg(resp.msg);
    }


    return(
        <>
            <HeaderComponent/>
            <S.UpdateContentContainer>
            {photo ? <img src={URL.createObjectURL(photo)} alt="" /> : null}
            <h3>Alterar Nome</h3>
            <AppInput value={name} onChange={handleName}/>
            <h3>Alterar Email</h3>
            <AppInput value={email} onChange={handleEmail}/>
            <h3>Alterar Senha</h3>
            <AppInput value={password} onChange={handlePassword}/>
            <label class="custom-file-upload">
                <input onChange={handlePhoto} className='file-upload' type="file"/>
                <p>Alterar Foto</p>
            </label>
            <h3>Alterar Bio</h3>
            <AppTextBox value={bio} onChange={handleBio}/>
            {msg}
            <button onClick={handleClick}>Atualizar</button>
    </S.UpdateContentContainer>
        </>
    )

}
export default EditPage