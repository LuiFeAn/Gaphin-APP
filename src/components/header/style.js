import styled from 'styled-components';

export const Header = styled.header`

    width: 100%;
    height:40px;
    background: white;
    border-bottom: 1px solid black;
    display: flex;
    transition:1s;
    align-items: center;
    gap:20px;
    padding: 30px 0px 30px 0px;
    position: fixed;
    top:0px;

    h1{
        margin:0px 50px;

        @media(max-width:740px){
            margin:0px;
        }
    }

`;

export const HeaderInput = styled.input`

    width:250px;
    height:40px;
    margin:0px 170px;
    border-radius:15px;
    padding:0px 15px;

    @media(max-width:740px){
        width:130px;
        margin:0px;
    }

`;

export const HeaderUserImg = styled.img`

    width:50px;
    height:50px;
    cursor: pointer;
    margin:0px 750px;
    border-radius:100%;

    @media(max-width:740px){

        display: none;
        
    }

`;

export const HeaderHambIcon = styled.div`

    display: flex;
    flex-direction: column;
    gap:6px;
    position:absolute;
    right:10px;

    div{
        width: 30px !important;
        height: 10px !important;
        background:black;
    }

    @media(min-width:740px){
        display: none;
    }

`;