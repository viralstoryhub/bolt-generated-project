import { useCallback } from 'react'

const useScrollToSection = () => {
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 64 // Height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }, [])

  return scrollToSection
}

export default useScrollToSection
