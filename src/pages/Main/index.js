import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import ButtonComponent from '../Components/Button';
import Api from '../../services/Api';
import history from '../../services/history';
import InputMask from "react-input-mask";

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
  const [ error, setError ] = useState(false);
  const [ idUser, setIdUser ] = useState('');
  const [ loading, setLoading ] = useState(false);

  const handleNavigate = () => {
    history.push(`/user/${idUser}`);
    window.location.reload();
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);

      const reqData = {
        nome: name,
        email,
        instagram,
        whatsapp
      };

      const response = await Api.post('/', reqData);
      console.log(response);
      if(response.data.error) {
        setError(true);
        return
      }

      setIdUser(response.data);
      setLoading(false);
    }catch(err) {
      setError(true);
    }
  };

  return (
    <Container>
      <Info>
        <a href="/" className="">
          <img src={logo} alt="logo meetpets"/>
        </a>
        {idUser && (
          <>
          <h1>Cadastro efetuado com sucesso!</h1>
          <ButtonComponent onClick={() => handleNavigate()}>Ver QRCODE</ButtonComponent>
          </>
        )}

        {!idUser && (
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
            <InputMask 
              mask="(88)99999-9999"
              placeholder="WhatsApp"
              required
              onChange={(e) => setWhatsapp(e.target.value)}
            />
            {!loading && <ButtonComponent type="submit">Cadastrar</ButtonComponent>}
            {loading && <h1>Carregando..</h1>}
          </Form>
          </>
        )}
      </Info>
    </Container>
  )
}

export default Main;
