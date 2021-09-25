import { Header } from './header'
import { Subtitle } from './subtitle'
import Add from 'icons/add-icon.svg'
import { FileIcon, Editing, Saved, Delete } from '../icons'
import { SidebarWrapper, Button, List, ListItem, Link, Status, DeleteButton, Loading } from './sidebar-styles'
import { archivesProps } from 'resources/types/archives-props'
import { MouseEvent } from 'react'

type SidebarProps = {
  archives: archivesProps[],
  onCreateFile: () => void,
  onSelectFile: (item: archivesProps) => (e: MouseEvent) => void,
  onDelete: (item: archivesProps) => (e: MouseEvent) => void,
}

function Sidebar ({ archives, onCreateFile, onSelectFile, onDelete }: SidebarProps) {
  return (
    <SidebarWrapper>
      <Header />
      <Subtitle />
      <Button type='button' onClick={onCreateFile}>
        <img src={Add} alt='add' />
        Adicionar arquivo
      </Button>
      <nav>
        <List>
          {archives.map((item) => (
            <ListItem key={item.id} active={item.active}>
              <Link
                href={item.id} onClick={onSelectFile(item)}
              >
                <FileIcon />
                {item.name}
              </Link>
              <Status>
                {item.active && item.status === 'editing' && <Editing />}
                {item.active && item.status === 'saving' && <Loading />}
                {item.active && item.status === 'saved' && <Saved />}
              </Status>
              {item.active === false && <DeleteButton onClick={onDelete(item)}><Delete /></DeleteButton>}
            </ListItem>
          ))},
        </List>
      </nav>
    </SidebarWrapper>
  )
}

export { Sidebar }
