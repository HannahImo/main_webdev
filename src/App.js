import logo from './logo.svg';
import './App.css';
import Menuinfo from './dummy/Menuinfo';
import Picture from './dummy/image';
// import Page from './Loginform.jsx/page'


function App() {
  return (
    <div className="App">
      <Picture/>
      <Menuinfo/>
       
    <header className='app-header'/>
       
    <a 
       className='App-link'
       href='https:reactjs.org'
       target="-blank"
        rel="noopener noreferrer"> 
        </a>
    </div>
  );
}

export default App;
