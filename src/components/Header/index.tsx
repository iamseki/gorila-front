import React from 'react';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="CDB Unit Calculator" />
      <strong>CDB Calculator</strong>
    </header>
  </Container>
);

export default Header;
