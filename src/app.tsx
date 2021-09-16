import styled, { css } from 'styled-components/macro'

function App () {
  return (
    <Title>App</Title>
  )
}

const Title = styled.h1`${({ theme }) => css`
  color: ${theme.colors.primary};
  background-color: ${theme.colors.black}
`}`

export { App }
