import styled, { keyframes } from 'styled-components/macro'
import { FileIcon, Editing, Saving, Saved, Delete } from '../icons'
import { List, ListItem, Link, Status, DeleteButton } from './nav-styles'

type archivesProps = {
  id: string
  name: string
  content: string
  active: boolean
  status: 'editing' | 'saving' | 'saved',
}

const archives: archivesProps[] = [
  {
    id: 'Readme.md',
    name: 'Readme.md',
    content: '',
    active: false,
    status: 'saved',
  },
  {
    id: 'CONTRIBUT.md',
    name: 'CONTRIBUT.md',
    content: '',
    active: false,
    status: 'saved',
  },
  {
    id: 'LICENSE.md',
    name: 'LICENSE.md',
    content: '',
    active: false,
    status: 'saved',
  },
  {
    id: 'Links.md',
    name: 'Links.md',
    content: '',
    active: false,
    status: 'saved',
  },
  {
    id: 'roadmap.md',
    name: 'roadmap.md',
    content: '',
    active: true,
    status: 'saving',
  },
]

function Navigation () {
  return (
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
  )
}

const rotation = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(359deg);

  }
`

const Loading = styled(Saving)`
  animation: ${rotation} 1s infinite linear;
`
export { Navigation }
