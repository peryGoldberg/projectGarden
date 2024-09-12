import './App.css';
import ProductList from './features/product/ProductList.js'
import NavBar from './features/NavBar';
import ShoppingCart from './features/order/ShoppingCart.js';
import OrderForm from './features/order/OrderForm.js';
import AddProduct from './features/product/AddProduct.js';
import ProductDetails from './features/product/ProductDetails.js';
import { Routes, Route } from 'react-router-dom';
import LogIn from './features/user/LogIn.js'
import SignOn from './features/user/SignOn.js'
import {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import {userIn} from './features/user/UserSlice.js'
import Home from './Home.js';
import UpdateItem from './features/product/UpdateItem.js'
import '@fontsource/roboto/400.css';
import '@fontsource/rubik/400.css';
import { createTheme } from '@mui/material/styles';
import { Protected } from './Protected.js';
import { useSelector } from 'react-redux';
function App() {
  let user = useSelector(us => us.currentUser.currentUser)
//   const theme = createTheme({
//     palette: {
//       primary: {
//         light: '#9c27b0',
//         main: '#9c27b0',
//         dark: '#9c27b0',
//         contrastText: '#2B3944',
//       }
//     }
// });

  let dispatch=useDispatch()
  useEffect(() => {
    let u = localStorage.getItem("myUser");
    if(u)
    dispatch(userIn(JSON.parse(u)));
  }, []);
  return (
    <>
  

      <NavBar />
      <Routes>
        <Route path='' element={<Home/>}/>
      <Route path="list" element={<ProductList />}>
        <Route path=":id" element={<ProductDetails />} />
      </Route>
        <Route path="ShoppingCart" element={<ShoppingCart />} />
        <Route path="OrderForm" element={<OrderForm />} />
         <Route path="LogIn" element={<LogIn />} /> 
         <Route path="SignOn" element={<SignOn />} /> 
         {/* <Route path="AllOrders" element={ <Protected user={user} > <AllOrders/> </Protected>}  />  */}
         <Route path="UpdateItem" element={<Protected user={user} > <UpdateItem/> </Protected>} /> 
         <Route path='AddProduct' element={<Protected user={user} > <AddProduct /> </Protected>} />
         {/* <Route path='AllOrdersUser' element={<Protected user={user} > <AllOrdersUser /> </Protected>} /> */}
      </Routes>


     
         
           
    </>
  );
}

export default App;
