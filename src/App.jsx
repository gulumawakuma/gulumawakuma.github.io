import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'sonner';
import PageNotFound from './lib/PageNotFound';
import Home from './pages/Home.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toaster theme="dark" position="bottom-right" richColors />
    </>
  );
}

export default App