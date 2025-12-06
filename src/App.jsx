import './App.css';
import HeroBanner from './components/HeroBanner/HeroBanner';
import Navbar from './pages/Shared/Navbar/Navbar';

function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      <Navbar isLoggedIn={false} />
      <HeroBanner />
    </div>
  );
}

export default App;
