import { Card, Divider, Grid, Typography } from "@mui/material";

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AddressComponent from "../AddressComponent/AddressComponent";
import { styled } from "@mui/system";

import img1 from "../../assets/Avatar.png";
import img2 from "../../assets/Frame 61.png";
import img3 from "../../assets/Icon Location.png";
import img4 from "../../assets/frame1.png";
import img5 from "../../assets/frame2.png";
import img6 from "../../assets/frame3.png";
import img7 from "../../assets/frame4.png";
import img8 from "../../assets/frame5.png";
import InformationComponent from "../InformationComponent/InformationComponent";
import PasswordComponent from "../PasswordComponent/PasswordComponent";
import EmailComponent from "../Emails/EmailComponent";
import UserRole from "../UserRole/UserRole";
import GlobalIdentity from "../GlobalIdentity/GlobalIdentity";


const basicInformation: { [key: string]: string }[] = [
    { 'First Name:': 'Kathryn' },
    { 'Last Name:': 'Murphy' },
    { 'Phone (work):': '905-678-4737' }
];


const personalInformation: { [key: string]: string }[] = [
    { 'E-mail address:': 'jackson.graham@example.com' },
    { 'Job Level:': 'Level 10' },
    { 'Job Title:': 'President of Sales' },
    { 'Reports to:': 'Jenny Wilson' },
    { 'Department Title:': 'Feb 28, 1978' },
    { 'Language:': 'EN' },
    { 'Phone (mobile):': '(205) 555-0100' }
];


const accountInformation: { [key: string]: string }[] = [
    { 'Account created:': 'Oct 16, 2018, 12:00:00 AM' },
    { 'Account activated:': 'Apr 1, 2023, 8:00:09 AM UTC' },
    { 'Language:': 'EN' }
];


const statusInformation: { [key: string]: string }[] = [
    { 'jessica.hanson@example.com': 'ACTIVE' },
    { 'jackson.graham@example.com': 'INACTIVE' }
];



const designations = ['Employee', 'Manager', 'HR', 'HR Admin'];

const StyledTabs = styled(Tabs)(() => ({
    "& .MuiTabs-indicator": {
        backgroundColor: "#272EB2",
    },
    "& .MuiTab-root": {
        textTransform: "none", // Preserve case
        color: "#1A1A1B", // Text color
        "&.Mui-selected": {
            color: "#272EB2", // Selected text color
        },
    },
}));



const EmployeeProfile = () => {
    const [value, setValue] = React.useState('personal');

    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Grid>
            <Typography sx={{ color: '#1A1A1B', fontSize: '24px', fontWeight: 800, fontFamily: 'Inter', marginBottom: '4px' }}>
                Employee Profile
            </Typography>

            <Box sx={{ width: '100%' }}>
                <StyledTabs
                    value={value}
                    style={{borderBottom:'1px solid #CFCFCF'}}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                >
                    <Tab value="personal" label="Personal" />
                    <Tab value="account" label="Account" />
                </StyledTabs>
            </Box>


            <div style={{ display: 'flex', marginTop: 20, gap: 40 }}>
                <div>
                    <Card sx={{ maxWidth: 345, backgroundColor: '#FFFFFF' }} elevation={0}>


                        <GlobalIdentity img1={img1} img2={img2} img3={img3} name={'Kathryn Murphy'} designation={'President of Sales'} country={'California, United States'}></GlobalIdentity>


                        <Divider style={{ marginTop: 12, marginLeft: 20, marginRight: 20 }}></Divider>

                        <div style={{ marginLeft: 10, marginRight: 45, marginTop: 6, marginBottom: 10 }}>


                            <AddressComponent icon={img4} componentName={'Status'} componentValue={'Active'}></AddressComponent>

                            <AddressComponent icon={img5} componentName={'Email'} componentValue={'felicia.reid@example.com'}></AddressComponent>

                            <AddressComponent icon={img6} componentName={'Phone'} componentValue={'(205) 555-0100'}></AddressComponent>

                            <AddressComponent icon={img7} componentName={'Office'} componentValue={'Head Office'}></AddressComponent>

                            <AddressComponent icon={img8} componentName={'Reports to'} componentValue={'Jenny Wilson'}></AddressComponent>

                        </div>



                    </Card>
                </div>


                <div style={{ flexGrow: 1 }}>
                    {value === 'personal' && <div>
                        <InformationComponent title={'Basic Information'} information={basicInformation}></InformationComponent>
                        <InformationComponent title={'Personal Information'} information={personalInformation}></InformationComponent>


                    </div>}
                    {value === 'account' && <div>
                        <InformationComponent title={'Account Information'} information={accountInformation}></InformationComponent>
                        <PasswordComponent title={'Password'}></PasswordComponent>
                        <EmailComponent title={'Email'} statusInfo={statusInformation}></EmailComponent>
                        <UserRole title={'User Role'} designations={designations}></UserRole>
                    </div>}
                </div>
            </div>

        </Grid >
    );
};

export default EmployeeProfile;
