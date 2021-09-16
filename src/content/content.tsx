import styled from 'styled-components/macro'
import fileBlueIcon from 'images/file-blue-icon.svg'

function Content () {
  return (
    <Main>
      <Input type='text' placeholder='Contribut' />
      <ContainerFlex>
        <Plaintext>
          <Textarea />
        </Plaintext>
        <PreviewWrapper>
          <h1>Bootcamp Brainn Co.</h1>
          <p>Lorem ipsum dolor sit amet simet</p>
        </PreviewWrapper>
      </ContainerFlex>
    </Main>
  )
}

const Main = styled.main`
  padding-top: 24px;
  padding-bottom: 24px;
  grid-area: content;

`

const Input = styled.input`
  font-size: 1.8rem;
  line-height: 2.3rem;
  font-weight: 500;
  letter-spacing: -0.02em;
  text-transform:uppercase;
  color: ${props => props.theme.colors.black};
  border: none;
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
  border-right: 2px solid rgba(30, 41, 59, 0.12);
  padding:24px;
`

const Textarea = styled.textarea`
  display: block;
  width:100%;
  border: none;

  &:focus-visible {
    outline:none;
  }
`

const PreviewWrapper = styled.div`
  width:50%;
  height:100%;
  padding:24px;

`
export { Content }
