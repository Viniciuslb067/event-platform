import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4psowku29bc01xtd67cbzhg/master",
  cache: new InMemoryCache(),
});
