import React, { useState } from "react";

export default function Home(props) {
  const [input, setInput] = useState("Type or paste your content here");
  const lowerCase = () => {
    setInput(input.toLowerCase());
  };

  const upperCase = () => {
    setInput(input.toUpperCase());
  };

  const capitalizedCase = () => {
    if (!input.trim()) return;
    const words = input.split(" ").map(word => 
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
    setInput(words.join(" "));
  };

  const clearText = () => {
    setInput("");
  };

  const copyText = () => {
    if (!input) return;
    navigator.clipboard.writeText(input);
    alert("Text copied to clipboard!");
  };

  const wordCount = input.trim() ? input.trim().split(/\s+/).length : 0;
  const letterCount = input.length;
  const sentenceCount = input.trim() ? input.split(/[.!?]+/).filter(Boolean).length : 0;
  return (
    <div className="container mt-5 home">
      <h1 className="text-start mb-3">WordCraft</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="12"
          placeholder="Type or paste your content here"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
      </div>
      <button className={`btn btn-${props.mode =="dark"? "light":"dark"} start-0 mb-3 mx-2`} onClick={lowerCase}>
        Lower Case
      </button>
      <button className={`btn btn-${props.mode =="dark"? "light":"dark"} start-0 mb-3 mx-2`} onClick={upperCase}>
        Upper Case
      </button>
      <button
        className={`btn btn-${props.mode =="dark"? "light":"dark"} start-0 mb-3 mx-2`}
        onClick={capitalizedCase}
      >
        Capitalized Case
      </button>
      <button className={`btn btn-${props.mode =="dark"? "light":"dark"} start-0 mb-3 mx-2`} onClick={copyText}>
          Copy
        </button>
      <button className={`btn btn-${props.mode =="dark"? "light":"dark"} start-0 mb-3 mx-2`} onClick={clearText}>
          Clear
        </button>
      <p className="mt-3">Word Count: {wordCount}  |  Letter Count: {letterCount}  |  Sentence Count: {sentenceCount}</p>
    </div>
  );
}
