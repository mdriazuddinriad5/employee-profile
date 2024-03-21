
import { Typography } from '@mui/material';
import Dropdown from '../shared/Dropdown/Dropdown';

interface SelectDepartmentProps {
    departments: string[];
    onChange: (value: string) => void;
}

const SelectDepartment: React.FC<SelectDepartmentProps> = ({ departments, onChange }) => {
    return (
        <div style={{ marginBottom: '15px' }}>
            <Typography style={{ fontSize: '14px', marginBottom: '4px' }}>
                Select Department*
            </Typography>
            <Dropdown items={departments} onChange={onChange} />
        </div>
    );
};

export default SelectDepartment;
