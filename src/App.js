import './App.css';
import Header from './components/Header';
import UseReducer from './components/UseReducer';
import UseState from './components/UseState';
import AppContext from './context/Context';

function App() {
  return (
    <AppContext>
      <header>
        <Header />
      </header>
      <main>
        <UseState />
        <UseReducer />
      </main>
      <footer>

      </footer>
    </AppContext>
  );
}

export default App;
