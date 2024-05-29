import * as React from "react"
import Box from "@mui/material/Box"
import BottomNavigation from "@mui/material/BottomNavigation"
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import RestoreIcon from "@mui/icons-material/Restore"
import FavoriteIcon from "@mui/icons-material/Favorite"
import LocationOnIcon from "@mui/icons-material/LocationOn"

import { Link } from "react-router-dom"

export default function BottomNav() {
  const [value, setValue] = React.useState(0)

  return (
    <Box
      sx={{
        width: "100%", // Full width for mobile screens
        position: "fixed",
        bottom: 0,
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          event.preventDefault()
          setValue(newValue)
        }}
      >
        <BottomNavigationAction
          label="Todos"
          icon={<RestoreIcon />}
          component={Link}
          to="/home"
        />

        <BottomNavigationAction label="Favorite" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  )
}
