/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createForms = /* GraphQL */ `
  mutation CreateForms(
    $input: CreateFormsInput!
    $condition: ModelFormsConditionInput
  ) {
    createForms(input: $input, condition: $condition) {
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
export const updateForms = /* GraphQL */ `
  mutation UpdateForms(
    $input: UpdateFormsInput!
    $condition: ModelFormsConditionInput
  ) {
    updateForms(input: $input, condition: $condition) {
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
export const deleteForms = /* GraphQL */ `
  mutation DeleteForms(
    $input: DeleteFormsInput!
    $condition: ModelFormsConditionInput
  ) {
    deleteForms(input: $input, condition: $condition) {
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
