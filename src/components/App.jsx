import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [titleName, setNewName] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function handleClick(event) {
    setNewName(name);
  }

  // Managed compoenent for  Input value attribute. !!!! one source to manage it.
  // if <form> is use as a wrap, use the onSubmit and event.preventDefault()
  return (
    <div className="container">
      <h1> Hello {titleName}</h1>
      <input
        type="text"
        value={name}
        id="inputField"
        onChange={handleChange}
        placeholder="What's your name?"
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
