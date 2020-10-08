import React from 'react'
import styled from 'styled-components'

// OUTSIDE OF THE FRIEND COMPONENT
// CAPITALIZE THE SC
// DON'T FORGET YOUR SEMICOLONS
const StyledFriend = styled.div`
  color: red;
  font-weight: bold;
  width: 60%;
  display: flex;
  justify-content: space-between;

  &:hover {
    color: green;
  }
`

const Button = styled.button`
  color: pink;
`

export default function Friend({ info, action }) {
  return (
    <StyledFriend>
      {info.name}
      <button onClick={() => action(info.id)}>
        See details
      </button>
    </StyledFriend>
  )
}
