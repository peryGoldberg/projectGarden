import ProductItem from '../product/ProductItem.js';
import { useEffect, useState } from 'react';
import { getAllProduct, getNumOfAllPages, getNumPages } from '../product/ProductApi';
import { Link, Outlet } from "react-router-dom";
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux';
import { Button } from '@mui/base';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import { TextField, Typography } from '@mui/material';
import { getAllorders } from './OrderApi.js';
const AllOrdersUser = () => {

    let admin = useSelector(us => us.currentUser.currentUser)?.token;
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        async function addSomeBags() {
            try {
                let res = await getAllorders(admin);
                setProducts(res.data);
                
            } catch (err) {
                console.log(err)
            }
        }
        addSomeBags();

    }, []);

    return ( 
        <div style={{ padding: '7% 3%', backgroundColor: 'rgba(243, 240, 240, 0.9)' }}>
        <ul style={{ direction: 'rtl' }}>
            {products.map(item => <li className='li' key={item._id}>               
           <Typography>{item.userId}</Typography>
           <Typography>{item.dueDate}</Typography>
           <Typography>{item.orderDate}</Typography>
           <Typography>{item.userId}</Typography>
     
           <Typography>{item.address}</Typography>
           <Typography>{item.isSetOff}</Typography>
            </li>)}
        </ul>
    </div>
     );
}
 
export default AllOrdersUser;