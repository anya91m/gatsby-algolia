import React from "react"
import { Link } from "gatsby"
import { Highlight } from "react-instantsearch-dom"

const PostPreview = ({ hit }) => {
  const title = hit.frontmatter.title || hit.fields.slug
  return (
    <div>
      <article
        className="hit-list-item"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h2>
            <Link to={hit.slug} itemProp="url">
              <span itemProp="headline">{title}</span>
            </Link>
          </h2>
          <small>{new Date(hit.frontmatter.date).toLocaleDateString()}</small>
        </header>
        <section>
          <p>
            <Highlight hit={hit} attribute="excerpt" />
          </p>
        </section>
      </article>
    </div>
  )
}

export default PostPreview
