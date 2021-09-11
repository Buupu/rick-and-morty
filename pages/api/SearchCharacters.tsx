import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { NextApiRequest, NextApiResponse } from 'next';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql/',
  cache: new InMemoryCache()
});

export default async function SearchCharacters(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const search = req.body;

  try {
    const { data } = await client.query({
      query: gql`
        query {
          characters(filter: { name: "${search}" }) {
            info {
              count
              pages
            }
            results {
              name
              id
              location {
                id
                name
              }
              origin {
                id
                name
              }
              episode {
                id
                episode
                air_date
              }
              image
            }
          }
        }
      `
    });
    res.status(200).json({ characters: data.characters.results, error: null });
  } catch (error) {
    if (error.message === '404: Not Found') {
      res.status(400).json({ characters: null, error: 'No character found' });
    } else {
      res.status(500).json({ characters: null, error: error.message });
    }
  }
}
