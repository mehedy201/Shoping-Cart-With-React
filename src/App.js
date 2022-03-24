import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      {/* Header Components  */}
      <Header></Header>

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
