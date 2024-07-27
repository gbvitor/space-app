import styled from "styled-components";
import InputHeader from "../InputHeader";
const HeaderStyle = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 212px;
        height: 42px;
    }
`;
const Header = () => {
    return (
        <HeaderStyle>
            <img src="./imagens/logo.png" alt="logo" />
            <InputHeader />
        </HeaderStyle>
    );
};
export default Header;
