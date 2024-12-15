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
import { useNavigate } from "react-router-dom";
import NN from './NN'
const Delete = () => {
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:8080/api/products');
        setRows(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("There was an error fetching the data!", error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    console.log('Deleting product with ID:', id);
    if (typeof id !== 'number') {
      console.error('Invalid ID type:', id);
      return;
    }
    try {
      await axios.delete(`http://localhost:8080/api/products/${id}`);
      setRows((prevRows) => prevRows.filter((row) => row.id !== id));
    } catch (error) {
      console.error("There was an error deleting the product!", error);
    }
  };

  const handleUpdate = (row) => {
    navigate('/add', { state: row });
  };

  const columns = [
    { id: 'id', label: 'Sno', minWidth: 50, align: 'left' },
    { id: 'name', label: 'Name', minWidth: 100, align: 'left' },
    { id: 'price', label: 'Price', minWidth: 100, align: 'left' },
    { id: 'image', label: 'image', minWidth: 100, align: 'left' },
    { id: 'description', label: 'description', minWidth: 100, align: 'left' },
    { id: 'delete', label: 'Delete', minWidth: 100, align: 'left' },
    { id: 'update', label: 'Update', minWidth: 100, align: 'left' },
  ];

  return (
    <div className="del">
      <NN/>
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
                            onClick={() => handleDelete(row.id)}
                          >
                            Delete
                          </Button>
                        </TableCell>
                      );
                    } else if (column.id === 'update') {
                      return (
                        <TableCell key={column.id} align={column.align}>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() => handleUpdate(row)}
                          >
                            Update
                          </Button>
                        </TableCell>
                      );
                    }
                    else if (column.id==='image')
                      {
                      return (
                        <TableCell key={column.id} align={column.align}>
                          <img src={row.image} alt="" height={50} width={70}/>
                        </TableCell>
                      );
                      
                    }
                     else {
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    }
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default Delete;
