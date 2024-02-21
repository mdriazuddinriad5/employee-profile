import React from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Card, Divider, FormControl, Menu, MenuItem, Typography, alpha, styled, MenuProps } from "@mui/material";
import "./UserRole.css";

const StyledMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: '4px',
        background: 'var(--White, #FFF)',
        boxSizing: 'border-box',
        paddingRight: '65px',
        paddingLeft: '6px',
        marginTop: theme.spacing(1),
        color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.10), 0px -1px 0px 0px rgba(0, 0, 0, 0.00)',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: '18px',
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));

const textAttributes = {
    color: '#1A1A1B',
    fontFamily: 'Inter',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 400,
    paddingLeft: '16px',
};



const UserRole = ({ title, designations }: { title: string, designations: string[] }) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLDivElement>(null);
    const [selectedRating, setSelectedRating] = React.useState<null | string>(null);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = (designation: string) => {
        setSelectedRating(designation);
        handleClose();
    };

    return (
        <div>
            <Card sx={{ borderRadius: '8px', marginBottom: '250px' }} elevation={0}>
                <Typography style={{ color: '#1A1A1B', fontSize: '20px', fontFamily: 'Inter', fontWeight: 500, paddingLeft: '24px', paddingTop: '12px', paddingBottom: '6px' }}>
                    {title}
                </Typography>
                <Divider style={{ marginBottom: '20px' }}></Divider>

                <FormControl sx={{ width: '95%', height: '60px', position: 'relative', marginLeft: '26px', paddingBottom: '12px' }}>
                    <ArrowDropDownIcon
                        sx={{
                            position: 'absolute',
                            top: '35%',
                            transform: 'translateY(-50%)',
                            right: '12px',
                            color: '#353535',
                        }}
                    />
                    <div className="menu">
                        <p style={textAttributes} className="text" onClick={handleClick}>
                            {selectedRating ? selectedRating : 'Select Role'}
                        </p>
                        <StyledMenu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            className={`p-[16px] shadow name dropdown-content z-[1] bg-[#FFFFFF] w-[152px] `}
                            style={{
                                marginLeft: '0px',
                                marginTop: '10px'
                            }}
                        >
                            {designations.map((designation: string) => (
                                <MenuItem
                                    key={designation}
                                    onClick={() => handleMenuItemClick(designation)}
                                    sx={{ padding: '12px', fontFamily: 'Inter', fontSize: '14px', fontWeight: 400, color: '#353535' }}
                                >
                                    {designation}
                                </MenuItem>
                            ))}
                        </StyledMenu>
                    </div>
                </FormControl>
            </Card>
        </div>
    );
};

export default UserRole;
