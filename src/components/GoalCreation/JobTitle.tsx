// JobTitle.tsx
import { Typography } from '@mui/material';
import Dropdown from '../shared/Dropdown/Dropdown';

interface JobTitleProps {
    titles: string[];
    onChange: (value: string) => void;
}

const JobTitle: React.FC<JobTitleProps> = ({ titles, onChange }) => {
    return (
        <div style={{ marginBottom: '15px' }}>
            <Typography style={{ fontSize: '14px', marginBottom: '4px' }}>
                Job Title*
            </Typography>
            <Dropdown items={titles} onChange={onChange} />
        </div>
    );
};

export default JobTitle;
