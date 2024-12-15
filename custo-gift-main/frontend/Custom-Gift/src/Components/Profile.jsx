import React, { useState, useEffect } from 'react';
import '../Asserts/css/profile.css';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Profile = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [avatar, setAvatar] = useState("https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"); // Default Avatar
    const [prof, setProf] = useState({
        firstname: "",
        email: "",
        lastname: "",
        password: "",
        address1: "",
        address2: "",
        address3: "",
        user_id: ""
    });

    const user = useSelector((state) => state.user);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/profile/cust/${user.id}`);
                const profileData = response.data;

                if (profileData) {
                    // Profile data found, deconcatenate address fields
                    setProf({
                        firstname: profileData.firstname || user.name,
                        email: profileData.email || user.email,
                        lastname: profileData.lastname || "",
                        password: profileData.password || user.password,
                        address1: profileData.address1 || "",
                        address2: profileData.address2 || "",
                        address3: profileData.address3 || "",
                        user_id: profileData.user_id || user.id
                    });
                    if (profileData.avatarUrl) { // Assuming profile data includes avatar URL
                        setAvatar(profileData.avatarUrl);
                    }
                } else {
                    // No profile data found, use the user object data
                    setProf({
                        firstname: user.name || "",
                        email: user.email || "",
                        lastname: "",
                        password: user.password || "",
                        address1: "",
                        address2: "",
                        address3: "",
                        user_id: user.id
                    });
                }
            } catch (error) {
                console.error('Error fetching profile data', error);
                // Handle errors if needed
            }
        };

        fetchProfile();
    }, [user.id]);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleAvatarClick = () => {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';

        fileInput.onchange = (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setAvatar(reader.result);
                    setOpenSnackbar(true);
                };
                reader.readAsDataURL(file);
            }
        };

        fileInput.click();
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    const handleSaveChanges = async () => {
        console.log('added successfully')
        const concatenatedAddress = `${prof.address1} ${prof.address2} ${prof.address3}`.trim();

        try {
            await axios.put(`http://localhost:8080/profile/cust/${prof.user_id}`, {
                firstname: prof.firstname,
                email: prof.email,
                lastname: prof.lastname,
                password: prof.password,
                address1: prof.address1,
                address2: prof.address2,
                address3: prof.address3,
                avatarUrl: avatar // Assuming you want to update the avatar URL
            });
            setOpenSnackbar(true);
        } catch (error) {
            console.error('Error saving profile data', error);
            // Handle errors if needed
        }
    };

    return (
        <div className="profile">
            <div className="top">
                <div className="between">
                    <div className="prof" onClick={handleAvatarClick}>
                        <Avatar 
                            alt="Profile Picture" 
                            src={avatar}
                            sx={{ width: 150, height: 150 }} 
                        />
                    </div>
                    <div className="name">
                        <TextField 
                            id="outlined-basic" 
                            label="First Name" 
                            variant="outlined" 
                            value={prof.firstname} 
                            onChange={(e) => setProf({ ...prof, firstname: e.target.value })} 
                        />
                        <TextField 
                            id="outlined-basic" 
                            label="Last Name" 
                            variant="outlined" 
                            value={prof.lastname} 
                            onChange={(e) => setProf({ ...prof, lastname: e.target.value })} 
                        />
                    </div>
                    <div className="email">
                        <TextField 
                            id="outlined-basic" 
                            label="Email" 
                            variant="outlined" 
                            value={prof.email} 
                            onChange={(e) => setProf({ ...prof, email: e.target.value })} 
                        />
                    </div>
                    <div className="password">
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                value={prof.password}
                                onMouseDown={handleMouseDownPassword}
                                onChange={(e) => setProf({ ...prof, password: e.target.value })}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                    </div>
                    <div className="address">
                        <TextField 
                            id="address1" 
                            label="Door No" 
                            variant="outlined" 
                            value={prof.address1} 
                            sx={{ margin: '16px' }} 
                            onChange={(e) => setProf({ ...prof, address1: e.target.value })}
                        />
                        <TextField 
                            id="address2" 
                            label="Street Name" 
                            variant="outlined" 
                            value={prof.address2} 
                            sx={{ margin: '16px' }} 
                            onChange={(e) => setProf({ ...prof, address2: e.target.value })}
                        />
                        <TextField 
                            id="address3" 
                            label="City & State" 
                            variant="outlined" 
                            value={prof.address3} 
                            sx={{ margin: '16px' }} 
                            onChange={(e) => setProf({ ...prof, address3: e.target.value })}
                        />
                    </div>
                    <div className="submit">
                        <Button variant="contained" color="success" sx={{ width: '550px' }} onClick={handleSaveChanges}>
                            Save Changes
                        </Button>
                    </div>
                </div>
            </div>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                message="Profile updated successfully"
            />
        </div>
    );
};

export default Profile;
