import React from 'react';

//styles
import { FooterLayout, FooterContent, FooterBottomText, FooterIcons, FooterButtons } from './FooterElements';

//icons
import { ImFacebook, ImInstagram, ImTwitter, ImYoutube } from 'react-icons/im';

const Footer = () => {
  return (
    <FooterLayout>

      <FooterContent>

        <FooterIcons>
          <ImFacebook />
          <ImInstagram />
          <ImTwitter />
          <ImYoutube />
        </FooterIcons>

        <FooterButtons>
          <a href="#">Términos de uso</a>
          <a href="#">Política de Privacidad</a>
          <a href="#">Gestión de cookies</a>
        </FooterButtons>

      </FooterContent>

      <FooterBottomText>&copy; 1998 - 2023 ElPibeServer - Todos los derechos reservados</FooterBottomText>
    </FooterLayout>
  );
};

export default Footer;
