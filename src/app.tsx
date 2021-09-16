import styled from 'styled-components/macro'
import { Sidebar } from 'sidebar'
import { Content } from 'content'

function App () {
  return (
    <Container>
      <Sidebar />
      <Content />
    </Container>
  )
}

const Container = styled.div`
  display:grid;
  width:100%;
  height: 100vh;
  grid-template-columns: 332px 2fr;
  grid-template-areas:
  'sidebar content';
`

export { App }
