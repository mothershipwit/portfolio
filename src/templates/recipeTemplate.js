import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function recipeTemplate({data}) {
    const recipe = data.contentfulFoods
    return (
        <Layout>
            <h2>{recipe.name}</h2>
            <img src={recipe.image.file.url} alt={recipe.name} className="img-thumbnail" />
            <p>
                {recipe.description.description}
            </p>

        </Layout>
    )
}

export const query = graphql`
query MyQuery($slug: String!) {
    contentfulFoods(name: {eq: $slug}) {
      image {
        title
        file {
          url
        }
      }
      description {
        description
      }
    }
  }
 ` 
