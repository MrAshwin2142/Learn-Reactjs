import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InfiniteScroll from './components/InfiniteScroll';
import MainContainer from './components/MainContainer';
import Pagination from './components/Pagination';
import Loading from './components/Loading';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContainer />}>
          <Route index element={<Loading />} />
          <Route path="pagination" element={<Pagination />} />
          <Route path="infintescroll" element={<InfiniteScroll />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
