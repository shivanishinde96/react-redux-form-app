import React from 'react'
import './App.css';
import { CssBaseline} from '@material-ui/core';
import Header from './components/Header';
import ListProducts from './components/products/ListProducts';

function App() {
  return (
    <>
     <div>
       <Header/>
       <ListProducts/>
     </div>
     <CssBaseline/>
    </>
  );
}

export default App;
