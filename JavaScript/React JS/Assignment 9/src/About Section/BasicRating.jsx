import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BasicRating({rating}) {
//   const [value, setValue] = React.useState(2);

  return (
    <Box sx={{ '& > legend': { mt: 2 } }}>
      
      <Typography sx={{ color: 'text.blue', fontSize: '1.5rem', fontWeight: 600 }} component="legend">Our Rating</Typography>
          <div className='flex gap-2 items-center'>
              <Rating sx={{ fontSize: '1.5rem', marginTop: '0.5rem' }} name="read-only" value={rating} readOnly />
              <p className='text-base-content font-normal text-xl mt-2'>{rating}</p>
      </div>
      
    </Box>
  );
}