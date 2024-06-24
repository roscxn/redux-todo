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
            borderColor: "primary.main",
            border: 1,
            height: 100,
            mb: 3,
            mt: 2,
            p: 2,
          }}
        >
          {children}
        </Box>
      </Container>
    </React.Fragment>
  )
}

export default SimpleContainer
