import logo from './logo.svg';
import './App.css';
import Counter from './hook/UseStateEx';
import TimerFunction,{UserList,Count,Cleanup} from './hook/UseEffectEx';
import {Counter_ref,InputFocus,InputSample,PreviousValue} from './hook/UseRefEx'
import {Sol1,Exam} from './hook/Exam';

function App() {
  return (
    <div className="App">
      <PreviousValue />
    </div>
  );
}

export default App;
