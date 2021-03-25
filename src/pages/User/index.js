import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import ButtonComponent from '../Components/Button';
import { RiWhatsappLine, RiInstagramLine } from 'react-icons/ri';
import qrcode from '../../assets/qrcode.png';
import Api from '../../services/Api';

import { 
  Container,
  Info,
  InfoText,
  ContainerButton
} from './styles';

function User(props) {
  const [user, setUser] = useState([]);
  const [wsp, setWsp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fechApi = async () => {
      setError(false);
      setLoading(true);

      await getUserApi();

      setLoading(false);
    }
    fechApi();
  }, []);
  
  const getUserApi = async () => {
    try {
  
      const id = props.match.params.id;

      const response = await Api.get(`/${id}`);

      const responseQRCODE = await Api.get(`/qr/${id}`);

      const imageURL = responseQRCODE.config.baseURL + responseQRCODE.config.url;

      if(response.data.error) {
        setError(true);
        return
      }
      const {
        whatsapp,
        instagram,
        email,
        nome,
      } = response.data;

      const wpRemoveMask = whatsapp.replace(/\D+/g, '');
      const instaRemoveMask = instagram.replace('@', '');
      
      const newData = {
        whatsappMask: whatsapp,
        instagram: instaRemoveMask,
        email,
        nome,
        imageURL
      };

      setWsp(wpRemoveMask)
      setUser(newData);
        
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
        {error ? <h1>Cadastro não encontrado</h1> : (<>
        {loading ? <h1>Carregando..</h1> : (
          <>
          <InfoText>
            <img src={user.imageURL} alt="qrcode"/>

            <h1>{user.nome}</h1>
            <div>
              <RiWhatsappLine size={20}/>
              <a href={`https://web.whatsapp.com/send?phone=${wsp}`} target="_blank">
                <p>{user.whatsappMask}</p>
              </a>
            </div>
            <div>
              <RiInstagramLine size={20}/>
              <a href={`https://instagram.com/${user.instagram}`}target="_blank">
                <p>@{user.instagram}</p>
              </a>
            </div>

          </InfoText>
          <ContainerButton>
            <ButtonComponent>Imprimir</ButtonComponent>
            <Link  to="/">
              <ButtonComponent>Gerar novo</ButtonComponent>
            </Link>
          </ContainerButton>
          </>
        )}
        </>
        )}
      </Info>
    </Container>
  )
}

export default User;
