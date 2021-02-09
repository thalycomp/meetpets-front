import React from 'react'

import { Button } from './styles';

function ButtonComponent({ children, onClick }) {
  return (
    <Button onClick={onClick}>{children}</Button>
  )
}

export default ButtonComponent;
