import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://152.228.215.94:83/api",
        headers:{
            Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcnYiOiJtZW1iZXIiLCJ0eXBlIjoiYWNjZXNzIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdC9hdXRoL2xvZ2luIiwic3ViIjoiWmVyYSBUZXN0b3YiLCJleHAiOjE2NzEwMTI0MTAsIm5iZiI6MTY3MTAwODgxMCwiaWF0IjoxNjcxMDA4ODEwLCJqdGkiOiIyIn0.xgbWkOFfynPcqjy5xYlceiv1ifU0EJ_ObfRwfcjiXBk"
        },
  cache: new InMemoryCache()
});


export default function App({ Component, pageProps }: AppProps) {

  return (
      <ApolloProvider client={client}>
      <Component {...pageProps} />
      </ApolloProvider>
  )}
