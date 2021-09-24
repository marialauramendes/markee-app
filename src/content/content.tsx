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
  title: string,
  setTitle: Dispatch<SetStateAction<string>>,
  content: string,
  setContent: Dispatch<SetStateAction<string>>,
}

function Content ({ archives, setArchives, inputRef, title, setTitle, content, setContent }: ContentProps) {
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)

    const activeItem = archives.find(item => item.active === true)
    if (activeItem !== undefined) {
      setArchives(archives.map((archive) => {
        if (archive.id === activeItem.id) {
          return {
            ...activeItem,
            name: e.target.value,
            active: true,
            status: 'editing',
          }
        } else {
          return {
            ...archive,
            active: false,
            status: 'saved',
          }
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
          return {
            ...activeItem,
            content: e.target.value,
            active: true,
            status: 'editing',
          }
        } else {
          return {
            ...archive,
            active: false,
            status: 'saved',
          }
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
