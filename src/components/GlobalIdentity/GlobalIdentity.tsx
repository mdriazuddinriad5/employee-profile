import { Typography } from "@mui/material";

interface GlobalIdentityProps {
    img1: string;
    img2: string;
    img3: string;
    name: string;
    designation: string;
    country: string;
}

const GlobalIdentity: React.FC<GlobalIdentityProps> = ({ img1, img2, img3, name, designation, country }) => {
    return (
        <div>
            <div style={{ position: 'relative', width: '100%', paddingTop: 16, marginBottom: '5px' }}>
                <div style={{ textAlign: 'center' }}>
                    <img src={img1} alt="" />
                </div>
                <div style={{ position: 'absolute', bottom: 0, left: '67%', transform: 'translateX(-40%)' }}>
                    <img src={img2} alt="" />
                </div>
            </div>

            <Typography textAlign={"center"} sx={{ fontSize: '20px', fontFamily: 'Inter', fontWeight: 500, color: '#1A1A1B' }} component="div">
                {name}
            </Typography>
            <Typography textAlign={"center"} sx={{ fontSize: '14px', fontWeight: 400, fontFamily: 'Inter', color: '#1A1A1B', marginBottom:'4px' }} component="div">
                {designation}
            </Typography>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3 }}>
                <img src={img3} alt="" />
                <Typography textAlign={"center"} sx={{ fontSize: '12px', fontWeight: 400, fontFamily: 'Inter', color: '#1A1A1B' }} component="div">
                    {country}
                </Typography>
            </div>
        </div>
    );
};

export default GlobalIdentity;
