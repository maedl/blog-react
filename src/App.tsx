import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './routes/Home';
import { About } from './routes/About';
import { Articles } from './routes/Articles';
import { Article } from './routes/Article';
import { Navigation } from './components/Navigation';
import { NotFound } from './routes/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/article/:articleId" element={<Article />} />
              <Route path="*" element={<NotFound componentType={'page'} />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
