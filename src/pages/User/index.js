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
        <img src={logo} alt="logo meetpets"/>
        <InfoText>
          <img src={qrcode} alt="qrcode"/>

          <h1>Juliana Martins</h1>
          <div>
            <RiWhatsappLine size={20}/>
            <p>+55 (88) 998221345</p>
          </div>
          <div>
            <RiInstagramLine size={20}/>
            <p>@jumartins</p>
          </div>

        </InfoText>
        <ButtonComponent>Imprimir</ButtonComponent>
        <ButtonComponent>Gerar novo</ButtonComponent>
      </Info>
    </Container>
  )
}

export default User;
