import React from 'react';
import logo from '../../assets/logo.png';
import ButtonComponent from '../Components/Button';
import { RiWhatsappLine, RiInstagramLine } from 'react-icons/ri';
import qrcode from '../../assets/qrcode.png';

import { 
  Container,
  Info,
  InfoText
} from './styles';


function User() {
  return (
    <Container>
      <Info>
        <a href="/" className="">
          <img src={logo} alt="logo meetpets"/>
        </a>

        <InfoText>
          <img src={qrcode} alt="qrcode"/>

          <h1>Juliana Martins</h1>
          <div>
            <RiWhatsappLine size={20}/>
            <a href="https://web.whatsapp.com/send?phone=5599111112222" target="_blank">
              <p>+55 (88) 998221345</p>
            </a>
          </div>
          <div>
            <RiInstagramLine size={20}/>
            <a href="https://instagram.com/" target="_blank">
              <p>@jumartins</p>
            </a>
          </div>

        </InfoText>
        <ButtonComponent>Imprimir</ButtonComponent>
        <ButtonComponent>Gerar novo</ButtonComponent>
      </Info>
    </Container>
  )
}

export default User;
