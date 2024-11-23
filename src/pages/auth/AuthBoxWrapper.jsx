import { Box, Paper } from '@mui/material'
import React from 'react'

export const AuthWrapper = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        zIndex: 1000,
        minHeight: '100%',
        minWidth: '100%'
      }}
    >
      <Paper sx={{ width: '500px' }}>
        {children}
      </Paper>
    </Box>
    
  )
}