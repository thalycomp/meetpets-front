import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import ButtonComponent from '../Components/Button';

import { 
  Container,
  Info,
  Form
} from './styles';


function Main() {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ instagram, setInstagram ] = useState('');
  const [ whatsapp, setWhatsapp ] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name)
  };

  return (
    <Container>
      <Info>
        <img src={logo} alt="logo meetpets"/>
        <h1>Cadastre-se no evento e gere seu <em>QRCODE</em></h1>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <input 
            type="text"
            placeholder="Nome"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <input type="text"
            placeholder="Email"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input type="text"
            placeholder="Instagram"
            required
            onChange={(e) => setInstagram(e.target.value)}
          />
          <input type="number"
            placeholder="WhatsApp"
            required
            onChange={(e) => setWhatsapp(e.target.value)}
          />
          <ButtonComponent type="submit">Cadastrar</ButtonComponent>
         </Form>
      </Info>
    </Container>
  )
}

export default Main;
