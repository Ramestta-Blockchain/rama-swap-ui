import { ChainId } from '@uniswap/sdk'
import React from 'react'
import { isMobile } from 'react-device-detect'
import { Text } from 'rebass'

import styled from 'styled-components'
import Logo from '../../assets/logo/logo.png'
import LogoDark from '../../assets/logo/logo.png'

// import Logo from '../../assets/svg/logo.svg'
// import LogoDark from '../../assets/svg/logo_white.svg'
// import Wordmark from '../../assets/svg/wordmark.svg'
// import WordmarkDark from '../../assets/svg/wordmark_white.svg'
import { useActiveWeb3React } from '../../hooks'
import { useDarkModeManager } from '../../state/user/hooks'
import { useETHBalances } from '../../state/wallet/hooks'

import { YellowCard } from '../Card'
import Settings from '../Settings'

import Row from '../Row'
import Web3Status from '../Web3Status'
import { Link } from 'react-router-dom'
import { PersonalFont, FontStyles } from '../Styles/globalStyles'
// import GlobalStyle from '../Styles/globalStyles'


// import VersionSwitch from './VersionSwitch'

const HeaderFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  top: 0;
  position: absolute;
  // border-bottom:solid black 2px;
  // background-color: #ffffff;
  z-index: 2;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    padding: 12px 0 0 0;
    width: calc(100%);
    position: relative;
  `};
`

const HeaderElement = styled.div`
  display: flex;
  align-items: center;
`

const HeaderElementWrap = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin-top: 0.5rem;
`};
`

const Title = styled.a`
  display: flex;
  align-items: center;
  pointer-events: auto;

  :hover {
    cursor: pointer;
  }
`

const TitleText = styled(Row)`
  width: fit-content;
  white-space: nowrap;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    display: none;
  `};
`

const AccountElement = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme, active }) => (!active ? theme.bg1 : theme.bg3)};
  border-radius: 12px;
  white-space: nowrap;
  width: 100%;

  :focus {
    border: 1px solid blue;
  }
`

const TestnetWrapper = styled.div`
  white-space: nowrap;
  width: fit-content;
  margin-left: 10px;
  pointer-events: auto;
`

const NetworkCard = styled(YellowCard)`
  width: fit-content;
  margin-right: 10px;
  border-radius: 12px;
  padding: 8px 12px;
`

const UniIcon = styled.div`
  transition: transform 0.3s ease;
  :hover {
    transform: rotate(-5deg);
  }
  ${({ theme }) => theme.mediaWidth.upToSmall`
    img { 
      width: 4.5rem;
    }
  `};
`

const HeaderControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    flex-direction: row;
    align-items: flex-end;
  `};
`

const BalanceText = styled(Text)`
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    display: none;
  `};
`
const Rowbetween = styled('div')`
  align-items: 'flex-start';
  padding: 1rem 1.5rem;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    gap: 1rem;
    justify-content: center;
  `};
`

const NETWORK_LABELS: { [chainId in ChainId]: string } = {
  [ChainId.RAMA]: 'Ramestta',
  [ChainId.TRAMA]: 'Pingaksha'
}

export default function Header() {
  const { account, chainId } = useActiveWeb3React()

  const userEthBalance = useETHBalances(account ? [account] : [])?.[account ?? '']
  const [isDark] = useDarkModeManager()

  return (
    <HeaderFrame>
      <Rowbetween

      // padding="1rem 1rem 0 1rem"
      >
        <HeaderElement>
          <Title href=".">
            <UniIcon>
              <img
                style={{ width: '40px', height: '40px', marginTop: '2px' }}
                src={isDark ? LogoDark : Logo}
                alt="logo"
              />
            </UniIcon>
            <TitleText>
              {/* <img style={{ marginLeft: '4px', marginTop: '4px' }} src={isDark ? WordmarkDark : Wordmark} alt="logo" /> */}
            </TitleText>
          </Title>
          <Link
            style={{
              fontSize: '25px',
              marginLeft: '5px',
              fontFamily: 'Personal, sans-serif',
              color: isDark ? 'white' : 'white',
              textDecoration: 'none'
              // font-family: personal !important;
            }}
            to={''}
          >
            <FontStyles />
            <PersonalFont>RamaSwap</PersonalFont>
          </Link>
        </HeaderElement>
        <HeaderControls>
          <HeaderElement>
            <TestnetWrapper>
              {!isMobile && chainId && NETWORK_LABELS[chainId] && <NetworkCard>{NETWORK_LABELS[chainId]}</NetworkCard>}
            </TestnetWrapper>
            <AccountElement active={!!account} style={{ pointerEvents: 'auto' }}>
              {account && userEthBalance ? (
                <BalanceText style={{ flexShrink: 0 }} pl="0.75rem" pr="0.5rem" fontWeight={500}>
                  {userEthBalance?.toSignificant(4)} RAMA
                </BalanceText>
              ) : null}
              <Web3Status />
            </AccountElement>
          </HeaderElement>
          <HeaderElementWrap>
            {/* <VersionSwitch /> */}
            <Settings />
            {/* <Menu /> */}
          </HeaderElementWrap>
        </HeaderControls>
      </Rowbetween>
    </HeaderFrame>
  )
}
