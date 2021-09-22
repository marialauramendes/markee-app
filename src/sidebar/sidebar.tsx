import styled from 'styled-components/macro'
import { Header } from './header'
import { Subtitle } from './subtitle'
import Add from 'icons/add-icon.svg'
import { Navigation } from './nav-list'
import { archivesProps } from 'resources/types/archives-props'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function Sidebar () {
  const [archives, setNewFile] = useState<archivesProps>([
    {
      id: uuidv4(),
      name: 'Sem título',
      content: '',
      active: true,
      status: 'saved',
    },
  ])
  console.log(archives)

  const handleClick = () => {
    setNewFile(prevData => [...prevData, {
      id: uuidv4(),
      name: 'Sem título',
      content: '',
      active: true,
      status: 'saved',
    }],
    )
    if (archives.length > 0) {
      archives.map((item) => {
        item.active = false
        return item.active
      })
    }
  }

  return (
    <SidebarWrapper>
      <Header />
      <Subtitle />
      <Button type='button' onClick={handleClick}>
        <img src={Add} alt='add' />
        Adicionar arquivo
      </Button>
      <Navigation archives={archives} />
    </SidebarWrapper>
  )
}

const SidebarWrapper = styled.aside`
  grid-area: sidebar;
  background-color: ${(props) => props.theme.colors.black};
  padding:45px 32px;

`

const Button = styled.button`
  display: flex;
  align-items:center;
  justify-content:center;
  width:100%;
  height: 34px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.lightBlack};
  font-size: 1.3rem;
  font-weight:400;
  border:none;
  border-radius: 4px;
  padding:8px;
  margin-bottom:34px;
  cursor: pointer;

  img{
    margin-right:12px;
  }

  &:hover{
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }

`
export { Sidebar }
