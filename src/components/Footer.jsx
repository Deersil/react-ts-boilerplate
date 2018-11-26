import React from 'react';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';

const FooterWrapper = styled(Grid)`
  background: #c3c3c3;
  padding: 0 150px;
`;

const Footer = () => (
  <FooterWrapper container spacing={24}>
    <p>Footer</p>
  </FooterWrapper>
);
export default Footer;
