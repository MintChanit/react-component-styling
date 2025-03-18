import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <Button variant="Primary" name="Primary" />
        <Button variant="Secondary" name="Secondary" />
        <Button variant="Error" name="Error" />
        <Button variant="Success" name="Success" />
      </div>
      <hr />
      <div className="alert-components-section">
        <Alert variant="Error" message=" This is error alert box" />
        <Alert variant="Warning" message=" This is warning alert box" />
        <Alert variant="Info" message=" This is info alert box" />
        <Alert variant="Success" message=" This is success alert box" />
      </div>
    </div>
  );
}

export default App;

