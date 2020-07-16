import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const GifStyled = styled.div`
    ${tw `text-center text-white font-medium`}
      
    img {
        ${tw`p-5 w-full`}
    }
`

const Gif = ({title, id, url}) => {
    return (
        <GifStyled>
            <h4>{title}</h4>
            <small>{id}</small>
            <img alt={title} src={url}></img>
        </GifStyled>
    )
}

export default Gif
