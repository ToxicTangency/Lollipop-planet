import { useState } from 'react';
import MainContainer from '../../components/MainContainer';
import ProductPage from '../../components/ProductPage/ProductPage';
import { graphcms } from '../../lib/client';

export default function Product({ product }) {
  const [productItem, setProductItem] = useState(product.product);
  return (
    <MainContainer title={productItem.name}>
      <ProductPage product={productItem} />
    </MainContainer>
  );
}

export async function getStaticPaths() {
  const query = `query ProductsSlugs {
    products {
      slug
    }
  }
  `;

  const { products } = await graphcms.request(query);

  const paths = products.map(product => ({
    params: {
      slug: product.slug,
    },
  }));
  console.log(paths);
  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params: { slug } }) {
  const query = `query MyQuery($slug: String!) {
    product(where: {slug: $slug}) {
      id
      name
      price
      description
      image {
        url
      }
      category {
        title
        slug
      }
    }
  }`;
  const variables = { slug: `${slug}` };
  const product = await graphcms.request(query, variables);
  return {
    props: {
      product,
    },
  };
}
