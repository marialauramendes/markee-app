import styled from 'styled-components/macro'
import fileBlueIcon from 'images/file-blue-icon.svg'

function Content () {
  return (
    <Main>
      <Input type='text' placeholder='Contribut' />
      <ContainerFlex>
        <Plaintext>
          <Textarea placeholder='## Bootcamp Brainn Co' />
        </Plaintext>
        <Output>
          <h2>Bootcamp Brainn Co.</h2>
          <p>Lorem ipsum dolor sit amet simet</p>
        </Output>
      </ContainerFlex>
    </Main>
  )
}

const Main = styled.main`
  padding-top: 24px;
  padding-bottom: 24px;
  grid-area: content;
  background-color: ${({ theme }) => theme.colors.white};
`

const Input = styled.input`
  font-size: 1.8rem;
  line-height: 2.3rem;
  font-weight: 500;
  letter-spacing: -0.02em;
  text-transform:uppercase;
  color: ${props => props.theme.colors.black};
  border: none;
  background-color:transparent;
  background-image: url(${fileBlueIcon});
  background-repeat: no-repeat;
  background-size:contain;
  padding-left: 36px;
  margin-left:24px;
  margin-bottom: 57px;

  & svg{
    stroke: ${props => props.theme.colors.primary};
    stroke-opacity:0.65;
    margin-right:20px;
  }
  &:focus-visible{
    outline:none;
  }
  &:-webkit-direct-focus {
    outline:none;
  }
`

const ContainerFlex = styled.div`
  display: flex;
  align-items:center;
  height: calc(100vh - 106px);
`

const Plaintext = styled.div`
  display: block;
  width:50%;
  height: 100%;
  border-right: 2px solid ${({ theme }) => theme.colors.gray};
`

const Textarea = styled.textarea`
  display: block;
  width:100%;
  height: 100%;
  border: none;
  font-family: 'Inconsolata', sans-serif;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 1.9rem;
  resize:none;
  padding: 0 24px 24px;
  background-color: transparent;
  opacity: .86;

  &:focus-visible{
    outline:none;
  }
  &:-webkit-direct-focus {
    outline:none;
  }
`

const Output = styled.article`
  width:50%;
  height:100%;
  padding: 0 24px 24px;
  background-color:transparent;

  h1, h2, h3, h4, h5, h6{
    margin-top: 0;
  }

  h2{
    font-size: 3.2rem;
    line-height: 4.2rem;
    font-weight: 700;
    color: ${props => props.theme.colors.black};
    margin-top:0;
    margin-bottom: 3px;
  }

  p{
    font-size: 1.8rem;
    line-height: 2.3rem;
    font-weight: 400;
    color: ${props => props.theme.colors.black};
    opacity:.70;
  }
`

export { Content }
