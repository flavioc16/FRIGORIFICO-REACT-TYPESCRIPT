
import { AuthProvider } from "./contexts/AuthContext";

import { BrowserRouter } from 'react-router-dom';
import AppRoutes from "./routes";

//Alert React Toastify
import { ToastContainer } from 'react-toastify'
import './app.css';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
	
	return (
		<>
      <AuthProvider>
        <BrowserRouter>
            <AppRoutes/>
            <ToastContainer autoClose={3000}/>
        </BrowserRouter>
      </AuthProvider>
		</>
	);
};

export default App;
