import { useState, useEffect } from 'react'

const useContent = (contentType) => {
  const [content, setContent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadContent = async () => {
      try {
        const data = await import(`../content/${contentType}.json`)
        setContent(data.default)
        setLoading(false)
      } catch (err) {
        setError(err)
        setLoading(false)
      }
    }

    loadContent()
  }, [contentType])

  return { content, loading, error }
}

export default useContent
