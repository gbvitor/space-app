import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import LeftAside from "./components/LeftAside";
import Banner from "./components/Banner";

const ContainerStyled = styled.div`
   width: 100%;
   min-height: 100vh;
   position: relative;
   display: flex;
   flex-direction: column;
   flex-grow: 1;
`;
const FundoGradiente = styled.div`
   background: linear-gradient(
      174.61deg,
      #041833 4.16%,
      #04244f 48%,
      #154580 96.76%
   );
`;

function App() {
   return (
      <FundoGradiente>
         <ContainerStyled>
            <Header />
            <GlobalStyles />
            <LeftAside />
            <Banner />
         </ContainerStyled>
      </FundoGradiente>
   );
}

export default App;
