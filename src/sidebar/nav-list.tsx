import { FileIcon, EditingIcon, SavingIcon, SavedIcon, DeleteIcon } from './icons'
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
    status: 'editing',
  },
]

function Navigation () {
  return (
    <nav>
      <List>
        {archives.map((item) => (
          <ListItem key={item.id} active={item.active}>
            <Link href={item.id}>
              <FileIcon />
              {item.name}
            </Link>
            <Status>
              {item.active && item.status === 'editing' && <EditingIcon />}
              {item.active && item.status === 'saving' && <SavingIcon />}
              {item.active && item.status === 'saved' && <SavedIcon />}
            </Status>
            {item.active === false && <DeleteButton><DeleteIcon /></DeleteButton>}
          </ListItem>
        ))},
      </List>
    </nav>
  )
}

export { Navigation }
