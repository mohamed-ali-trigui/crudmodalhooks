import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import ArticlesApp from './components/articles/ArticlesApp';
import Navscroll from './components/Navscroll';
import CategorieApp from './components/categories/CategorieApp';
import Scategorie from './components/scategories/Scategorie';
function App() {
  return (
    <>

    <Router>
    <Navscroll/>
      <Routes>
        <Route path="/articles" element={<ArticlesApp/>}/>
        <Route path='/categories' element={<CategorieApp/>}/>
        <Route path='/scategories' element={<Scategorie/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
