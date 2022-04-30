import styled from 'styled-components';

export const LoginContainer = styled.div`

    width: 350px;
    height:450px;
    border-radius: 10px;
    border: 2px solid black;
    user-select: none;
    transition:1s;
    background:rgba(255, 255, 255, 0.769);
    padding:10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:10px;

    a{
        text-decoration: none;
        color:black;
    }

    &:hover{
        transform:scale(1.05);
    }
    
    @media(max-width:740px){
        width:280px;
    }

`;

export const LoginInput = styled.input`

    width: 300px;
    height:35px;
    border:none;
    outline: none;
    border-bottom: 2px solid black;
    padding:0px 10px;
    border-radius: 5px;

    @media(max-width:750px){
        width:210px;
    }

`;

export const LoginButton = styled.button`
    width:310px;
    height:35px;
    background:black;
    font-weight: bold;
    border:none;
    cursor:pointer;
    margin:14px 0px;
    border-radius:10px;
    color:white;

    @media(max-width:750px){
        width:210px;
    }

`;

export const LoginOptionsContainer = styled.div`

    display: flex;
    width:300px;
    flex-direction: column;
    align-items: center;
    gap:20px;
    border-radius:5px;
    padding:5px;

    @media(max-width:750px){
        width:210px;
    }

`;
