import * as S from './appStyle';
import Routes from "./routes";
import HeaderComponent from "./components/header";

function App(){
    return (
        <>
            <S.AppContainer>
                <Routes/>
            </S.AppContainer>
        </>
    )

}

export default App;
