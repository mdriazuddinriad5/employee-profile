import { Card, Divider, Typography } from "@mui/material";
import InformationText from "./InformationText";

interface InformationComponentProps {
    title: string;
    information: { [key: string]: string }[];
}

const InformationComponent: React.FC<InformationComponentProps> = ({ title, information }) => {
    return (
        <div>
            <Card sx={{ borderRadius: '8px', marginBottom:'20px' }} elevation={0}>
                <Typography style={{ color: '#1A1A1B', fontSize: '20px', fontFamily: 'Inter', fontWeight: 500, paddingLeft: '24px', paddingTop: '12px', paddingBottom: '6px' }}>
                    {title}
                </Typography>
                <Divider style={{marginBottom:'20px'}}></Divider>

                {information.map(entry => {
                    const field = Object.keys(entry)[0];
                    const value = entry[field];

                    return (
                        <InformationText key={field} field={field} value={value} />
                    );
                })}
            </Card>
        </div>
    );
};

export default InformationComponent;
