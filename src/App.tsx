import './App.css';
import TodosContext from './Pages/TodosContex';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Pages/Layout';
import PageNotFound from './Pages/PageNotFound';
import Home from './Pages/Home';
import TodosRedux from './Pages/TodosRedux';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
          </Route>
          <Route path="/todosredux" element={<Layout />} >
            <Route index element={<TodosRedux />} />
          </Route>
          <Route path="/todoscontext" element={<Layout />}>
            <Route index element={<TodosContext />} />
            <Route path=':number' element={<TodosContext />} />
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
