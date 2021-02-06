import React from 'react';
import logo from '../../assets/logo.png';
import ButtonComponent from '../Components/Button';
import { 
  Container,
  Info,
  Form
} from './styles';


function Main() {
  return (
    <Container>
      <Info>
        <img src={logo} alt="logo meetpets"/>
        <h1>Cadastre-se no evento e gere seu <em>QRCODE</em></h1>
        <Form>
          <input 
            type="text"
            placeholder="Nome"
            required
          />
          <input type="text"
            placeholder="Email"
            type="email"
            required
          />
          <input type="text"
            placeholder="Instagram"
            required
          />
          <input type="number"
            placeholder="WhatsApp"
            required
            max="10"
          />
        </Form>
        <ButtonComponent>Cadastrar</ButtonComponent>
      </Info>
    </Container>
  )
}

export default Main;
