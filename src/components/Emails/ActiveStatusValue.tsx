import { Divider, Menu, MenuItem, Typography } from "@mui/material";
import checkBoxImage from "../../assets/_Checkbox_.png";
import React from "react";

interface ActiveStatusValueProps {
    email: string;
    status: string;
}

const ActiveStatusValue: React.FC<ActiveStatusValueProps> = ({ email, status }) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick: React.MouseEventHandler<HTMLImageElement> = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = (action: string) => {
        if (action === 'resend') {
            // Perform action for Resend verification email
        } else if (action === 'delete') {
            // Perform action for Delete
        }

        // Close the menu
        handleClose();
    };

    return (
        <div style={{ paddingLeft: '15px', paddingRight: '15px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '12px' }}>
                <Typography style={{ color: '#1A1A1B', fontSize: '12px', fontWeight: 400, opacity: 1, flex: 1 }}>
                    {email}
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flex: 1, marginLeft: '6px' }}>

                    {
                        status === 'ACTIVE' ? <Typography style={{ color: '#1A1A1B', fontSize: '12px', fontWeight: 400, opacity: 1, borderRadius: 100, backgroundColor: '#F8E0BB', paddingTop: '6px', paddingBottom: '6px', paddingLeft: '10px', paddingRight: '10px' }}>
                            {status}
                        </Typography> : <Typography style={{ color: '#1A1A1B', fontSize: '12px', fontWeight: 400, opacity: 1, borderRadius: 100, backgroundColor: '#F8876E', paddingTop: '6px', paddingBottom: '6px', paddingLeft: '13px', paddingRight: '13px' }}>
                            {status}
                        </Typography>
                    }

                    <img
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        style={{ width: '24px', paddingRight: '15px', cursor: 'pointer' }}
                        src={checkBoxImage}
                        alt=""
                    />


                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={() => handleMenuItemClick('resend')}>Resend verification email</MenuItem>
                        <MenuItem onClick={() => handleMenuItemClick('delete')}>Delete</MenuItem>
                    </Menu>

                </div>
            </div>
            <Divider style={{ marginTop: '15px', marginBottom: '20px' }}></Divider>
        </div>
    );
};

export default ActiveStatusValue;
