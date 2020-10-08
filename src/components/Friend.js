import React from 'react'
import styled from 'styled-components'

// OUTSIDE OF THE FRIEND COMPONENT
// CAPITALIZE THE SC
// DON'T FORGET YOUR SEMICOLONS
const StyledFriend = styled.div`
  opacity: 0;
  color: ${pr => pr.danger ? pr.theme.dangerColor : pr.theme.primaryColor};
  font-weight: ${pr => pr.bold ? 'bold' : 'initial'};
  width: 60%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 550px) {
    width: 100%;
  }
  button {
    color: ${pr => pr.theme.tertiaryColor};
    &:hover {
      transform: scale(2);
      transition: all 0.5s ease-in-out;
    }
    transition: all 0.5s ease-in-out;
  }
  &:hover {
    color: ${pr => pr.theme.secondaryColor};
    background-color: cyan;
    transition: all 0.5s ease-in-out;
  }
  transition: all 0.5s ease-in-out;
`

// const Button = styled.button`
//   color: pink;
// `

export default function Friend(props) {
  const { bold, info, action } = props
  return (
    <StyledFriend bold={bold} danger={info.name === 'Josh'}>
      {info.name}
      <button onClick={() => action(info.id)}>
        See details
      </button>
    </StyledFriend>
  )
}
