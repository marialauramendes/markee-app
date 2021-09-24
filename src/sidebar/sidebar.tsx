import { Header } from './header'
import { Subtitle } from './subtitle'
import Add from 'icons/add-icon.svg'
import { FileIcon, Editing, Saved, Delete } from '../icons'
import { SidebarWrapper, Button, List, ListItem, Link, Status, DeleteButton, Loading } from './sidebar-styles'
import { archivesProps } from 'resources/types/archives-props'
import { Dispatch, SetStateAction, RefObject, MouseEvent } from 'react'
import { v4 as uuidv4 } from 'uuid'

type SidebarProps = {
  archives: archivesProps[],
  setArchives: Dispatch<SetStateAction<archivesProps[]>>,
  inputRef: RefObject<HTMLInputElement>,
  setContent: Dispatch<SetStateAction<string>>,
  setTitle: Dispatch<SetStateAction<string>>,
}

function Sidebar ({ archives, setArchives, inputRef, setContent, setTitle }: SidebarProps) {
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

  const handleSelectedFile = (item: archivesProps) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const selectedFile = item
    archives.map((archive) => {
      if (archive.id === selectedFile.id) {
        setContent(archive.content)
        setTitle(archive.name)
        setArchives(archives.map((archive) => {
          if (archive.id === selectedFile.id) {
            return {
              ...selectedFile,
              active: true,
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

  const handleDelete = (item: archivesProps) => (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const selectedFile = item.id
    setArchives(prevState => prevState.filter(item => item.id !== selectedFile))
  }

  return (
    <SidebarWrapper>
      <Header />
      <Subtitle />
      <Button type='button' onClick={handleCreateFile}>
        <img src={Add} alt='add' />
        Adicionar arquivo
      </Button>
      <nav>
        <List>
          {archives.map((item) => (
            <ListItem key={`file/${item.id}`} active={item.active}>
              <Link
                href={item.id} onClick={handleSelectedFile(item)}
              >
                <FileIcon />
                {item.name}
              </Link>
              <Status>
                {item.active && item.status === 'editing' && <Editing />}
                {item.active && item.status === 'saving' && <Loading />}
                {item.active && item.status === 'saved' && <Saved />}
              </Status>
              {item.active === false && <DeleteButton onClick={handleDelete(item)}><Delete /></DeleteButton>}
            </ListItem>
          ))},
        </List>
      </nav>
    </SidebarWrapper>
  )
}

export { Sidebar }
