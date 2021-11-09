import React, { VFC } from "react"
import { connectSearchBox } from "react-instantsearch-dom"
import { Search as SearchIcon } from "@styled-icons/fa-solid"
import { SearchBoxProvided } from "react-instantsearch-core"

interface SearchBoxProps extends SearchBoxProvided {
  className: string
  onFocus: () => void
  hasFocus?: boolean
}

const SearchBox: VFC<SearchBoxProps> = ({
  refine,
  currentRefinement,
  className,
  onFocus,
}) => {
  return (
    <form className={className}>
      <input
        className="SearchInput"
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={e => refine(e.target.value)}
        value={currentRefinement}
        onFocus={onFocus}
      />
      <SearchIcon className="SearchIcon" />
    </form>
  )
}

export default connectSearchBox(SearchBox)
