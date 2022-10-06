import React from 'react'
import styled from 'styled-components'

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`

const AddContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`

const Counter = ({ handleQuantity, quantity, text = 'Adult', price }) => {
  return (
    <AddContainer>
      <div onClick={() => handleQuantity('dec')}>-</div>
      <Amount>{quantity}</Amount>
      <div onClick={() => handleQuantity('inc')}>+</div>
      <div>{text}</div>
      <Price>$ {price}</Price>
    </AddContainer>
  )
}

export default Counter
