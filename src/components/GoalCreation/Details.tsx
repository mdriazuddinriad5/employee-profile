
import { FormControl, TextField, Typography } from '@mui/material';

interface DetailsProps {
    onChange: (value: string) => void;
}

const Details: React.FC<DetailsProps> = ({ onChange }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <div style={{ marginBottom: '10px' }}>
            <Typography style={{ fontSize: '14px', marginBottom: '4px' }}>
                <span style={{ fontWeight: 700 }}>Details</span>
            </Typography>
            <FormControl sx={{ width: '100%', position: 'relative' }}>
                <TextField
                    required
                    id="outlined-required"
                    placeholder="Type in 50 Characters"
                    InputProps={{
                        sx: {
                            height: '80px',
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

export default Details;
