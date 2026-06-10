import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'sonner';
import { useTheme } from './hooks/useTheme';
import PageNotFound from './lib/PageNotFound';
import Home from './pages/Home.jsx'

function AppContent() {
  const { theme } = useTheme();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toaster theme={theme} position="bottom-right" richColors />
    </>
  );
}

function App() {
  return <AppContent />;
}

export default App
