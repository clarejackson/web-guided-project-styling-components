import React from 'react'
import styled from 'styled-components'

// OUTSIDE OF THE FRIEND COMPONENT
const StyledFriend = styled.div``


export default function Friend({ info, action }) {
  return (
    <div className='friend'>
      {info.name}
      <button onClick={() => action(info.id)}>
        See details
      </button>
    </div>
  )
}
