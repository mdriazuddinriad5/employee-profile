import { Grid } from "@mui/material";
import EmployeeProfile from "../../components/EmployeeProfile/EmployeeProfile";

const Home = () => {
    return (
        <Grid
            container
            // justifyContent="center"
            // alignItems="center"
            // paddingTop={6}
            // paddingLeft={25}
            // paddingRight={10}
            padding={4}
            style={{  flexDirection: 'column' }}
        >
            <EmployeeProfile></EmployeeProfile>
        </Grid>
    );
};

export default Home;