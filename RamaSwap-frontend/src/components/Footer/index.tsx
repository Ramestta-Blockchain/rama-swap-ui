import { useRef } from 'react'
import styled from 'styled-components'
import React from 'react'
import telegram from '../../assets/logo/telegram.svg'
import twitter from '../../assets/logo/twitter.svg'
import discord from '../../assets/logo/discord.svg'
import docs from '../../assets/logo/docs.svg'
import about from '../../assets/logo/about.svg'

const StyledFooter = styled.div`
  margin-left: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-inline: 3rem;
  border: none;
  text-align: left;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 25px; /* Add some space between buttons */
`

const Button = styled.button`
  background: #e3e1eb;
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
          <a href="https://ramascan.com/">
            <img src={about} alt="about" />
          </a>
        </Button>
        <Button>
          <img src={telegram} />
        </Button>
        <Button>
          <img src={twitter} />
        </Button>
        <Button>
          <a href="https://discord.gg/EwFs3Pp">
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
