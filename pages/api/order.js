import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHQL_URL_ENDPOINT;

export default async function order(req, res) {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPHQL_DEV_AUTH_TOKEN}`,
    },
  });

  const query = gql`
    mutation CreateOrder(
      $name: String!
      $phone: String!
      $email: String!
      $address: String!
      $total: Int!
      $orderList: String!
    ) {
      createOrder(
        data: {
          name: $name
          phone: $phone
          email: $email
          address: $address
          total: $total
          orderList: $orderList
        }
      ) {
        id
      }
    }
  `;
  const result = await graphQLClient.request(query, {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    address: req.body.address,
    total: req.body.total,
    orderList: req.body.orderList,
  });
  return res.status(200).send(result);
}

// , orderItems: {connect: {slug: $slug}}
