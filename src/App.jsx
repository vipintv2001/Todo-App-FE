import "./App.css";
import Todo from "./Todo";
import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <>
      <Todo />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
