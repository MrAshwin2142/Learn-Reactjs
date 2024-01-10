import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InfiniteScroll from './components/InfiniteScroll';
import MainContainer from './components/MainContainer';
import Pagination from './components/Pagination';
import FormValidation from './components/FormValidation';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContainer />}>
          <Route index element={<Home />} />
          <Route path="pagination" element={<Pagination />} />
          <Route path="infintescroll" element={<InfiniteScroll />} />
          <Route path="formvalidation" element={<FormValidation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
