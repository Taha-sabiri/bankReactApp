import './App.css';
import IconList from './IconList';
import LogSec from './LogSec';
import TabSec from './TabSec';
import Nav from './Nav';
import NavLine from './NavLine';
import Slider from './Slider';


function App() {
  return (
    <div className="App">
      <NavLine/>
      <Nav/>
      <Slider/>
      <LogSec/>
      <IconList/>
      <TabSec/>

    </div>
  );
}

export default App;
