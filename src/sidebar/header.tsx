import styled from 'styled-components/macro'
import logo from './logo.svg'

function Header () {
  return (
    <HeaderWrapper>
      <LogoBox>
        <img src={logo} alt='letter M designed as a logo' />
      </LogoBox>
      <H1>
        Markee<Dot>.</Dot>
      </H1>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height:45px;
  margin-bottom: 56px;
`

const LogoBox = styled.div`
  height:inherit;
`

const H1 = styled.h1`
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 3.3rem;
  line-height:4.4rem;
  letter-spacing: -0.08em;
  text-transform: lowercase;
  color: ${({ theme }) => theme.colors.white}
  ;
  margin-left:13px;
  cursor: default;
`

const Dot = styled.span`
color: ${({ theme }) => theme.colors.primary}
;
`

export { Header }
