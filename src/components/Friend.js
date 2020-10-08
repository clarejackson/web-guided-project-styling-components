import React from 'react'
import styled from 'styled-components'

// OUTSIDE OF THE FRIEND COMPONENT
// CAPITALIZE THE SC
// DON'T FORGET YOUR SEMICOLONS
const StyledFriend = styled.div`
  color: ${pr => pr.theme.primaryColor};
  font-weight: bold;
  width: 60%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 550px) {
    width: 100%;
  }
  button {
    color: ${pr => pr.theme.tertiaryColor};
  }
  &:hover {
    color: ${pr => pr.theme.secondaryColor};
  }
`

// const Button = styled.button`
//   color: pink;
// `

export default function Friend({ info, action }) {
  return (
    <StyledFriend danger={info.name === 'Josh'}>
      {info.name}
      <button onClick={() => action(info.id)}>
        See details
      </button>
    </StyledFriend>
  )
}
