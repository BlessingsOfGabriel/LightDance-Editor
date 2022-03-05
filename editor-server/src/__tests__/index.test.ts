import ApolloClient from "apollo-boost";
import 'cross-fetch/polyfill';

import { MockData } from '../__test_data__/mock_data/index';
import { MockResult } from '../__test_data__/mock_result/index';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  request: (operation) => {
    operation.setContext({
      headers: {
        userID: "B09901069",
        name: "1234"
      }
    });
  },
  onError: (e) => { console.log(e) }
});

describe('End-to-End Test', () => {
  it('Test0: Query-Initialize Data', async () => {
    const response = await client.query(MockData.Initialize);
    expect(response.errors).toBeUndefined();
    expect(response.data).toBe(MockResult.Initialize);
  });
});
