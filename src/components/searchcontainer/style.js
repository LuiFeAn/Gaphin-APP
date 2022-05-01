import styled from 'styled-components';

export const SearchContainer = styled.div`
    
    width: 350px;
    height:350px;
    background: rgba(0, 0, 0, 0.909);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding:20px;
    overflow-y: scroll;
    color:wheat;
    position: absolute;
    left: 0%;
    gap:20px;
    top: 100px;

    @media(max-width:740px){

        width:89.5%;
        overflow-x: hidden;
        height:100vh;
    }

`;