import { useState, useCallback, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //Button Color
  const [buttonColor, setButtonColor] = useState("bg-blue-800");


  //useRef Hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*-_+=[]{}~`?";
    }

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {

    // passwordRef.current?.setSelectionRange(0,10);

    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);

    //button color change
    setButtonColor("bg-red-600");

    // Reset button color after 2 seconds
    setTimeout(() => setButtonColor("bg-blue-800"), 2000);

  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-5 pt-5 mt-10 text-orange-500 bg-gray-700 ">
        <h1 className="text-center text-white text-xl">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-5 px-4 py-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 rounded-l-md"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className={`outline-none  text-white px-3 py-0.5 shrink-0 rounded-r-md ${buttonColor}`}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-2">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="cursor-pointer mx-2 my-2 mb-10"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="my-2 mx-2 mb-10">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-2 mx-2 my-2 mb-10">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-2 mx-2 my-2 mb-10">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
