import styled from 'styled-components';

export const Button = styled.button`
  width: 250px;
  height: 45px;
  border-radius: 6px;
  background: var(--amarelo-color);
  border-bottom: 5px solid var(--rosa-color);

  text-transform: uppercase;
  color: var(--azul-color);
  font-weight: bold;
  font-size: 15px;

  margin: 10px;
  opacity: 1;

  &:hover {
    opacity: 0.8;
  }
`;