import { useState } from "react";

const messages = [
  "Step 1: Learn React",
  "Step 2: Practice",
  "Step 3: Master React",
];

function App() {
  return (
    <>
      <Steps />
    </>
  );
}

function Steps() {
  const [steps, setSteps] = useState(1);
  const [open, setOpen] = useState(true);

  function handlePrevious() {
    if (steps > 1) setSteps((s) => s - 1);
  }

  function handleNext() {
    if (steps < 3) setSteps((s) => s + 1);
  }
  return (
    <div className="steps">
      <button className="close" onClick={() => setOpen((o) => !o)}>
        X
      </button>

      {open && (
        <>
          <div className="numbers">
            <div className={steps >= 1 ? "active" : ""}>1</div>
            <div className={steps >= 2 ? "active" : ""}>2</div>
            <div className={steps >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">{messages[steps - 1]}</p>

          <div className="buttons">
            <Button onClick={handlePrevious}>
              <span>⏮️</span>Previous
            </Button>
            <Button onClick={handleNext}>
              Next <span>⏭️</span>
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

function Button({ onClick, children }) {
  return (
    <button onClick={onClick} style={{ backgroundColor: "#7950f2" }}>
      {children}
    </button>
  );
}

export default App;
