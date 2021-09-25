import { useState, useRef, useEffect, ChangeEvent, MouseEvent } from 'react'
import { archivesProps } from 'resources/types/archives-props'
import { v4 as uuidv4 } from 'uuid'

export function useFiles () {
  const [archives, setArchives] = useState<archivesProps[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    function updateStatus () {
      const activeItem = archives.find(item => item.active === true)
      if (activeItem === undefined || activeItem.status !== 'editing') {
        return activeItem
      }
      timer = setTimeout(() => {
        setArchives(archives =>
          archives.map((archive) => {
            if (archive.id === activeItem.id) {
              return {
                ...archive,
                status: 'saving',
              }
            }
            return archive
          }),
        )
        setTimeout(() => {
          setArchives(archives =>
            archives.map(archive => {
              if (archive.id === activeItem.id) {
                return {
                  ...archive,
                  status: 'saved',
                }
              }
              return archive
            }),
          )
        }, 300)
      }, 300)
    }

    updateStatus()
    return () => clearTimeout(timer)
  }, [archives])

  const handleCreateFile = () => {
    inputRef.current?.focus()

    setArchives(archives => archives.map(
      item => ({
        ...item,
        active: false,
      })).concat({
      id: uuidv4(),
      name: 'Sem título',
      content: '',
      active: true,
      status: 'saved',
    }),
    )
  }

  const handleSelectedFile = (item: archivesProps) => (e: MouseEvent) => {
    e.preventDefault()
    const selectedFile = item
    archives.map((archive) => {
      if (archive.id === selectedFile.id) {
        setArchives(archives => archives.map((archive) => {
          if (archive.id === selectedFile.id) {
            return {
              ...archive,
              active: true,
              content: archive.content,
              name: archive.name,
            }
          } else {
            return {
              ...archive,
              active: false,
            }
          }
        }))
        inputRef.current?.focus()
        return archive
      }
      return archive
    })
  }

  const handleDelete = (item: archivesProps) => (e: MouseEvent) => {
    e.preventDefault()
    const selectedFile = item.id
    setArchives(prevState => prevState.filter(item => item.id !== selectedFile))
  }

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const activeItem = archives.find(item => item.active === true)

    setArchives(archives => archives.map((archive) => {
      if (archive.id === activeItem?.id) {
        return {
          ...archive,
          name: e.target.value,
          status: 'editing',
        }
      }
      return archive
    }))
  }

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const activeItem = archives.find(item => item.active === true)

    setArchives(archives => archives.map((archive) => {
      if (archive.id === activeItem?.id) {
        return {
          ...archive,
          content: e.target.value,
          status: 'editing',
        }
      }
      return archive
    }))
  }
  return {
    archives,
    inputRef,
    handleCreateFile,
    handleSelectedFile,
    handleDelete,
    handleTitleChange,
    handleContentChange,
  }
}
export {}
