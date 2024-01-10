import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InfiniteScroll from './components/InfiniteScroll';
import MainContainer from './components/MainContainer';
import Pagination from './components/Pagination';
import Loading from './components/Loading';
import FormValidation from './components/FormValidation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContainer />}>
          <Route index element={<Loading />} />
          <Route path="pagination" element={<Pagination />} />
          <Route path="infintescroll" element={<InfiniteScroll />} />
          <Route path="formvalidation" element={<FormValidation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
