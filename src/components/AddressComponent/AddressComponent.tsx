import { Typography } from "@mui/material";

interface AddressComponentProps {
    icon: string;
    componentName: string;
    componentValue: string;
}

const AddressComponent: React.FC<AddressComponentProps> = ({ icon, componentName, componentValue }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div>
                <img src={icon} alt="" />
            </div>
            <div>
                <Typography style={{ color: '#1A1A1B', fontSize: '12px', fontFamily: 'Inter' }}>
                    {componentName}
                </Typography>
                <Typography style={{ color: '#1A1A1B', fontSize: '14px', fontFamily: 'Inter' }}>
                    {componentValue}
                </Typography>
            </div>
        </div>
    );
};

export default AddressComponent;
