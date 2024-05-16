import * as React from "react"
import CssBaseline from "@mui/material/CssBaseline"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"

interface SimpleContainerProps {
  children: React.ReactNode // Accept children as ReactNode
}

const SimpleContainer: React.FC<SimpleContainerProps> = ({ children }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
          sx={{
            borderColor: "primary.main", // Use primary color as border color
            border: 1, // Set border to 1px solid
            height: 120,
            mb: 3, // margin bottom
            mt: 3, // margin top
            p: 2, // padding
          }}
        >
          {children}
        </Box>
      </Container>
    </React.Fragment>
  )
}

export default SimpleContainer
