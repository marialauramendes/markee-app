import { Main, Input, ContainerFlex, Plaintext, Textarea, Output } from './content-styles'
import { ChangeEvent, Dispatch, RefObject, SetStateAction } from 'react'
import marked from 'marked'
import 'highlight.js/styles/github.css'
import { archivesProps } from 'resources/types/archives-props'

import('highlight.js').then(hljs => {
  const h = hljs.default

  marked.setOptions({
    highlight: (code, language) => {
      if (language && h.getLanguage(language)) {
        return h.highlight(code, { language }).value
      } else {
        return h.highlightAuto(code).value
      }
    },
  })
})

type ContentProps = {
  archives: archivesProps[],
  setArchives: Dispatch<SetStateAction<archivesProps[]>>,
  inputRef: RefObject<HTMLInputElement>,
  content: string,
  setContent: Dispatch<SetStateAction<string>>,
  title: string,
  setTitle: Dispatch<SetStateAction<string>>,
}

function Content ({ content, setContent, archives, setArchives, inputRef, title, setTitle }: ContentProps) {
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)

    const activeItem = archives.find(item => item.active === true)
    if (activeItem !== undefined) {
      setArchives(archives.map((archive) => {
        if (archive.id === activeItem.id) {
          activeItem.name = e.target.value
          return activeItem
        } else {
          return archive
        }
      }))
    }
  }
  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
    const activeItem = archives.find(item => item.active === true)
    if (activeItem !== undefined) {
      setArchives(archives.map((archive) => {
        if (archive.id === activeItem.id) {
          activeItem.content = e.target.value
          return activeItem
        } else {
          return archive
        }
      }))
    }
  }

  return (
    <Main>
      <Input type='text' ref={inputRef} placeholder='sem título' value={title} onChange={handleTitleChange} />
      <ContainerFlex>
        <Plaintext>
          <Textarea placeholder='Digite aqui seu markdown' value={content} onChange={handleContentChange} />
        </Plaintext>
        <Output dangerouslySetInnerHTML={{ __html: marked(content) }} />
      </ContainerFlex>
    </Main>
  )
}

export { Content }
