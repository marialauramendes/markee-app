import styled from 'styled-components/macro'
import { Sidebar } from 'sidebar'
import { Content } from 'content'
import { useRef } from 'react'

function App () {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <Container>
      <Sidebar inputRef={inputRef} />
      <Content inputRef={inputRef} />
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
