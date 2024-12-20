export async function getProducts() {
    const response = await fetch('https://seq1iq-ss.myshopify.com/api/2024-10/graphql.json' ,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Storefront-Access-Token': '7f4215fea429b4537811999031e8c6fa',
        },
        body: JSON.stringify({
            query: `
            {
                products(first:100) {
                edges {
                  node {
                    title
                    
                    priceRange {
                      maxVariantPrice{
                        amount
                      }
                    }
                    media(first:100) {
                      edges {
                        node {
                          previewImage {
                            url
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
        `
        })
    });
    return response.json();
}