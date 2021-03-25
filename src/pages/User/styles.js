import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;
export const ContainerButton = styled.div`
  margin: 25px;
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-top: 0;

  a {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const Info = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  padding: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  width: 100%;

  h1 {
    color: var(--branco-color);
    font-size: 20px;
  }

  em {
    font-style: normal;
  }
`;


export const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  height: 48vh;
  padding: 20px;

  align-items: center;
  justify-content: space-between;
  
  color: var(--branco-color);
  margin-bottom: 20px;
  
  div { 
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    width: 71%;

    p {
      margin-left: 10px;
    }
  }

  img {
    margin-bottom: 30px;
    max-width: 70%;
  }
  h1 {
    color: var(--branco-color);
    font-size: 20px;
  }
`;