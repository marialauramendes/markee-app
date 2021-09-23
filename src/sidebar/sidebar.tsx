import { Header } from './header'
import { Subtitle } from './subtitle'
import Add from 'icons/add-icon.svg'
import { FileIcon, Editing, Saved, Delete } from '../icons'
import { SidebarWrapper, Button, List, ListItem, Link, Status, DeleteButton, Loading } from './sidebar-styles'
import { archivesProps } from 'resources/types/archives-props'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function Sidebar () {
  const [archives, setArchives] = useState<archivesProps>([])
  console.log(archives)

  const handleClick = () => {
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

  return (
    <SidebarWrapper>
      <Header />
      <Subtitle />
      <Button type='button' onClick={handleClick}>
        <img src={Add} alt='add' />
        Adicionar arquivo
      </Button>
      <nav>
        <List>
          {archives.map((item) => (
            <ListItem key={`file/${item.id}`} active={item.active}>
              <Link href={item.id}>
                <FileIcon />
                {item.name}
              </Link>
              <Status>
                {item.active && item.status === 'editing' && <Editing />}
                {item.active && item.status === 'saving' && <Loading />}
                {item.active && item.status === 'saved' && <Saved />}
              </Status>
              {item.active === false && <DeleteButton><Delete /></DeleteButton>}
            </ListItem>
          ))},
        </List>
      </nav>
    </SidebarWrapper>
  )
}

export { Sidebar }
