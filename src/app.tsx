import styled from 'styled-components/macro'
import { Sidebar } from 'sidebar'
import { Content } from 'content'
import { useState, useRef } from 'react'
import { archivesProps } from 'resources/types/archives-props'

function App () {
  const [archives, setArchives] = useState<archivesProps>([])

  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <Container>
      <Sidebar inputRef={inputRef} archives={archives} setArchives={setArchives} />
      <Content inputRef={inputRef} archives={archives} setArchives={setArchives} />
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
