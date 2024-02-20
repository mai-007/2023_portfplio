import React from 'react';
import styled from '@emotion/styled';
import { val } from './variable.js';

const Footer = () => {
  return (
    <FooterWrap>
      <div>©MEE. portfolio {new Date().getFullYear()}</div>
    </FooterWrap>
  );
};

const FooterWrap = styled.footer`
  font-size: 0.75rem;
  color: ${val.white};
  text-align: center;
  padding: 0.5rem;
  background-color: ${val.black};
`

export default Footer;
