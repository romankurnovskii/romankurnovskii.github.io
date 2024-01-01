import { useEffect, useState, useRef } from "react";
import { createRoot } from "react-dom/client";

const divRender = "_react_leetcode_grid_"; // Make sure this matches the ID of your root div element

const CELL_WIDTH = 50;

const Matrix = () => {
  const [cellsCount, setCellsCount] = useState(3100); // Total numbers
  const [columns, setColumns] = useState(10);
  const [leetCodeProblems, setLeetCodeProblems] = useState({});
  const matrixRef = useRef(null); // Ref to the matrix container

  useEffect(() => {
    const updateColumns = () => {
      const matrixWidth = matrixRef.current.offsetWidth; // Get the current width of the matrix container
      const cellWidth = CELL_WIDTH + 2; // width + 1px border on each side
      const newColumns = Math.floor(matrixWidth / cellWidth);
      setColumns(newColumns); // Update the number of columns based on the parent's width
    };

    window.addEventListener("resize", updateColumns);
    updateColumns(); // Initial update

    const leetCodeProblemsUrl =
      "https://romankurnovskii.com/leetcode-problems.json";
    fetch(leetCodeProblemsUrl)
      .then((response) => response.json())
      .then((data) => setLeetCodeProblems(data))
      .then(() => setCellsCount(Math.max(Object.keys(data)) + 50))
      .catch((error) =>
        console.error("Failed to load LeetCode problems:", error),
      );

    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const getCellStyle = (number) => {
    const problemInfo = leetCodeProblems[number.toString()];
    const _cellStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "30px",
      border: "1px solid #ccc",
      width: CELL_WIDTH + "px",
      backgroundColor: "#fff",
    };

    if (!problemInfo || !problemInfo.languages[userLang]) {
      return _cellStyle;
    }

    if (problemInfo && problemInfo.difficulty === "Easy") {
      _cellStyle.backgroundColor = "#ffb800";
      return _cellStyle;
    }
    if (problemInfo && problemInfo.difficulty === "Medium") {
      _cellStyle.backgroundColor = "#1cb8b8";
      return _cellStyle;
    }
    if (problemInfo && problemInfo.difficulty === "Hard") {
      _cellStyle.backgroundColor = "#f63636";
      return _cellStyle;
    }
    return _cellStyle;
  };

  const numbers = Array.from({ length: cellsCount }, (_, i) => i + 1);

  return (
    <div
      ref={matrixRef}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, ${CELL_WIDTH}px)`,
        gap: "1px",
      }}
    >
      {numbers.map((number, index) => {
        const cellStyle = getCellStyle(number);
        const problemInfo = leetCodeProblems[number.toString()];
        let cell = <>{number}</>;
        if (problemInfo && problemInfo.languages[userLang]) {
          cell = (
            <a
              href={problemInfo.languages[userLang]} // userLang - global var
              target="_blank"
              rel="noopener noreferrer"
            >
              {number}
            </a>
          );
        }
        return (
          <div key={index} style={cellStyle}>
            {cell}
          </div>
        );
      })}
    </div>
  );
};

const App = () => {
  return (
    <div className="App" style={{ width: "100%", margin: "auto" }}>
      <Matrix />
    </div>
  );
};

const container = document.getElementById(divRender);
const root = createRoot(container);
root.render(<App />);
