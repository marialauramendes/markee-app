import styled from 'styled-components/macro'

function Subtitle () {
  return (
    <H2>
      <span>Arquivos</span>
    </H2>
  )
}

const H2 = styled.h2`
  position: relative;
  font-size: 1.6rem;
  line-height: 2.1rem;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.white};
  padding-left:20px;
  margin-bottom:24px;

  span{
    position:relative;
    z-index:2;
    display:inline-block;
    padding-left:10px;
    padding-right:10px;
    background-color: ${({ theme }) => theme.colors.black};
  }

  &::before{
    content: '';
    position:absolute;
    left:0;
    top:50%;
    transform: translateY(-50%);
    z-index:0;
    display:block;
    height:2px;
    width:100%;
    background-color: ${props => props.theme.colors.primary};
    border-radius:2px;
  }

`

export { Subtitle }
