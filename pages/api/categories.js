import { graphcms } from '../../lib/client';

export async function loadCategories() {
  const query = `query Categories {
        categories {
            slug
            title
        }
      }
      `;

  const { categories } = await graphcms.request(query);
  return { categories };
}
