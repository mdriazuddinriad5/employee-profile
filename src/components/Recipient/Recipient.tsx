
import { Typography } from '@mui/material';
import Dropdown from '../shared/Dropdown/Dropdown';

interface RecipientProps {
    recipients: string[];
    onChange: (value: string) => void;
}

const Recipient: React.FC<RecipientProps> = ({ recipients, onChange }) => {
    const handleChange = (value: string) => {
        onChange(value);
    };

    return (
        <div style={{ marginBottom: '15px' }}>
            <Typography style={{ fontSize: '14px', marginBottom: '4px' }}>
                <span style={{ fontWeight: 700 }}>To: </span>
                Select Recipient*
            </Typography>
            <Dropdown items={recipients} onChange={handleChange} />
        </div>
    );
};

export default Recipient;
