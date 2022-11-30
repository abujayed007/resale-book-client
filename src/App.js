import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes/Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='bg-slate-200'>
      <ToastContainer />
      <RouterProvider router={routes}>
      </RouterProvider>
    </div>
  );
}

export default App;
