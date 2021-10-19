import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #001d46;
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  color: #fff;
  text-align: center;
`;

const Footer = () => {
  return (
    <Container>
      <p>Copyright &copy; Alpha Square Partners. All right reserved</p>
    </Container>
  );
};

export default Footer;