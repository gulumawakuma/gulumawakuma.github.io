import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'sonner';
import RouteFallback from './components/ui/RouteFallback';
import { useTheme } from './hooks/useTheme';

const Home = lazy(() => import('./pages/Home.jsx'));
const CaseStudies = lazy(() => import('./pages/CaseStudies.jsx'));
const CaseStudyDetail = lazy(() => import('./pages/CaseStudyDetail.jsx'));
const PageNotFound = lazy(() => import('./lib/PageNotFound'));

function AppContent() {
  const { theme } = useTheme();

  return (
    <>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
      <Toaster theme={theme} position="bottom-right" richColors />
    </>
  );
}

function App() {
  return <AppContent />;
}

export default App;
