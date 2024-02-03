import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InfiniteScroll from './components/infiniteScroll/InfiniteScroll';
import MainContainer from './components/MainContainer';
import Pagination from './components/pagination/Pagination';
import FormValidation from './components/formValidation/FormValidation';
import Home from './components/Home';
import Search from './components/search/Search';
import Counter from './components/counter/Counter';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContainer />}>
          <Route index element={<Home />} />
          <Route path="pagination" element={<Pagination />} />
          <Route path="infintescroll" element={<InfiniteScroll />} />
          <Route path="formvalidation" element={<FormValidation />} />
          <Route path="search" element={<Search />} />
          <Route path="counter" element={<Counter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
