import React from 'react';
import { Admin, Resource, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './Users';
import { PostEdit } from './Posts';






const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dataProvider={dataProvider}>

    <Resource name="posts" list={PostEdit} edit={EditGuesser} />
    <Resource name="users" list={UserList} />
  </Admin>
);



export default App;
