import ApolloService from "ember-apollo-client/services/apollo";
import { inject as service } from "@ember/service";
import { setContext } from "apollo-link-context";
import { onError } from 'apollo-link-error'
import { createUploadLink } from 'apollo-upload-client'
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import fetch from 'fetch'
import ENV from '../../config/environment'

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: {
    __schema: {
      types: [], // no types provided
    },
  },
});


export default class ExtendedApolloService extends ApolloService {

  @service router 
  @service session

  clientOptions() {
    return {
      link: this.link(),
      cache: new InMemoryCache({fragmentMatcher}),
    };
  }

  _replaceWithLogin() {
    this.session.invalidate()
    this.router.replaceWith('login')
  }

  link() {
    const httpLink = createUploadLink({
      uri: ENV.apollo.apiURL,
      fetch: fetch
    });

    const authLink = setContext(() => {
      const { token } = this.get('session.data.authenticated');
      let headers = {}
      if (token) {
        headers["Authorization"] = `Bearer ${token}`
      }
      return { headers }
    });

    const resetToken = onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        for (let err of graphQLErrors) {
          switch (err.extensions.code) {
            case 'UNAUTHENTICATED':
              this._replaceWithLogin()
          }
        }
      }
      if (networkError && networkError.statusCode === 401) {
        // remove cached token on 401 from the server
        this._replaceWithLogin()
      }
    });

    return authLink.concat(resetToken).concat(httpLink);
  }
}