import styled from 'styled-components';

export const AppInput = styled.input`

    width:350px;
    height:40px;
    margin:0px 170px;
    border-radius:15px;
    padding:0px 15px;

    @media(max-width:740px){

        width:220px;
        margin:0px;

    }

`;

export const AppTextBox = styled.textarea`
    width: 30%;
    height:400px;
    outline: none;
    resize: none;
    

    @media(max-width:740px){
        width: 80%;
        height:250px;
    }

`;