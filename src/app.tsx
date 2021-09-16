import styled from 'styled-components/macro'
import { Sidebar } from 'sidebar'

function App () {
  return (
    <Container>
      <Sidebar />
    </Container>
  )
}

const Container = styled.div`
  display:grid;
  width:100%;
  height: 100vh;
  grid-template-columns: 332px 1fr 1fr;
  grid-template-areas:
  'sidebar content content';
`

export { App }
