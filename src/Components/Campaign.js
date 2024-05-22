import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import { useProductCode } from '../Context/ProductContext';


const CampaignModal = ({ open, handleClose, applyCampaign }) => {
  
const {setTwentyOffDisabled,twentyOffDisabled,setTenOffDisabled,tenOffDisabled}=useProductCode()
 
const handleApplyCampaign = async (campaign) => 
    {
    if (campaign === '20off') {
      setTwentyOffDisabled(true);
    }
    else if(campaign==='10off'){
        setTenOffDisabled(true);
    }
    // Kampanya uygula
    await applyCampaign(campaign);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
        <Typography variant="h6" component="h2">
          Kampanyalar
        </Typography>
        <Button
          onClick={() => handleApplyCampaign('20off')}
          disabled={twentyOffDisabled} // Butonun durumunu izle
          sx={{ mt: 2, width: '100%', backgroundColor: 'lightgreen' }}
        >
          Temizlik Ürünlerinde %20 İndirim
        </Button>
        <Button
          onClick={() => handleApplyCampaign('10off')}
          disabled={tenOffDisabled} // Butonun durumunu izle
          sx={{ mt: 2, width: '100%', backgroundColor: 'lightgreen' }}
        >
          Giyim Aksesuar Ürünlerinde %10 İndirim
        </Button>
      </Box>
    </Modal>
  );
};

export default CampaignModal;
