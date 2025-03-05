// src/components/Navigation.jsx
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.nav`
  background: #4e4a42;
  padding: 1rem;
  display: flex;
  justify-content: center;
  top: 0;
  position: sticky;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 1rem;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  float: center;

  &:hover {
    text-decoration: underline;
    transition: 0.3s;
  }
`;

const Navigation = () => (
  <Nav>
    <NavList>
      <NavItem>
        <Link href="/" passHref>
          <NavLink>Home</NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/science" passHref>
          <NavLink>Science</NavLink>
        </Link>
      </NavItem>
    </NavList>
  </Nav>
);

export default Navigation;
