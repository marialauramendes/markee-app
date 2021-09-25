import styled from 'styled-components/macro'
import { Sidebar } from 'sidebar'
import { Content } from 'content'
import { useState, useRef, useEffect, ChangeEvent, MouseEvent } from 'react'
import { archivesProps } from 'resources/types/archives-props'
import { v4 as uuidv4 } from 'uuid'

function App () {
  const [archives, setArchives] = useState<archivesProps[]>([])
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

  const handleCreateFile = () => {
    inputRef.current?.focus()

    setArchives(archives => archives.map(
      item => ({
        ...item,
        active: false,
      })).concat({
      id: uuidv4(),
      name: 'Sem título',
      content: '',
      active: true,
      status: 'saved',
    }),
    )
  }

  const handleSelectedFile = (item: archivesProps) => (e: MouseEvent) => {
    e.preventDefault()
    const selectedFile = item
    archives.map((archive) => {
      if (archive.id === selectedFile.id) {
        setArchives(archives.map((archive) => {
          if (archive.id === selectedFile.id) {
            return {
              ...selectedFile,
              active: true,
              content: archive.content,
              name: archive.name,
            }
          } else {
            return {
              ...archive,
              active: false,
            }
          }
        }))
        inputRef.current?.focus()
        return selectedFile
      } else {
        return archive
      }
    })
  }

  const handleDelete = (item: archivesProps) => (e: MouseEvent) => {
    e.preventDefault()
    const selectedFile = item.id
    setArchives(prevState => prevState.filter(item => item.id !== selectedFile))
  }

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const activeItem = archives.find(item => item.active === true)
    if (activeItem !== undefined) {
      setArchives(archives.map((archive) => {
        if (archive.id === activeItem.id) {
          return {
            ...activeItem,
            name: e.target.value,
            active: true,
            status: 'editing',
          }
        } else {
          return {
            ...archive,
            active: false,
            status: 'saved',
          }
        }
      }))
    }
  }

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const activeItem = archives.find(item => item.active === true)
    if (activeItem !== undefined) {
      setArchives(archives.map((archive) => {
        if (archive.id === activeItem.id) {
          return {
            ...activeItem,
            content: e.target.value,
            active: true,
            status: 'editing',
          }
        } else {
          return {
            ...archive,
            active: false,
            status: 'saved',
          }
        }
      }))
    }
  }

  return (
    <Container>
      <Sidebar archives={archives} onCreateFile={handleCreateFile} onSelectFile={handleSelectedFile} onDelete={handleDelete} />
      <Content inputRef={inputRef} archive={archives.find(archive => archive.active === true)} onContentChange={handleContentChange} onTitleChange={handleTitleChange} />
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
