
import Button from '@mui/material/Button';

interface SubmitProps {
    onSubmit: () => void;
}

const Submit: React.FC<SubmitProps> = ({ onSubmit }) => {
    const handleClick = () => {
        onSubmit();
    };

    return (
        <Button variant="contained" onClick={handleClick}>Submit</Button>
    );
};

export default Submit;
