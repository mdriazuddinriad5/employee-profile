import { Grid, Typography } from "@mui/material";
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { styled } from "@mui/system";

import Recipient from "../Recipient/Recipient";
import Type from "../Type/Type";
import EmailSubject from "../EmailSubject/EmailSubject";
import SelectDate from "../SelectDate/SelectDate";
import EmailBody from "../EmailBody/EmailBody";
import SelectDepartment from "../GoalCreation/SelectDepartment";
import JobTitle from "../GoalCreation/JobTitle";
import Goal1 from "../GoalCreation/Goal1";
import Details from "../GoalCreation/Details";
import Submit from "../SubmitButton/Submit";

import CloseIcon from '@mui/icons-material/Close';

const recipients = ['All Employees', 'Manager', 'HR', 'HR Admin'];
const types = ['Performance Review ', 'Review Reminder', 'General Reminder', 'Review Closing'];
const departments = ['Police', 'Army', 'Navy', 'Rab'];
const titles = ['Manager', 'Assistant', 'Associate', 'Cook'];

const StyledTabs = styled(Tabs)(() => ({
    "& .MuiTabs-indicator": {
        backgroundColor: "#272EB2",
    },
    "& .MuiTab-root": {
        textTransform: "none", // Preserve case
        color: "#B1B1B1", // Text color
        "&.Mui-selected": {
            color: "#010107", // Selected text color
            fontWeight: "bold",
        },
    },
}));

const EmployeeProfile = () => {
    const [value, setValue] = React.useState('email');

    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const [emailData, setEmailData] = React.useState({
        recipient: '',
        subject: '',
        date: '',
        type: '',
        body: ''
    });

    const handleDataChange = (key: string, value: string) => {
        setEmailData(prevData => ({
            ...prevData,
            [key]: value
        }));
    };

    const handleSubmit = () => {
        console.log(emailData);
    };

    return (
        <Grid sx={{ position: 'relative' }}>
            <Typography sx={{ color: '#1A1A1B', fontSize: '20px', fontWeight: 500, fontFamily: 'Inter', marginBottom: '18px' }}>
                Admin Actions
            </Typography>

            <Box sx={{ width: '100%' }}>
                <StyledTabs
                    value={value}
                    style={{ borderBottom: '1px solid #CFCFCF' }}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                >
                    <Tab value="email" label="Email" />
                    <Tab value="goal creation" label="Goal Creation" />
                </StyledTabs>
            </Box>

            <div style={{ marginLeft: 12, marginTop: 20 }}>
                <div style={{ flexGrow: 1 }}>
                    {value === 'email' && <div>
                        <Recipient recipients={recipients} onChange={(value) => handleDataChange('recipient', value)} />
                        <div style={{ display: 'flex' }}>
                            <div style={{ flex: 1 }}>
                                <EmailSubject onChange={(value) => handleDataChange('subject', value)} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <SelectDate onChange={(value) => handleDataChange('date', value)} />
                            </div>
                        </div>
                        <Type types={types} onChange={(value) => handleDataChange('type', value)} />
                        <EmailBody onChange={(value) => handleDataChange('body', value)} />
                        <Submit onSubmit={handleSubmit} />
                    </div>}
                    {value === 'goal creation' && <div>
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <SelectDepartment departments={departments} onChange={(value) => handleDataChange('department', value)} />
                            <JobTitle titles={titles} onChange={(value) => handleDataChange('jobTitle', value)} />
                        </div>
                        <Goal1 onChange={(value) => handleDataChange('goal1', value)} />
                        <Details onChange={(value) => handleDataChange('details', value)} />
                        <Submit onSubmit={handleSubmit} />
                    </div>}
                </div>
            </div>

            <CloseIcon style={{ position: 'absolute', right: 0, top: 0 }}></CloseIcon>
        </Grid>
    );
};

export default EmployeeProfile;
