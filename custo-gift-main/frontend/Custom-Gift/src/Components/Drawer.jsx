import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import DehazeIcon from '@mui/icons-material/Dehaze';
import '../Asserts/css/drawer.css';
import { useNavigate } from 'react-router-dom';

const Drawe = () => {
    const nav = useNavigate();
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const handle = (text) => {
        if (text === 'category') {
            nav('/shop'); // Navigate to /shop when "category" is clicked
        }
        else if(text==='none'){
            nav('/nc'); 
           
            
        }
        else if(text==='price'){
            
            nav('/price'); 
        }
        else if(text==='search by name'){
            nav('/auto')
        }
        else if(text==='Home')
        {
              nav('/home')
        }
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {['Home','none', 'category', 'price', 'search by name'].map((text) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton onClick={() => handle(text)}> {/* Wrap handle in an anonymous function */}
                            {text}
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Box>
    );

    return (
        <div>
            <div className="l">
                <Button onClick={toggleDrawer(true)}>
                    <DehazeIcon sx={{ color: "white" ,fontSize:"30px"}}  />
                    <span style={{ color: 'white' }}>filters</span>
                </Button>
            </div>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
};

export default Drawe;
