import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type AddTicketCommentDto = {
  comment: Scalars['String']['input'];
  id: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addTicketComment: Ticket;
  handleTicket: Ticket;
  lockTicket: Ticket;
  skipTicket: Ticket;
  updateTicket: Ticket;
};


export type MutationAddTicketCommentArgs = {
  addTicketCommentDto: AddTicketCommentDto;
};


export type MutationHandleTicketArgs = {
  id: Scalars['String']['input'];
};


export type MutationLockTicketArgs = {
  id: Scalars['String']['input'];
};


export type MutationSkipTicketArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateTicketArgs = {
  updateTicketDto: UpdateTicketDto;
};

export type PaginatedTickets = {
  __typename?: 'PaginatedTickets';
  data: Array<Ticket>;
  skip: Scalars['Int']['output'];
  take: Scalars['Int']['output'];
  totalCount: Scalars['Int']['output'];
};

export type Pagination = {
  skip: Scalars['Float']['input'];
  take: Scalars['Float']['input'];
};

export type Query = {
  __typename?: 'Query';
  getNextAvailableTicket: Ticket;
  searchTickets: PaginatedTickets;
  ticket: Ticket;
};


export type QuerySearchTicketsArgs = {
  pagination: Pagination;
  searchTicketDto: SearchTicketDto;
};


export type QueryTicketArgs = {
  id: Scalars['String']['input'];
};

export type SearchTicketDto = {
  lockedByMe?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<TicketStatusEnum>;
};

