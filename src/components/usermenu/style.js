import styled from 'styled-components';

export const UserMenuContainer = styled.aside`

    width: 250px;
    height: auto;
    transition:1s;
    margin-right:${props=>props.menupos};
    background: rgba(0, 0, 0, 0.909);
    position: absolute;
    right: 0;
    top:100px;
    color:white;
    padding:20px;

    @media(max-width:740px){

        width:90%;
        height:100vh;
        left:0px;
        bottom:0px;
        gap:30px;
        margin-left:${props=>props.menupos};
        margin-top:450px;
    }

`;

export const UserMenuOptions = styled.div`

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap:15px;

    h3{
        margin:15px 0px;
        cursor: pointer;
    }

`;

export const UserMenuIcons = styled.img`

    width:40px;
    border-radius: 100%;
    height:40px;

`;