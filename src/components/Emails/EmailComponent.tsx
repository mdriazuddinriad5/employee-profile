import { Card, Divider, Typography } from "@mui/material";
import ActiveStatusField from "./ActiveStatusField";
import ActiveStatusValue from "./ActiveStatusValue";

interface EmailComponentProps {
    title: string;
    statusInfo: { [email: string]: string }[];
}

const EmailComponent: React.FC<EmailComponentProps> = ({ title, statusInfo }) => {
    return (
        <div>
            <Card sx={{ borderRadius: '8px', marginBottom: '20px' }} elevation={0}>
                <Typography style={{ color: '#1A1A1B', fontSize: '20px', fontFamily: 'Inter', fontWeight: 500, paddingLeft: '24px', paddingTop: '12px', paddingBottom: '6px' }}>
                    {title}
                </Typography>
                <Divider style={{ marginBottom: '20px' }}></Divider>

                <ActiveStatusField></ActiveStatusField>

                {
                    statusInfo.map((entry: { [email: string]: string }) => {
                        const email = Object.keys(entry)[0];
                        const status = entry[email];

                        return (
                            <ActiveStatusValue key={email} email={email} status={status} />
                        );
                    })}
            </Card>
        </div>
    );
};

export default EmailComponent;
