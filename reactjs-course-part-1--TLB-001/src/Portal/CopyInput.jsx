import React from "react";
import PopupContent from "./PopupContent";

const CopyInput = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(inputValue).then(() => {
      console.log("Text copied to clipboard");
      setCopied(true);
      setTimeout(() => setCopied(false), 5000); // Reset copied state after 2 seconds
    })
  };
  return (
    <div>
      <h1>Copy Input Example</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something here..."
      />
      <button
        onClick={
          handleCopy
          //     () => {
          //   navigator.clipboard.writeText(inputValue);
          //   setCopied(true);
          //   setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
          // }
        }
      >
        Copy to Clipboard
      </button>
      <PopupContent copied={copied} />
    </div>
  );
};

export default CopyInput;
