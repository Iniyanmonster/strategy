export async function getProducts() {
    const response = await fetch(process.env.REACT_APP_SHOPIFY_URL ,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Storefront-Access-Token': process.env.REACT_APP_API_ACCESS_TOKEN,
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