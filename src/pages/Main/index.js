import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import ButtonComponent from '../Components/Button';
import Api from '../../services/Api';
import history from 'history';

import { 
  Container,
  Info,
  Form
} from './styles';
import { createBrowserHistory } from 'history';


function Main() {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ instagram, setInstagram ] = useState('');
  const [ whatsapp, setWhatsapp ] = useState('');
  const [ error, setError ] = useState(false);
  const [ idUser, setIdUser ] = useState('');

  const history = createBrowserHistory();

  const handleNavigate = () => {
    console.log('entrou')
    history.push(`/user/${idUser}`);
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const reqData = {
        name,
        email,
        instagram,
        whatsapp
      };

      const response = await Api.post('/', reqData);

      if(response.data.error) {
        setError(true);
      }

      setIdUser(response);

    }catch(err) {
      console.log('err');
    }
  };

  return (
    <Container>
      <Info>
        <a href="/" className="">
          <img src={logo} alt="logo meetpets"/>
        </a>
        {setIdUser && (
          <>
          <h1>Cadastro efetuado com sucesso!</h1>
          <ButtonComponent onClick={() => handleNavigate()}>Ver QRCODE</ButtonComponent>
          </>
        )}

        {!setIdUser && (
          <>
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
          </>
        )}
      </Info>
    </Container>
  )
}

export default Main;
