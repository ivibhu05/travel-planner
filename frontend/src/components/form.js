import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const InputForm = () => {
  const [startDate, setStartDate] = useState(null);

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        backgroundColor: '#f9f9f9',
        maxWidth: 800,
        margin: 'auto',
        padding: 3,
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
      onSubmit={(e) => {
        e.preventDefault();
        alert('Form submitted');
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 2,
          mb: 2,
        }}
      >
        <TextField
          label="Source"
          variant="outlined"
          fullWidth
          required
        />

        <TextField
          label="Destination"
          variant="outlined"
          fullWidth
          required
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 2,
          mb: 2,
          padding:'20px',
          borderRadius:'10px',
          backgroundColor:'#fff',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          justifyContent: 'center',
          
        }}
      >
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          placeholderText="Date of Departure"
          dateFormat="MMMM d, yyyy"
          className="form-control"
          style={{ width: '100%' }}
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center', 
        }}
      >
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}

export default InputForm;
