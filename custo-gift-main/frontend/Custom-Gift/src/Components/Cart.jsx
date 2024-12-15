import React, { useEffect, useState } from "react";
import Paper from '@mui/material/Paper';
import { TableContainer } from '@mui/material';
import { Table } from '@mui/material';
import { TableHead } from '@mui/material';
import { TableRow } from '@mui/material';
import { TableCell } from '@mui/material';
import { TableBody } from '@mui/material';
import axios from "axios";
import Button from '@mui/material/Button';
import Navbar from "./Navbar";
import { useSelector } from 'react-redux';
import Newloader from "./Newloader";
const Cart = () => {
  const [loading,setLoad]=useState(true);
  useEffect(()=>{

    const timer=setTimeout(()=>{
      setLoad(false);
    },3000);
    return ()=>clearTimeout(timer);
  },[])
  const [rows, setRows] = useState([]);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const fetch = async () => {
      if (user && user.name) {
        try {
          const res = await axios.get(`http://localhost:8080/order/${user.name}`);
          setRows(res.data);
          console.log(res.data);
        } catch (error) {
          console.error("Error fetching orders:", error);
        }
      }
    };
    fetch();
  }, [user]);

  const handleDelete = async (row) => {
    const id = row.id;
    console.log('Deleting product with ID:', id);
    if (typeof id !== 'number') {
      console.error('Invalid ID type:', id);
      return;
    }
    try {
      await axios.delete(`http://localhost:8080/order/${id}`);
      setRows(rows.filter((row) => row.id !== id));
    } catch (error) {
      console.error("There was an error deleting the product!", error);
    }
  };

  const columns = [
    { id: 'id', label: 'Sno', minWidth: 50, align: 'left' },
    { id: 'product', label: 'Name', minWidth: 100, align: 'left' },
    { id: 'price', label: 'Price', minWidth: 100, align: 'left' },
    { id: 'date', label: 'Delivery Date', minWidth: 100, align: 'left' },
    { id: 'address', label: 'Delivery Address', minWidth: 100, align: 'left' },
    { id: 'delete', label: 'Delete', minWidth: 50, align: 'left' },
  ];

  return (   loading?
    (<><Newloader/></>):
    (
    <div className="del">
      <Navbar />
      <Paper>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    sx={{ backgroundColor: "gray" }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    if (column.id === 'delete') {
                      return (
                        <TableCell key={column.id} align={column.align}>
                          <Button
                            variant="contained"
                            sx={{ backgroundColor: "red" }}
                            onClick={() => handleDelete(row)}
                          >
                            Delete
                          </Button>
                        </TableCell>
                      );
                    }
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number'
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>)
  );
};

export default Cart;
