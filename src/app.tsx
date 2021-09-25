import styled from 'styled-components/macro'
import { Sidebar } from 'sidebar'
import { Content } from 'content'
import { useFiles } from 'resources/use-files'

function App () {
  const {
    archives,
    inputRef,
    handleCreateFile,
    handleSelectedFile,
    handleDelete,
    handleTitleChange,
    handleContentChange,
  } = useFiles()

  return (
    <Container>
      <Sidebar archives={archives} onCreateFile={handleCreateFile} onSelectFile={handleSelectedFile} onDelete={handleDelete} />
      <Content inputRef={inputRef} archive={archives.find(archive => archive.active === true)} onContentChange={handleContentChange} onTitleChange={handleTitleChange} />
    </Container>
  )
}

const Container = styled.div`
  display:grid;
  width:100%;
  height: 100vh;
  grid-template-columns: 332px 2fr;
  grid-template-areas:
  'sidebar content';
`

export { App }
