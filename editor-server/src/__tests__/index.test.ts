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

describe('Test0: Initialize Data', () => {
  it('Query: Initialize Data', async () => {
    const response = await client.query(MockData.All_Query);
    expect(response.errors).toBeUndefined();
    expect(response.data).toEqual(MockResult.Initialize);
  });
});

/*describe('Test1: Add or Edit Control Frame', () => {
  it('Mutate: Add Control Frame', async () => {
    const response = await client.mutate(MockData.Add_Control_Frame);
    expect(response.errors).toBeUndefined();
    expect(response.data).toEqual(MockResult.Add_Control_Frame_Mutate);
  });

  it('Query: Add Control Frame', async () => {
    const response = await client.query(MockData.All_Query);
    expect(response.errors).toBeUndefined();
    expect(response.data).toEqual(MockResult.Add_Control_Frame_Query);
  });

  it('Mutate: Edit Control Frame', async () => {
    const response = await client.mutate(MockData.Edit_Control_Frame);
    expect(response.errors).toBeUndefined();
    expect(response.data).toEqual(MockResult.Edit_Control_Frame_Mutate);
  });

  it('Query: Edit Control Frame', async () => {
    const response = await client.query(MockData.All_Query);
    expect(response.errors).toBeUndefined();
    expect(response.data).toEqual(MockResult.Edit_Control_Frame_Query);
  });
});

describe('Test2: Add or Edit Position Frame', () => {
  it('Mutate: Add Position Frame', async () => {
    const response = await client.mutate(MockData.Add_Position_Frame);
    expect(response.errors).toBeUndefined();
    expect(response.data).toEqual(MockResult.Add_Control_Position_Mutate);
  });

  it('Query: Add Position Frame', async () => {
    const response = await client.query(MockData.All_Query);
    expect(response.errors).toBeUndefined();
    expect(response.data).toEqual(MockResult.Add_Position_Frame_Query);
  });

  it('Mutate: Edit Position Frame', async () => {
    const response = await client.mutate(MockData.Edit_Position_Frame);
    expect(response.errors).toBeUndefined();
    expect(response.data).toEqual(MockResult.Edit_Position_Frame_Mutate);
  });

  it('Query: Edit Position Frame', async () => {
    const response = await client.query(MockData.All_Query);
    expect(response.errors).toBeUndefined();
    expect(response.data).toEqual(MockResult.Edit_Position_Frame_Query);
  });
});*/
