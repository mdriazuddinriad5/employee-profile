import { Typography } from "@mui/material";

interface InformationTextProps {
    field: string;
    value: string;
}

const InformationText: React.FC<InformationTextProps> = ({ field, value }) => {
    return (
        <div style={{ display: 'flex', paddingLeft: '24px', paddingBottom: '24px' }}>
            <Typography style={{ color: '#1A1A1B', fontSize: '12px', fontFamily: 'Inter', fontWeight: 400, opacity: .7, flex: 1 }}>
                {field}
            </Typography>
            <Typography style={{ color: '#1A1A1B', fontSize: '12px', fontFamily: 'Inter', fontWeight: 400, opacity: 1, flex: 1 }}>
                {value}
            </Typography>
        </div>
    );
};

export default InformationText;