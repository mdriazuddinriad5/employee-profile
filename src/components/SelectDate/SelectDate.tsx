
import { FormControl, TextField, Typography } from '@mui/material';

interface SelectDateProps {
    onChange: (value: string) => void;
}

const SelectDate: React.FC<SelectDateProps> = ({ onChange }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <div>
            <Typography style={{ fontSize: '14px', marginBottom: '4px' }}>
                Select a Date
            </Typography>
            <FormControl sx={{ width: '40%', position: 'relative' }}>
                <TextField
                    type="date"
                    required
                    placeholder='Select Date'
                    id="outlined-required"
                    InputProps={{
                        sx: {
                            height: '50px',
                            borderRadius: '8px',
                            padding: '4px'
                        }
                    }}
                    onChange={handleChange}
                />
            </FormControl>
        </div>
    );
};

export default SelectDate;
