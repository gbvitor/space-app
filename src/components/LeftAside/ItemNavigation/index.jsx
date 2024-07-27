import { styled } from "styled-components";

const ItemNavegationStyled = styled.li`
    list-style: none;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    text-decoration: none;
    color: ${(props) => (props.$ativo ? "#c98cf1" : "#d9d9d9")};
    display: flex;
    align-items: center;
    gap: 22px;
`;

const ItemNavegation = ({
    children,
    iconeAtivo,
    iconeInativo,
    ativo = false,
}) => {
    return (
        <ItemNavegationStyled $ativo={ativo}>
            <img src={ativo ? iconeAtivo : iconeInativo} alt="" />
            {children}
        </ItemNavegationStyled>
    );
};

export default ItemNavegation;
