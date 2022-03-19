import React from "react";

interface Props {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  addTodo: (e: React.FormEvent<EventTarget>) => void;
}

const InputFiels = ({ input, setInput, addTodo }: Props) => {
  return (
    <div id="inputFieldArea">
      <form id="inputForm" onSubmit={addTodo}>
        <input
          value={input}
          onChange={(ele) => setInput(ele.target.value)}
          type="text"
          id="input-field"
          placeholder="Write Your Task . . ."
        />
        <button type="submit" id="addButton">
          +
        </button>
      </form>
    </div>
  );
};

export default InputFiels;
