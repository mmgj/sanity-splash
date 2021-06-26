import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import { useMediaQuery } from 'react-responsive';
import { Box, Flex, Menu, MenuItem, MenuButton } from '@sanity/ui';

const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  text-align: right;
  width: 100%;
  ul {
    list-style-type: none;
    justify-content: flex-end;
    display: flex;
    li {
      margin: 0 0 0 2em;
      display: block;
      a,
      a:visited {
        text-decoration: none;
        color: inherit;
        padding: 0.5em 0.1em;
        padding-top: 10px;
        cursor: pointer;
        &.current {
          border-bottom: 1px solid #aaa;
          &:hover:before {
            visibility: hidden;
          }
        }
      }
      a {
        position: relative;
        color: inherit;
      }
      a:hover {
        color: inherit;
      }
      a:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #aaa;
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.3s ease-in-out 0s;
      }
      a:hover:before {
        visibility: visible;
        background-color: #ddd;
        transform: scaleX(1);
      }
    }
  }
`;

const StyledBurger = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #f03e2f;
  font-size: 26px;
  color: white;
  text-align: center;
  span {
    display: block;
    margin-top: 11px;
    cursor: pointer;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

const StyledMenu = styled(Menu)`
  text-align: center;
  a,
  a:visited {
    text-decoration: none;
    color: inherit;
    padding: 0.5em 0.1em;
    padding-top: 10px;
  }
`;

const NavLink = (props) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => ({
      className: isCurrent ? 'current' : '',
    })}
  />
);

const Nav = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 787px)' });
  const routes = [
    { label: 'Cover letter', route: '/' },
    { label: 'CV', route: 'cv' },
    { label: 'About', route: 'who' },
  ];

  return (
    <Flex paddingY={[4, 5, 6]}>
      <StyledNav>
        {isBigScreen ? (
          <ul>
            {routes.map(({ label, route }) => (
              <li key={`${label}_${route}`}>
                <NavLink to={route}>{label}</NavLink>
              </li>
            ))}
          </ul>
        ) : (
          <MenuButton
            button={
              <StyledBurger>
                <span>&#9776;</span>
              </StyledBurger>
            }
            id='menu-button'
            menu={
              <StyledMenu>
                {routes.map(({ label, route }) => (
                  <MenuItem key={`${label}_${route}`}>
                    <Box padding={3}>
                      <NavLink to={route}>{label}</NavLink>
                    </Box>
                  </MenuItem>
                ))}
              </StyledMenu>
            }
            placement='bottom-start'
          />
        )}
      </StyledNav>
    </Flex>
  );
};

export default Nav;
