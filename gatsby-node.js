const path = require("path")

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
  
    const recipeTemplate = path.resolve(`src/templates/recipeTemplate.js`)
  
    return graphql(`
        {
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
    `).then(result => {
      if (result.errors) {
        return Promise.reject(result.errors)
      }
  
      result.data.allContentfulFoods.nodes.forEach((node) => {
        createPage({
            path: node.name,
            component: recipeTemplate,
            context: {
                slug: node.name
            }, // additional data can be passed via context
        })
      })
    })
    .catch(error => {
      console.log("Error retrieving contentful data", error);
    });
  }