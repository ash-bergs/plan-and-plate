import { Container, NavLink, NavLinkProps } from '@mantine/core';
import styled from 'styled-components';
import { BiDish } from 'react-icons/bi';
import { FiBook } from 'react-icons/fi';

interface CustomNavLinkProps extends NavLinkProps {
  href: string;
}
// using styled-components is an easy way to add things like hover
// these don't come right out-of-the-box like they do with chakra
const StyledNavLink = styled((props: CustomNavLinkProps) => <NavLink {...props} />)`
  &:hover {
    transform: scale(1.07);

    background-color: #abedc6;
  }
`;

const Sidebar = () => (
  <Container bg="#ABEDC6" w="100%" h="100%" p="md">
    <StyledNavLink href="/" label="Plan & Plate" leftSection={<BiDish size="33px" />} />
    <StyledNavLink href="/recipes" label="Recipes" leftSection={<FiBook size="33px" />} />
    <StyledNavLink href="/add" label="Write" leftSection={<FiBook size="33px" />} />
  </Container>
);

export default Sidebar;
