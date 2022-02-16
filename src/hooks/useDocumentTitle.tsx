import { useRef, useEffect } from 'react'

const useDocumentTitle = (title: string, prevailOnUnmount = false) => {
  const defaultTitle = useRef(document.title)

  useEffect(() => {
    document.title = 'FCC | ' + title
  }, [title])

  useEffect(
    () => () => {
      if (!prevailOnUnmount) {
        document.title = defaultTitle.current
      }
    },
    [prevailOnUnmount]
  )
}

export default useDocumentTitle
