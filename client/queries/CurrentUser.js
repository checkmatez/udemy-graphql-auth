import gql from 'graphql-tag';

const query = gql`
  {
    currentUser{
      id
      email
    }
  }
`;

export default query;
