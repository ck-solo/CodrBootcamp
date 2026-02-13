import { useRef } from "react";

function UseRef() {
  const refer = useRef();

  const handleFocus = () => {
    refer.current.focus();
  };

  return (
    <div className="p-10 bg-amber-400">
      <input
        type="text"
        ref={refer}
        className="border-2"
        placeholder="Enter your name"
      />

      <button type="button" onClick={handleFocus}>
        Focus Input
      </button>
    </div>
  );
}

export default UseRef;
