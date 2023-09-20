import React from 'react'
import CircularProgress from '@mui/joy/CircularProgress';
import './spinner.css'

export const Spinner = () => {
  return (
    <div className="spinner-container">
      <CircularProgress
        color="success"
        determinate={false}
        size="lg"
        value={45}
        variant="plain"
      />
      <div>Загружаю карту...</div>
    </div>

  )
};
