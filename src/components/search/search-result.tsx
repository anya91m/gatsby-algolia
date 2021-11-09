import { Link } from "gatsby"
import { default as React, VFC } from "react"
import { SearchResults } from "react-instantsearch-core"
import {
  connectStateResults,
  Highlight,
  Hits,
  Index,
  Snippet,
  PoweredBy,
} from "react-instantsearch-dom"

interface PageHitProps {
  hit: {
    title: string
    slug: string
    excerpt: string
  }
  className?: string
}
interface HitsInIndexProps {
  index: {
    name: string
    title: string
  }
  key?: string
}

interface SearchResultsProps extends SearchResults {
  className: string
  indices: { name: string; title: string }[]
  show?: boolean
}

const HitCount = connectStateResults(({ searchResults }) => {
  const hitCount = searchResults && searchResults.nbHits

  return hitCount > 0 ? (
    <div className="HitCount">
      {hitCount} result{hitCount !== 1 ? `s` : ``}
    </div>
  ) : null
})

const PageHit = ({ hit }: PageHitProps) => (
  <div>
    <Link to={hit.slug}>
      <h4>
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </h4>
    </Link>
    <Snippet attribute="excerpt" hit={hit} tagName="mark" />
  </div>
)

const HitsInIndex: VFC<HitsInIndexProps> = ({ index }) => {
  return (
    <Index indexName={index.name}>
      <HitCount />
      <Hits className="Hits" hitComponent={PageHit} />
    </Index>
  )
}

const SearchResult: VFC<SearchResultsProps> = ({ indices, className }) => {
  return (
    <div className={className}>
      {indices.map(index => (
        <HitsInIndex index={index} key={index.name} />
      ))}
      <PoweredBy />
    </div>
  )
}

export default SearchResult
