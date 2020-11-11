import './App.css';
import Main from './Main';
import Info from './Info';
import Footer from './Footer';
import Background from './Background';

function App() {
  return (
    <div className="page">
      <div className="page__container">
        <Main />
        <Info />
        <Footer />
        <Background />
      </div>
    </div>
  );
}

export default App;
