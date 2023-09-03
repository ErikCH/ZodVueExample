/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getForms = /* GraphQL */ `
  query GetForms($id: ID!) {
    getForms(id: $id) {
      id
      firstName
      lastName
      address
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listForms = /* GraphQL */ `
  query ListForms(
    $filter: ModelFormsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listForms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        address
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
