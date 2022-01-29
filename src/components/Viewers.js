import React from 'react'
import styled from "styled-components"

function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" />
        <video loop="loop">
          <source src="/videos/1564674844-disney.mp4" type="video/mp4" />

          </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" />
        
      </Wrap>
      <Wrap>
        <img src="/images/viewers-star.png" />
        
      </Wrap>
      
    </Container>
  )
}

export default Viewers
const Container = styled.div`
    margin-top: 30px;
    display: grid;
    padding: 30px 0px 26px;
    grid-gap: 25px;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    
    
`

const Wrap = styled.div`
border-radius: 10px;
border: 3px solid rgba(249, 249, 249, 0.1);
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
video{
  display: none;
}
img {
    position: relative;
     width: 100%;
     height: 100%;
     oject-fit: cover;
     
 }

 &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, 
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
     transform: scale(1.05);
     border-color: rgba(249, 249, 249, 0.8);
     cursor: pointer;
    
     video {
      position: absolute;
     display: flex;
     
     top: 0;
     left: 0;
     
     width: 100%;
     height: 100%;
     
    }
     
 }



`