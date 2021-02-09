import styled from 'styled-components';

export const Button = styled.button`
  max-width: 290px;
  height: 45px;
  border-radius: 6px;
  background: var(--amarelo-color);
  border-bottom: 5px solid var(--rosa-color);

  text-transform: uppercase;
  color: var(--azul-color);
  font-weight: bold;
  font-size: 15px;

  margin-top: 10px;
  opacity: 1;

  &:hover {
    opacity: 0.8;
  }
`;