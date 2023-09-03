/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateFormsInput = {
  id?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  address?: string | null,
};

export type ModelFormsConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  address?: ModelStringInput | null,
  and?: Array< ModelFormsConditionInput | null > | null,
  or?: Array< ModelFormsConditionInput | null > | null,
  not?: ModelFormsConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Forms = {
  __typename: "Forms",
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  address?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateFormsInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  address?: string | null,
};

export type DeleteFormsInput = {
  id: string,
};

export type ModelFormsFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  address?: ModelStringInput | null,
  and?: Array< ModelFormsFilterInput | null > | null,
  or?: Array< ModelFormsFilterInput | null > | null,
  not?: ModelFormsFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelFormsConnection = {
  __typename: "ModelFormsConnection",
  items:  Array<Forms | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionFormsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFormsFilterInput | null > | null,
  or?: Array< ModelSubscriptionFormsFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateFormsMutationVariables = {
  input: CreateFormsInput,
  condition?: ModelFormsConditionInput | null,
};

export type CreateFormsMutation = {
  createForms?:  {
    __typename: "Forms",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    address?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFormsMutationVariables = {
  input: UpdateFormsInput,
  condition?: ModelFormsConditionInput | null,
};

export type UpdateFormsMutation = {
  updateForms?:  {
    __typename: "Forms",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    address?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFormsMutationVariables = {
  input: DeleteFormsInput,
  condition?: ModelFormsConditionInput | null,
};

export type DeleteFormsMutation = {
  deleteForms?:  {
    __typename: "Forms",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    address?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetFormsQueryVariables = {
  id: string,
};

export type GetFormsQuery = {
  getForms?:  {
    __typename: "Forms",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    address?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFormsQueryVariables = {
  filter?: ModelFormsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFormsQuery = {
  listForms?:  {
    __typename: "ModelFormsConnection",
    items:  Array< {
      __typename: "Forms",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      address?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateFormsSubscriptionVariables = {
  filter?: ModelSubscriptionFormsFilterInput | null,
};

export type OnCreateFormsSubscription = {
  onCreateForms?:  {
    __typename: "Forms",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    address?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFormsSubscriptionVariables = {
  filter?: ModelSubscriptionFormsFilterInput | null,
};

export type OnUpdateFormsSubscription = {
  onUpdateForms?:  {
    __typename: "Forms",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    address?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFormsSubscriptionVariables = {
  filter?: ModelSubscriptionFormsFilterInput | null,
};

export type OnDeleteFormsSubscription = {
  onDeleteForms?:  {
    __typename: "Forms",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    address?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
