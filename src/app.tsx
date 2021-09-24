import styled from 'styled-components/macro'
import { Sidebar } from 'sidebar'
import { Content } from 'content'
import { useState, useRef, useEffect } from 'react'
import { archivesProps } from 'resources/types/archives-props'

function App () {
  const [archives, setArchives] = useState<archivesProps[]>([])
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    function updateStatus () {
      const activeItem = archives.find(item => item.active === true)
      if (activeItem === undefined || activeItem.status !== 'editing') {
        return activeItem
      } else {
        setTimeout(() => {
          setArchives(
            archives.map((archive) => {
              if (archive.id === activeItem.id) {
                return {
                  ...activeItem,
                  status: 'saving',
                }
              } else {
                return archive
              }
            }),
          )
          setTimeout(() => {
            setArchives(
              archives.map(archive => {
                if (archive.id === activeItem.id) {
                  return {
                    ...activeItem,
                    status: 'saved',
                  }
                } else {
                  return archive
                }
              }),
            )
          }, 300)
        }, 300)
      }
    }

    updateStatus()
    return () => clearTimeout()
  }, [archives])

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
