import { NavLink } from 'react-router-dom';
import { HeaderStyled, NavList } from './Header.styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <nav>
        <NavList>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/tweets">Tweets</NavLink>
          </li>
        </NavList>
      </nav>
    </HeaderStyled>
  );
};
