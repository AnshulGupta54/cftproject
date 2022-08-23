import Home from './components/Home';
import './App.css';
import Categories from './components/Categories';
import MainNavigation from './components/Layout/MainNavigation';
import Footer from './components/Footer';


function App() {
  return (
    <div >
      <MainNavigation />
      <Categories />
      <main>
        <Home />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
