import styled, { css } from 'styled-components/macro'

type ListItemProps = {
  active: boolean
}

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
    & button{
      display:block;
    }
  }

  a {
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
`

export { List, ListItem, Link, Status, DeleteButton }
