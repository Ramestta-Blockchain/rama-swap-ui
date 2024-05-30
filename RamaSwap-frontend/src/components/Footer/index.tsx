import { useRef } from 'react'
import styled from 'styled-components'
import React from 'react'
import telegram from '../../assets/logo/telegram.svg'
import twitter from '../../assets/logo/twitter.svg'
import discord from '../../assets/logo/discord.svg'
import docs from '../../assets/logo/docs.svg'
import about from '../../assets/logo/about.svg'

const StyledFooter = styled.div`
  /* margin-left: 0.5rem; */
  width: 100%;
  display: flex;
  padding:1.5rem;
  align-items: center;
  justify-content: space-between;
  /* padding-inline: 3rem; */
  border: none;
  text-align: left;
  @media (max-width: 768px) {
    flex-direction: column;
    
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px; /* Add some space between buttons */
`

const Button = styled.button`
  background: #b9b7ef;
  border: none;
  padding: 0;
  cursor: pointer;
  border-radius: 5px;
  overflow: hidden;
  width: 45px;
  height: 45px;
  transition: background-color 0.3s ease;

  &:hover {
    background: #8050df;
  }

  img {
    width: 70%;
    height: 70%;
    object-fit: contain;
  }
`

const StyledText = styled.text`
  font-size: 14px;
  color: #f9f6f6;
  font-weight: bold;
  margin-top: 10px;

  @media (max-width: 768px) {
    text-align: center;
    margin: 20px 0;
  }
`

export default function Footer() {
  const node = useRef<HTMLDivElement>()

  return (
    <StyledFooter ref={node as any}>
      {/* <div> */}
      <StyledText>© 2024 Ramestta Blockchain . | All rights reserved</StyledText>
      <ButtonContainer>
        <Button>
          <a href="https://www.ramestta.com/">
            <img src={about} alt="about" />
          </a>
        </Button>
        <Button>
        <a href="https://t.me/ramestta_blockchain">
            <img src={telegram} alt="Telegram" />
          </a>
        </Button>
        <Button>
        <a href="https://twitter.com/Ramestta">
            <img src={twitter} alt="Twitter" />
          </a>
        </Button>
        <Button>
          <a href="https://discord.com/channels/1080395544385572864/1080395544385572868">
            <img src={discord} alt="Discord" />
          </a>
        </Button>
        <Button>
          <a href="https://docs.ramestta.com/">
            <img src={docs} alt="docs" />
          </a>
        </Button>
      </ButtonContainer>

      {/* </div> */}
    </StyledFooter>
  )
}
