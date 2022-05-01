import styled from 'styled-components';

export const ProfileInfosContainer = styled.div`
    width:100%;
    display: flex;
    justify-content: center;
    margin-top:80px;
`;

export const ProfileContainer = styled.div`

    display: flex;
    justify-content: center;
    gap:10px;

    @media(max-width:740px){
        gap:0px;
        flex-direction: column;
        align-items: center;
    }

`;

export const ProfileImg = styled.img`

    width:200px;
    height:200px;
    border-radius:100%;
    
    @media(max-width:740px){
        width:180px;
        height:180px;
    }

`;

export const InfosContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    p{
        inline-size: 450px;
    }

    .update-profile{
        display: flex;
    }
    
    @media(max-width:740px){

        p{
            inline-size: auto;
        }

    }

`;

export const Follow = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    gap:20px;

    .follow-icon{
        display: flex;
        justify-content: center;
        align-items: center;
        gap:7px;
        img{
            width:20px;
            height:20px;
        }
    }

    @media(max-width:740px){
        span{
            font-size:14px;
            inline-size:70px;
        }
    }

`;

export const ChangeButton = styled.button`

    width:150px;
    height:30px;
    cursor: pointer;
    background-color: black;
    color:white;
    border-radius:10px;


`;