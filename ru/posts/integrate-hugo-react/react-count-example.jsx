import { useState } from "react";
import { createRoot } from "react-dom/client";

const divRender = "_react_count_example_"; // "__react_block_render__";

const MyCountButton = () => {
  const [count, setCount] = useState(Math.round(Math.random() * 100));
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Кнопка {count}</button>
    </>
  );
};

const container = document.getElementById(divRender);
const root = createRoot(container);
root.render(<MyCountButton />);
