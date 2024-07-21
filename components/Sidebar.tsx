import { Container, NavLink, NavLinkProps } from '@mantine/core';
import styled from 'styled-components';
import { BiDish } from 'react-icons/bi';
import { FiBook } from 'react-icons/fi';

// using styled-components is an easy way to add things like hover
// these don't come right out-of-the-box like they do with chakra
const StyledNavLink = styled((props: NavLinkProps) => <NavLink {...props} />)`
  &:hover {
    transform: scale(1.07);
    backgroundcolor: '#fff';
    background-color: #abedc6;
  }
`;

const Sidebar = () => (
  <Container bg="#ABEDC6" w="100%" h="100%" p="md">
    <StyledNavLink label="Plan & Plate" leftSection={<BiDish size="33px" />} />
    <StyledNavLink label="Recipes" leftSection={<FiBook size="33px" />} />
    <StyledNavLink label="Write" leftSection={<FiBook size="33px" />} />
  </Container>
);

export default Sidebar;
