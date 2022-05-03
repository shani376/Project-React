import logo from './logo.svg';
import './App.css';
import { About } from './components/About';
import { SignIn } from './components/Signin';
import { UserContext } from './context/user.context';
import { Login } from './components/Login';

function App() {
  return (
    <div className="App">
      <About/>
      {/* <UserContext>
        <SignIn/>
      </UserContext> */}
      <Login />
    </div>
  );
}

export default App;
