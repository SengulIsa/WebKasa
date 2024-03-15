import React from 'react'
import '../Styles/HomePage.css';
import { Container, Typography,Button} from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const HomeBottom = () => {
  const logout =()=>{
    console.log('clicked to logout button');
  }
  return (
    <div className='homeBottom'>
      <Container maxWidth={false} sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',     width:'100%'}}>
          <Typography sx={{paddingTop:'75px'}}><FiberManualRecordIcon sx={{color:'green',fontSize:'small'}}/> Mağaza Çevrimiçi</Typography>
          <Button
            variant="contained"
            style={{ margin: '8px',backgroundColor:'red',border:'1px solid red',borderRadius:'10px',height:'50px',marginTop:'60px' }}
            startIcon={<ExitToAppIcon />}
            onClick={logout}
          >
             Logout
          </Button>
      </Container>
    </div>
  )
}

export default HomeBottom