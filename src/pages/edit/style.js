import styled from 'styled-components';

export const UpdateContentContainer = styled.section`

    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top:50px;

    img{
        width:180px;
        height:180px;
        border-radius:100%;
    }

    button{
        width:300px;
        height:30px;
        margin-top:60px;
        border-radius:10px;
        color:white;
        background:black;
    }

    .custom-file-upload{
        width:200px;
        height:50px;
        background:blue;
        margin:20px 0px;
        text-align: center;
        border-radius:20px;
        font-weight: bold;
        color:white;
    }
    .file-upload{
        display: none;
    }
    
`;