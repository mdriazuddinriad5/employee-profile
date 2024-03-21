
import { FormControl, TextField, Typography } from '@mui/material';

interface Goal1Props {
    onChange: (value: string) => void;
}

const Goal1: React.FC<Goal1Props> = ({ onChange }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <div style={{ marginBottom: '10px' }}>
            <Typography style={{ fontSize: '14px', marginBottom: '4px' }}>
                <span style={{ fontWeight: 700 }}>Goal 1</span>
            </Typography>
            <FormControl sx={{ width: '100%', position: 'relative' }}>
                <TextField
                    required
                    id="outlined-required"
                    placeholder="Type goal 1"
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

export default Goal1;
