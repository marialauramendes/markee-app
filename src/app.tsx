import styled from 'styled-components/macro'
import { Sidebar } from 'sidebar'
import { Content } from 'content'
import { useState, useRef } from 'react'
import { archivesProps } from 'resources/types/archives-props'

function App () {
  const [archives, setArchives] = useState<archivesProps[]>([])
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <Container>
      <Sidebar inputRef={inputRef} archives={archives} setArchives={setArchives} setContent={setContent} setTitle={setTitle} />
      <Content inputRef={inputRef} archives={archives} setArchives={setArchives} content={content} setContent={setContent} title={title} setTitle={setTitle} />
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
