"use client";
import { ReactNode, createContext, useContext, useMemo } from "react";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
  from,
} from "@apollo/client";
import { onError } from '@apollo/client/link/error';
import { AuthenticationContext } from "@/components/context/authentication-context";
import { toast } from 'react-toastify';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      toast(message)
    });
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
    // Handle network error (e.g., notify the user)
  }
});


interface ApolloContextProviderProps {
  children: ReactNode;
}

interface ApolloContext {
  apolloClient?: ApolloClient<NormalizedCacheObject>;
}

export const ApolloContext = createContext<ApolloContext>({});

function ApolloContextProvider({
  children,
}: ApolloContextProviderProps): JSX.Element {
  const { accessToken } = useContext(AuthenticationContext);
  const apolloClient = useMemo(
    () => {
      const httpLink = new HttpLink({ 
        uri: process.env.GRAPHQL_ENDPOINT,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },

       })

      const appLink = from([
          errorLink, httpLink
      ])
      return new ApolloClient({
        link: appLink,
        cache: new InMemoryCache(),

        
      })
    },
    [accessToken]
  );

  return (
    <ApolloContext.Provider
      value={{
        apolloClient,
      }}
    >
      <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
    </ApolloContext.Provider>
  );
}

export default ApolloContextProvider;
