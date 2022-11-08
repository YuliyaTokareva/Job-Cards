import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './Home';
import Post from './cards/components/post/Post';
import store from './store.js';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path=":id" element={<Post />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
