import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import Element from './components/element';

function App() {
  const [value, setValue] = useState("");
  const [currpop, setPop] = useState("");
  const [currtop, setTop] = useState("");
  const [stack, setStack] = useState("");

  const handleChange =(e) => {
    var curr = e.target.value;
    setValue(curr);
  };
  const getTop = () => {
    if(stack.length === 0) {
      alert("Stack is empty");
      return;
    }
    var top = stack[0];
    setTop(top);
  };
  const push = () => {
    if(value === ""){
      alert("Please enter a value");
      return;
    }
    setStack([value, ...stack]);
  };
  const pop = () => {
    if(stack.length === 0){
      alert("Stack is empty");
      return;
    }
    var top = stack[0];
    var arr = stack.slice();
    arr.shift();
    setStack(arr);
    setPop(top);
  };
  return (
    <div className="container">
      <h1 className="header">Stack</h1>
      <div className="row">
        <div className="col md-6 stack">
          { stack.map((item, key) =>(
          <Element key={key} val={item}/>
          ))}
        </div>
        <div className="col md-3 operation">
          <h2>Operations</h2>
          <div className="input-group push">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={push}>
              PUSH
            </button>
            <input type="text" value={value} onChange={handleChange} className="form-control" />
          </div>
          <div className="input-group pop">
            <button onClick={pop} className="btn btn-outline-secondary" type="button" id="button-addon2">
              POP
            </button>
            <input value={currpop} type="text" disabled className="form-control" />
          </div>
          <div className="input-group top">
            <button onClick={getTop} className="btn btn-outline-secondary" type="button" id="button-addon2">
              TOP
            </button>
            <input value={currtop} type="text" disabled className="form-control" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
