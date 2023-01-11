import { Avatar, Typography, Menu, MenuItem } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const UserMenu = () => {
    const { user } = useContext(AuthContext);
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleLogout = () => {
        user.auth.signOut();
    };

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Box
                sx={{ display: "flex", "&:hover": { cursor: "pointer" } }}
                onClick={handleClick}
            >
                <Typography>{user.displayName}</Typography>
                <Avatar
                    alt="avatar"
                    src={user.photoURL}
                    sx={{ width: 24, height: 24, marginLeft: "5px" }}
                />
            </Box>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </>
    );
};

export default UserMenu;
