import { archivesProps } from 'resources/types/archives-props'
import styled, { keyframes } from 'styled-components/macro'
import { FileIcon, Editing, Saving, Saved, Delete } from '../icons'
import { List, ListItem, Link, Status, DeleteButton } from './nav-styles'

type NavProps = {
  archives: archivesProps
}

function Navigation ({ archives }: NavProps) {
  return (
    <nav>
      <List>
        {archives
          ? archives.map((item) => (
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
          ))
          : <ListItem key={`file/${'1'}`} active={false}>teste</ListItem>},
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
