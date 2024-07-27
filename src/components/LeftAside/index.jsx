import styled from "styled-components";
import ItemNavegation from "./ItemNavigation";

const NavStyled = styled.nav`
    padding: 0;
    margin: 0;
    width: 212px;
`;

const LeftAside = () => {
    return (
        <aside>
            <nav>
                <NavStyled>
                    <ItemNavegation
                        iconeAtivo="/icones/home-ativo.png"
                        iconeInativo="/icones/home-inativo.png"
                        ativo={true}
                    >
                        Inicio
                    </ItemNavegation>
                    <ItemNavegation
                        iconeAtivo="/icones/mais-vistas-ativo.png"
                        iconeInativo="/icones/mais-vistas-inativo.png"
                    >
                        Mais Vistas
                    </ItemNavegation>
                    <ItemNavegation
                        iconeAtivo="/icones/mais-curtidas-ativo.png"
                        iconeInativo="/icones/mais-curtidas-inativo.png"
                    >
                        Mais Curtidas
                    </ItemNavegation>
                    <ItemNavegation
                        iconeAtivo="/icones/novas-ativo.png"
                        iconeInativo="/icones/novas-inativo.png"
                    >
                        Novas
                    </ItemNavegation>
                    <ItemNavegation
                        iconeAtivo="/icones/surpreenda-me-ativo.png"
                        iconeInativo="/icones/surpreenda-me-inativo.png"
                    >
                        Surpreenda-me
                    </ItemNavegation>
                </NavStyled>
            </nav>
        </aside>
    );
};
export default LeftAside;
