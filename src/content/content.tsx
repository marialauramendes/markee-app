import { Main, Input, ContainerFlex, Plaintext, Textarea, Output } from './content-styles'
import { RefObject, ChangeEvent } from 'react'
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
  onTitleChange: (e: ChangeEvent<HTMLInputElement>) => void,
  onContentChange: (e: ChangeEvent<HTMLTextAreaElement>) => void,
  inputRef: RefObject<HTMLInputElement>,
  archive?: archivesProps,
}

function Content ({ onTitleChange, onContentChange, inputRef, archive }: ContentProps) {
  if (!archive) {
    return null
  }
  return (
    <Main>
      <Input type='text' ref={inputRef} placeholder='sem título' value={archive.name} onChange={onTitleChange} />
      <ContainerFlex>
        <Plaintext>
          <Textarea placeholder='Digite aqui seu markdown' value={archive.content} onChange={onContentChange} />
        </Plaintext>
        <Output dangerouslySetInnerHTML={{ __html: marked(archive.content) }} />
      </ContainerFlex>
    </Main>
  )
}

export { Content }
