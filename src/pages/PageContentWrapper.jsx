import React from 'react'
import { Box } from '@mui/material'

export const PageContentWrapper = ({ children }) => {
    return (
        <Box
            sx={{
                maxWidth: '1104px', // Set a maximum width for the wrapper
                margin: '0 auto', // Center the wrapper horizontally
                padding: '0px', // Add padding inside the wrapper
                boxSizing: 'border-box', // Include padding in the element's total width and height
                width: '100%', // Make the wrapper responsive
            }}
        >
            {children}
        </Box>
    )
}