import React from "react";

export default function about() {
  return (
    <div className="container mt-5">
      <h2>About WordCraft</h2>
      WordCraft is a simple and efficient text editing tool designed to
      help you quickly modify the case of your text. Whether you need to convert
      text to lowercase, uppercase, or capitalize each word, this tool makes it
      easy. Main Features:
      <ul className="my-4">
        <li>Lower Case – Convert all text to lowercase.</li>
        <li> Upper Case – Transform text to uppercase.</li>
        <li>Capitalized Case – Capitalize the first letter of each word.</li>
        <li>Copy Text – Quickly copy the modified text to your clipboard.</li>
        <li>Clear Text – Erase the text with a single click.</li>
        <li>Live Word, Letter & Sentence Count – Get real-time stats as you type.</li>
      </ul>  
      <p className="mt-5">This tool is designed with a user-friendly interface and
      supports both light and dark modes, ensuring a seamless experience. Let me
      know if you need any modifications! 🚀</p>
    </div>
  );
}
