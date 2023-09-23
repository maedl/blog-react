import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './routes/Home';
import { About } from './routes/About';
import { Articles } from './routes/Articles';
import { Article } from './routes/Article';

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <h1>Blog</h1>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/article/:articleId" element={<Article />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