export type Ticket = {
  __typename?: 'Ticket';
  comment: Array<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lockedByUserId?: Maybe<Scalars['String']['output']>;
  status: TicketStatusEnum;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export enum TicketStatusEnum {
  Done = 'DONE',
  Locked = 'LOCKED',
  Open = 'OPEN'
}

export type UpdateTicketDto = {
  description: Scalars['String']['input'];
  id: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type TicketFieldsFragment = { __typename?: 'Ticket', comment: Array<string>, createdAt: any, description: string, id: string, status: TicketStatusEnum, title: string, updatedAt: any, lockedByUserId?: string | null };

export type SearchTicketsQueryVariables = Exact<{
  searchTicketDto: SearchTicketDto;
  pagination: Pagination;
}>;


export type SearchTicketsQuery = { __typename?: 'Query', searchTickets: { __typename?: 'PaginatedTickets', totalCount: number, take: number, skip: number, data: Array<{ __typename?: 'Ticket', comment: Array<string>, createdAt: any, description: string, id: string, status: TicketStatusEnum, title: string, updatedAt: any, lockedByUserId?: string | null }> } };

export type GetTicketQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetTicketQuery = { __typename?: 'Query', ticket: { __typename?: 'Ticket', comment: Array<string>, createdAt: any, description: string, id: string, status: TicketStatusEnum, title: string, updatedAt: any, lockedByUserId?: string | null } };

export type GetNextAvailableTicketQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNextAvailableTicketQuery = { __typename?: 'Query', getNextAvailableTicket: { __typename?: 'Ticket', comment: Array<string>, createdAt: any, description: string, id: string, status: TicketStatusEnum, title: string, updatedAt: any, lockedByUserId?: string | null } };

export type LockTicketMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type LockTicketMutation = { __typename?: 'Mutation', lockTicket: { __typename?: 'Ticket', comment: Array<string>, createdAt: any, description: string, id: string, status: TicketStatusEnum, title: string, updatedAt: any, lockedByUserId?: string | null } };

export type SkipTicketMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type SkipTicketMutation = { __typename?: 'Mutation', skipTicket: { __typename?: 'Ticket', comment: Array<string>, createdAt: any, description: string, id: string, status: TicketStatusEnum, title: string, updatedAt: any, lockedByUserId?: string | null } };

export type HandleTicketMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type HandleTicketMutation = { __typename?: 'Mutation', handleTicket: { __typename?: 'Ticket', comment: Array<string>, createdAt: any, description: string, id: string, status: TicketStatusEnum, title: string, updatedAt: any, lockedByUserId?: string | null } };

export type UpdateTicketMutationVariables = Exact<{
  updateTicketDto: UpdateTicketDto;
}>;


export type UpdateTicketMutation = { __typename?: 'Mutation', updateTicket: { __typename?: 'Ticket', comment: Array<string>, createdAt: any, description: string, id: string, status: TicketStatusEnum, title: string, updatedAt: any, lockedByUserId?: string | null } };

export type AddTicketCommentMutationVariables = Exact<{
  addTicketCommentDto: AddTicketCommentDto;
}>;


export type AddTicketCommentMutation = { __typename?: 'Mutation', addTicketComment: { __typename?: 'Ticket', comment: Array<string>, createdAt: any, description: string, id: string, status: TicketStatusEnum, title: string, updatedAt: any, lockedByUserId?: string | null } };

export const TicketFieldsFragmentDoc = gql`
    fragment TicketFields on Ticket {
  comment
  createdAt
  description
  id
  status
  title
  updatedAt
  lockedByUserId
}
    `;
export const SearchTicketsDocument = gql`
    query SearchTickets($searchTicketDto: SearchTicketDto!, $pagination: Pagination!) {
  searchTickets(pagination: $pagination, searchTicketDto: $searchTicketDto) {
    data {
      ...TicketFields
    }
    totalCount
    take
    skip
  }
}
    ${TicketFieldsFragmentDoc}`;

/**
 * __useSearchTicketsQuery__
 *
 * To run a query within a React component, call `useSearchTicketsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchTicketsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchTicketsQuery({
 *   variables: {
 *      searchTicketDto: // value for 'searchTicketDto'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useSearchTicketsQuery(baseOptions: Apollo.QueryHookOptions<SearchTicketsQuery, SearchTicketsQueryVariables> & ({ variables: SearchTicketsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchTicketsQuery, SearchTicketsQueryVariables>(SearchTicketsDocument, options);
      }
export function useSearchTicketsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchTicketsQuery, SearchTicketsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchTicketsQuery, SearchTicketsQueryVariables>(SearchTicketsDocument, options);
        }
export function useSearchTicketsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<SearchTicketsQuery, SearchTicketsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchTicketsQuery, SearchTicketsQueryVariables>(SearchTicketsDocument, options);
        }
export type SearchTicketsQueryHookResult = ReturnType<typeof useSearchTicketsQuery>;
export type SearchTicketsLazyQueryHookResult = ReturnType<typeof useSearchTicketsLazyQuery>;
export type SearchTicketsSuspenseQueryHookResult = ReturnType<typeof useSearchTicketsSuspenseQuery>;
export type SearchTicketsQueryResult = Apollo.QueryResult<SearchTicketsQuery, SearchTicketsQueryVariables>;
export const GetTicketDocument = gql`
    query GetTicket($id: String!) {
  ticket(id: $id) {
    ...TicketFields
  }
}
    ${TicketFieldsFragmentDoc}`;

/**
 * __useGetTicketQuery__
 *
 * To run a query within a React component, call `useGetTicketQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTicketQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTicketQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTicketQuery(baseOptions: Apollo.QueryHookOptions<GetTicketQuery, GetTicketQueryVariables> & ({ variables: GetTicketQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTicketQuery, GetTicketQueryVariables>(GetTicketDocument, options);
      }
export function useGetTicketLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTicketQuery, GetTicketQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTicketQuery, GetTicketQueryVariables>(GetTicketDocument, options);
        }
export function useGetTicketSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTicketQuery, GetTicketQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTicketQuery, GetTicketQueryVariables>(GetTicketDocument, options);
        }
export type GetTicketQueryHookResult = ReturnType<typeof useGetTicketQuery>;
export type GetTicketLazyQueryHookResult = ReturnType<typeof useGetTicketLazyQuery>;
export type GetTicketSuspenseQueryHookResult = ReturnType<typeof useGetTicketSuspenseQuery>;
export type GetTicketQueryResult = Apollo.QueryResult<GetTicketQuery, GetTicketQueryVariables>;
export const GetNextAvailableTicketDocument = gql`
    query GetNextAvailableTicket {
  getNextAvailableTicket {
    ...TicketFields
  }
}
    ${TicketFieldsFragmentDoc}`;

/**
 * __useGetNextAvailableTicketQuery__
 *
 * To run a query within a React component, call `useGetNextAvailableTicketQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNextAvailableTicketQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNextAvailableTicketQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetNextAvailableTicketQuery(baseOptions?: Apollo.QueryHookOptions<GetNextAvailableTicketQuery, GetNextAvailableTicketQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNextAvailableTicketQuery, GetNextAvailableTicketQueryVariables>(GetNextAvailableTicketDocument, options);
      }
export function useGetNextAvailableTicketLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNextAvailableTicketQuery, GetNextAvailableTicketQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNextAvailableTicketQuery, GetNextAvailableTicketQueryVariables>(GetNextAvailableTicketDocument, options);
        }
export function useGetNextAvailableTicketSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetNextAvailableTicketQuery, GetNextAvailableTicketQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetNextAvailableTicketQuery, GetNextAvailableTicketQueryVariables>(GetNextAvailableTicketDocument, options);
        }
export type GetNextAvailableTicketQueryHookResult = ReturnType<typeof useGetNextAvailableTicketQuery>;
export type GetNextAvailableTicketLazyQueryHookResult = ReturnType<typeof useGetNextAvailableTicketLazyQuery>;
export type GetNextAvailableTicketSuspenseQueryHookResult = ReturnType<typeof useGetNextAvailableTicketSuspenseQuery>;
export type GetNextAvailableTicketQueryResult = Apollo.QueryResult<GetNextAvailableTicketQuery, GetNextAvailableTicketQueryVariables>;
export const LockTicketDocument = gql`
    mutation LockTicket($id: String!) {
  lockTicket(id: $id) {
    ...TicketFields
  }
}
    ${TicketFieldsFragmentDoc}`;
export type LockTicketMutationFn = Apollo.MutationFunction<LockTicketMutation, LockTicketMutationVariables>;

/**
 * __useLockTicketMutation__
 *
 * To run a mutation, you first call `useLockTicketMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLockTicketMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [lockTicketMutation, { data, loading, error }] = useLockTicketMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useLockTicketMutation(baseOptions?: Apollo.MutationHookOptions<LockTicketMutation, LockTicketMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LockTicketMutation, LockTicketMutationVariables>(LockTicketDocument, options);
      }
export type LockTicketMutationHookResult = ReturnType<typeof useLockTicketMutation>;
export type LockTicketMutationResult = Apollo.MutationResult<LockTicketMutation>;
export type LockTicketMutationOptions = Apollo.BaseMutationOptions<LockTicketMutation, LockTicketMutationVariables>;
export const SkipTicketDocument = gql`
    mutation SkipTicket($id: String!) {
  skipTicket(id: $id) {
    ...TicketFields
  }
}
    ${TicketFieldsFragmentDoc}`;
export type SkipTicketMutationFn = Apollo.MutationFunction<SkipTicketMutation, SkipTicketMutationVariables>;

/**
 * __useSkipTicketMutation__
 *
 * To run a mutation, you first call `useSkipTicketMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSkipTicketMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [skipTicketMutation, { data, loading, error }] = useSkipTicketMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSkipTicketMutation(baseOptions?: Apollo.MutationHookOptions<SkipTicketMutation, SkipTicketMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SkipTicketMutation, SkipTicketMutationVariables>(SkipTicketDocument, options);
      }
export type SkipTicketMutationHookResult = ReturnType<typeof useSkipTicketMutation>;
export type SkipTicketMutationResult = Apollo.MutationResult<SkipTicketMutation>;
export type SkipTicketMutationOptions = Apollo.BaseMutationOptions<SkipTicketMutation, SkipTicketMutationVariables>;
export const HandleTicketDocument = gql`
    mutation handleTicket($id: String!) {
  handleTicket(id: $id) {
    ...TicketFields
  }
}
    ${TicketFieldsFragmentDoc}`;
export type HandleTicketMutationFn = Apollo.MutationFunction<HandleTicketMutation, HandleTicketMutationVariables>;

/**
 * __useHandleTicketMutation__
 *
 * To run a mutation, you first call `useHandleTicketMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useHandleTicketMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [handleTicketMutation, { data, loading, error }] = useHandleTicketMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useHandleTicketMutation(baseOptions?: Apollo.MutationHookOptions<HandleTicketMutation, HandleTicketMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<HandleTicketMutation, HandleTicketMutationVariables>(HandleTicketDocument, options);
      }
export type HandleTicketMutationHookResult = ReturnType<typeof useHandleTicketMutation>;
export type HandleTicketMutationResult = Apollo.MutationResult<HandleTicketMutation>;
export type HandleTicketMutationOptions = Apollo.BaseMutationOptions<HandleTicketMutation, HandleTicketMutationVariables>;
export const UpdateTicketDocument = gql`
    mutation UpdateTicket($updateTicketDto: UpdateTicketDto!) {
  updateTicket(updateTicketDto: $updateTicketDto) {
    ...TicketFields
  }
}
    ${TicketFieldsFragmentDoc}`;
export type UpdateTicketMutationFn = Apollo.MutationFunction<UpdateTicketMutation, UpdateTicketMutationVariables>;

/**
 * __useUpdateTicketMutation__
 *
 * To run a mutation, you first call `useUpdateTicketMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTicketMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTicketMutation, { data, loading, error }] = useUpdateTicketMutation({
 *   variables: {
 *      updateTicketDto: // value for 'updateTicketDto'
 *   },
 * });
 */
export function useUpdateTicketMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTicketMutation, UpdateTicketMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTicketMutation, UpdateTicketMutationVariables>(UpdateTicketDocument, options);
      }
export type UpdateTicketMutationHookResult = ReturnType<typeof useUpdateTicketMutation>;
export type UpdateTicketMutationResult = Apollo.MutationResult<UpdateTicketMutation>;
export type UpdateTicketMutationOptions = Apollo.BaseMutationOptions<UpdateTicketMutation, UpdateTicketMutationVariables>;
export const AddTicketCommentDocument = gql`
    mutation AddTicketComment($addTicketCommentDto: AddTicketCommentDto!) {
  addTicketComment(addTicketCommentDto: $addTicketCommentDto) {
    ...TicketFields
  }
}
    ${TicketFieldsFragmentDoc}`;
export type AddTicketCommentMutationFn = Apollo.MutationFunction<AddTicketCommentMutation, AddTicketCommentMutationVariables>;

/**
 * __useAddTicketCommentMutation__
 *
 * To run a mutation, you first call `useAddTicketCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTicketCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTicketCommentMutation, { data, loading, error }] = useAddTicketCommentMutation({
 *   variables: {
 *      addTicketCommentDto: // value for 'addTicketCommentDto'
 *   },
 * });
 */
export function useAddTicketCommentMutation(baseOptions?: Apollo.MutationHookOptions<AddTicketCommentMutation, AddTicketCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddTicketCommentMutation, AddTicketCommentMutationVariables>(AddTicketCommentDocument, options);
      }
export type AddTicketCommentMutationHookResult = ReturnType<typeof useAddTicketCommentMutation>;
export type AddTicketCommentMutationResult = Apollo.MutationResult<AddTicketCommentMutation>;
export type AddTicketCommentMutationOptions = Apollo.BaseMutationOptions<AddTicketCommentMutation, AddTicketCommentMutationVariables>;