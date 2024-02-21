import { Divider, Typography } from "@mui/material";

const ActiveStatusField = () => {
    return (
        <div style={{ paddingLeft: '15px', paddingRight: '15px' }}>
            <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '12px' }}>
                <Typography style={{ color: '#1A1A1B', fontSize: '12px', fontWeight: 400, opacity: 1, flex: 1 }}>
                    Address
                </Typography>
                <Typography style={{ color: '#1A1A1B', fontSize: '12px', fontWeight: 400, opacity: 1, flex: 1 }}>
                    Account Status
                </Typography>

            </div>
            <Divider style={{ marginTop: '15px', marginBottom: '20px' }}></Divider>
        </div>
    );
};

export default ActiveStatusField;