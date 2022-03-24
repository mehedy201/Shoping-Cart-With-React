import './App.css';
import Cover from './components/Cover/Cover';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      {/* Header Components  */}
      <Header></Header>
      <Cover></Cover>

      {/* Main Container Shop and Cart  */}
      <div className="container">
        {/* Shop Components  */}
        <div className="product__cart__components">
          <Shop></Shop>
        </div>
      </div>
    </div>
  );
}

export default App;
