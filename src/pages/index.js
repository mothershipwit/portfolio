import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function Home({data}) {
  return (
    <Layout>
      <div><h1>Homemade Meals</h1></div>

      <div className="row">
      {data.allContentfulFoods.nodes.map((node, index) => (
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <img className="card-img-top" src={ node.image.file.url } alt={ node.name } data-holder-rendered="true" />
                <div className="card-body">
                  <p className="card-text">{node.name}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <a href={node.name} className="btn btn-sm btn-outline-primary">View</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        ))}
      </div>
      

    </Layout>
  )
}

export const query = graphql`
query MyQuery2 {
  allContentfulFoods {
    nodes {
      name
      description {
        description
      }
      image {
        file {
          url
        }
      }
    }
  }
}
`