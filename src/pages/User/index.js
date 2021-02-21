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
  InfoText
} from './styles';

function User(props) {
  const [user, setUser] = useState([]);
  const [wsp, setWsp] = useState('');

  useEffect(() => {
    getUserApi();
  }, []);
  
  const getUserApi = async () => {
    try {
  
      const id = props.match.params.id;

      const response = await Api.get(`/${id}`);

      const responseQRCODE = await Api.get(`/qr/${id}`);
      console.log(responseQRCODE);

      if(response.data.error) {
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
      console.log(wpRemoveMask);
      const newData = {
        whatsappMask: whatsapp,
        instagram: instaRemoveMask,
        email,
        nome 
      };
      //6031b70f2aaec2001509be87
      setWsp(wpRemoveMask)
      setUser(newData);
        
    }catch(err) {
  
    }
  };

  return (
    <Container>
      <Info>
        <a href="/" className="">
          <img src={logo} alt="logo meetpets"/>
        </a>

        <InfoText>
          <img src={user.qrcoresponseQRCODE} alt="qrcode"/>

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
        <ButtonComponent>Imprimir</ButtonComponent>
        <ButtonComponent>Gerar novo</ButtonComponent>
      </Info>
    </Container>
  )
}

export default User;
