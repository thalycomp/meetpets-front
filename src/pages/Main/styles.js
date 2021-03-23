import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const Info = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  padding: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    color: var(--branco-color);
    font-size: 20px;
    margin: 0px 20px 20px 20px;
  }

  em {
    font-style: normal;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 25px;
  width: 70%;

  input {
    margin: 4px 0px 4px 0px;
    border: 3px solid var(--amarelo-color);
    border-radius: 6px;
    background: none;
    padding: 14px;
    
    color: var(--branco-color);

    &::placeholder {
      color: var(--branco-color);
    }
  }

  h1 {
    color: var(--branco-color);
    font-size: 20px;
    margin-top: 20px;
    text-align: center;
  }
`;