import { graphcms } from '../../lib/client';

export default async function products(req, res) {
  const { category } = req.query;
  const { products } = await loadProducts(category);

  res.status(200).json({
    products,
  });
}

export async function loadProducts() {
  const query = `query Products {
        products {
          id
          name
          price
          publishedAt
          slug
          image {
            url
          }
          description
          category {
            title
            slug
          }
        }
      }
      `;

  const { products } = await graphcms.request(query);
  return { products };
}
