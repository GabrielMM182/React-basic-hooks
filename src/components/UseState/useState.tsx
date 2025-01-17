import React from "react";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

const UseState = () => {
  const [count, setCount] = React.useState(0);
  const [inputValue, setInputValue] = React.useState("");
  const [validate, setValidate] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [type, setType] = React.useState("password");
  const [icon, setIcon] = React.useState(eyeOff);

  const handleToggle = () => {
    if (type==='password'){
       setIcon(eye);
       setType('text')
    } else {
       setIcon(eyeOff)
       setType('password')
    }
 }

  return (
    <div>
        <div>
        <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>Menos</button>

    <button onClick={() => {
        if (count > 0) {
            setCount(count - 1);
        } else {
            setCount(0);
        }
    }}>Menos</button>
      <button onClick={() => setCount(0)}>Zerar</button>
        </div>


      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={() => setInputValue("")}>limpar txt</button>
      <h2>{inputValue}</h2>

      <div>
           <div className="mb-4 flex">
              <input
                  type={type}
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
             />
             <span className="flex justify-around items-center" onClick={handleToggle}>
                  <Icon className="absolute mr-10" icon={icon} size={25}/>
              </span>
            </div>
         </div>

         <div>
            <button
                onClick={() => {
                    setValidate(!validate);
                }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                {validate ? "Validado" : "Validar"}
            </button>
            {validate && <h1>Validado</h1>}
         </div>
    </div>

    
  );
};

export default UseState;
