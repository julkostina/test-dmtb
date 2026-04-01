import { HeaderContainer, Logo, LinkContainer, FlexContainer } from "../styles";

export default function Header() {
  return (
    <HeaderContainer color="custom">
      <Logo to="/">Search movies service</Logo>
      <FlexContainer>
        <LinkContainer to="/">Home</LinkContainer>
        <LinkContainer to="/watchlist">Watchlist</LinkContainer>
      </FlexContainer>
    </HeaderContainer>
  );
}
