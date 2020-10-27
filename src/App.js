
import Home from './pages/Home';
import Sidebar from './components/Sidebar/Sidebar';
import Routes from './config/Routes';

import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes />
    </div>
  );
}

export default App;
