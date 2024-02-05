import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout.jsx';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact.jsx';
import Home from './Components/Home/Home';
import Error from './Components/Error/Error';

function App() {

  let routes = createBrowserRouter ([
    {path : '' ,element : <Layout/> , children :[
      {index : true , element :  < Home />},
      {path : 'about' , element : <About />},
      {path : 'portfolio' , element : <Portfolio />} ,
      {path : 'contact' , element : <Contact/>},
      {path : '*' ,element : <Error/>}
    ]}
  ]);
  return (
    <>
    <RouterProvider router={routes}></RouterProvider>
    
    </>
  );
}

export default App;
