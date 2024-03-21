
import { Typography } from '@mui/material';
import Dropdown from '../shared/Dropdown/Dropdown';

interface TypeProps {
    types: string[];
    onChange: (value: string) => void;
}

const Type: React.FC<TypeProps> = ({ types, onChange }) => {
    const handleChange = (value: string) => {
        onChange(value);
    };

    return (
        <div>
            <Typography style={{ fontSize: '14px', marginBottom: '4px' }}>
                <span style={{ fontWeight: 700 }}>Type: </span>
                Select a type
            </Typography>
            <Dropdown items={types} onChange={handleChange} />
        </div>
    );
};

export default Type;
