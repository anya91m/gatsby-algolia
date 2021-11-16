import { RefObject, useEffect } from "react"

const events = [`mousedown`, `touchstart`]

const useClickOutside = (
  ref: RefObject<HTMLElement>,
  onClickOutside: () => void
) => {
  const isOutside = (element: Element) =>
    !ref.current || !ref.current.contains(element)

  const onClick = (event: Event) => {
    if (event.target instanceof HTMLElement && isOutside(event.target)) {
      onClickOutside()
    }
  }

  useEffect(() => {
    for (const event of events) {
      document.addEventListener(event, onClick)
    }

    return () => {
      for (const event of events) document.removeEventListener(event, onClick)
    }
  })
}

export default useClickOutside
