import styled from 'styled-components/macro'

function Subtitle () {
  return (
    <SubtitleWrapper>
      <Line />
      <H2>Arquivos</H2>
      <Line />
    </SubtitleWrapper>
  )
}

const SubtitleWrapper = styled.div`
  display:flex;
  align-items: center;
  margin-bottom:24px;
`

const H2 = styled.h2`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.1rem;
  letter-spacing: -0.02em;
  color: ${props => props.theme.colors.white};
  margin-left: 6px;
  margin-right: 6px;
`

const Line = styled.span`
  width:100%;
  border-bottom: 2px solid ${props => props.theme.colors.primary};
  border-radius:5px;
  :first-child{
    width:13.5px;
  }
`

export { Subtitle }
