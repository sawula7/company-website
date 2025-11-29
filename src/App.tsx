import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import {
  HomePage,
  ServicesPage,
  PortfolioPage,
  AboutPage,
  BlogPage,
  BlogPostPage,
  ContactPage,
} from './pages';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
