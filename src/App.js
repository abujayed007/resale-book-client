import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes/Routes';

function App() {
  return (
    <div className='bg-slate-200'>
      <RouterProvider router={routes}>

      </RouterProvider>
    </div>
  );
}

export default App;
