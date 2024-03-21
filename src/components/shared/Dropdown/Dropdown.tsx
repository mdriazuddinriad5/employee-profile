import { FormControl, Menu, MenuItem, MenuProps, alpha, styled } from '@mui/material';
import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './Dropdown.css';

interface DropdownProps {
    items: string[];
    onChange: (value: string) => void;
}

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
        paddingRight: '40px',
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

const Dropdown: React.FC<DropdownProps> = ({ items, onChange }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLDivElement>(null);
    const [selectedRating, setSelectedRating] = useState<null | string>(null);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = (item: string) => {
        setSelectedRating(item);
        onChange(item); 
        handleClose();
    };

    return (
        <FormControl sx={{ width: '18vw', height: '60px', position: 'relative' }}>
            <KeyboardArrowDownIcon
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
                    {selectedRating ? selectedRating : 'Select'}
                </p>
                <StyledMenu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    style={{
                        marginLeft: '0px',
                        marginTop: '10px'
                    }}
                >
                    {items.map((item: string) => (
                        <MenuItem
                            key={item}
                            onClick={() => handleMenuItemClick(item)}
                            sx={{ padding: '12px', fontFamily: 'Inter', fontSize: '14px', fontWeight: 400, color: '#353535' }}
                        >
                            {item}
                        </MenuItem>
                    ))}
                </StyledMenu>
            </div>
        </FormControl>
    );
};

export default Dropdown;
