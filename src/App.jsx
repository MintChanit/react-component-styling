import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";
import 'boxicons'


function App() {
  return (
    <div className="App">
      <div className="button-components-section flex flex-col gap-2">
        {/* Render ตัว Button 2 แบบ */}
        <Button type = "primary"/>
        <Button type = "secondary"/>
      </div>
      <hr />
      <div className="alert-components-section flex flex-col gap-4 mt-5 justify-center items-center">
        {/* Render ตัว Alert 4 แบบ */}
        <Alert type = "error"/>
        <Alert type = "warning"/>
        <Alert type = "info"/>
        <Alert type = "success"/>
      </div>
    </div>
  );
}

export default App;
