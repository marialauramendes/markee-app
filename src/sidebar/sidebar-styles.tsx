import styled, { css, keyframes } from 'styled-components/macro'
import { Saving } from '../icons'

type ListItemProps = {
  active: boolean
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

const List = styled.ul`
  width:100%;
  list-style-type: none;
  padding-inline-start: 0;
`

const ListItem = styled.li<ListItemProps>`${({ theme, active }) => css`
  display:flex;
  align-items:center;
  justify-content:space-between;
  width:100%;
  height: 37px;
  font-size: 1.6rem;
  line-height: 2.1rem;
  letter-spacing: -0.02em;
  color: ${active ? theme.colors.white : 'rgba(255,255,255,.65)'};
  background-color: ${active ? theme.colors.lightBlack : 'transparent'};
  border-radius: 6px;
  padding: 9px 14px 7px;
  transition:.2s;

  &::not(::last-child){
    margin-bottom:10px;
  }

  &:hover{
    color: ${theme.colors.white};
    background-color: ${theme.colors.lightBlack};
    transition:.2s;
    svg{
      stroke: ${!active && theme.colors.white};
    }
    & ${DeleteButton}{
      display:block;
    }
  }

  a{
    svg{
      stroke: ${active ? theme.colors.primary : 'rgba(255,255,255,.65)'};
      margin-right:20px;
    }
  }

`}`

const Link = styled.a`
  display: flex;
  align-items:center;
  font-weight: 400;
  color:inherit;
  text-decoration: none;
  transition:.3s;
  cursor: pointer;

`

const Status = styled.span`
  width:13px;
  & svg{
    margin: 0 auto;
    display: block;
  }
`

const DeleteButton = styled.button`
  display: none;
  background-color:transparent;
  border:none;
  padding:0;
  cursor: pointer;
`

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

export { SidebarWrapper, Button, List, ListItem, Link, Status, DeleteButton, Loading }
