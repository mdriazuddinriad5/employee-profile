import { Card, Divider, Typography } from "@mui/material";
import InformationText from "../InformationComponent/InformationText";
import React from "react";

interface PasswordComponentProps {
    title: string;
}

const PasswordComponent: React.FC<PasswordComponentProps> = ({ title }) => {
    return (
        <div>
            <Card sx={{ borderRadius: '8px', marginBottom: '20px' }} elevation={0}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '24px', paddingTop: '12px', paddingBottom: '6px', paddingRight: '24px' }}>
                    <Typography style={{ color: '#1A1A1B', fontSize: '20px', fontFamily: 'Inter', fontWeight: 500 }}>
                        {title}
                    </Typography>
                    <Typography style={{ color: '#8E09EF', fontSize: '12px', fontFamily: 'Inter', fontWeight: 500 }}>
                        Edit
                    </Typography>
                </div>
                <Divider style={{ marginBottom: '20px' }}></Divider>

                <InformationText field='Password:' value='••••••••••••'></InformationText>
            </Card>
        </div>
    );
};

export default PasswordComponent;