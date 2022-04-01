import { useContext } from 'react';
import './App.css';
import Login from './components/Login';
import Messenger from './components/Messenger';
import { userContext } from './Context/context';


function App() {
  let {user} = useContext(userContext);
  console.log(user)
  return (
      <div className="app w-screen h-screen">
        {user ? 
          <Messenger />
          :
          <Login />
        }
      </div>
  );
}

export default App;
