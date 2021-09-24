import GlobalStyle from "./Styles/global"
import Routes from "./Routes/index"
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify'

function App() {
  return (
    <>
    <GlobalStyle />
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
    <Routes />
    </>
  );
}

export default App;
