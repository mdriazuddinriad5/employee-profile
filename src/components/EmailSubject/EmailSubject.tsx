
import { FormControl, TextField, Typography } from '@mui/material';

interface EmailSubjectProps {
    onChange: (value: string) => void;
}

const EmailSubject: React.FC<EmailSubjectProps> = ({ onChange }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <div style={{ marginBottom: '10px' }}>
            <Typography style={{ fontSize: '14px', marginBottom: '4px' }}>
                <span style={{ fontWeight: 700 }}>Subject: </span>
                Type email subject*
            </Typography>
            <FormControl sx={{ width: '95%', position: 'relative' }}>
                <TextField
                    required
                    id="outlined-required"
                    placeholder="Type email subject"
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

export default EmailSubject;
