import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import {useTranslation} from 'react-i18next'

const CampaignModal = ({ open, handleClose, applyCampaign }) => {
  const {t}=useTranslation();
  
const handleApplyCampaign = async (campaign) => 
    {
  
    // Kampanya uygula
    await applyCampaign(campaign);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
        <Typography variant="h6" component="h2">
          {t('Order.campaigns')}
        </Typography>
        <Button
          onClick={() => handleApplyCampaign('20off')}
          sx={{ mt: 2, width: '100%', backgroundColor: 'lightgreen' }}
        >
          {t('Order.%20off')}
        </Button>
        <Button
          onClick={() => handleApplyCampaign('10off')}
          sx={{ mt: 2, width: '100%', backgroundColor: 'lightgreen' }}
        >
          {t('Order.%10off')}
          
        </Button>
      </Box>
    </Modal>
  );
};

export default CampaignModal;
