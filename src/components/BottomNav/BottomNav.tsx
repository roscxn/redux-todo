import * as React from "react"
import Box from "@mui/material/Box"
import BottomNavigation from "@mui/material/BottomNavigation"
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd"
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents"
import { useNavigate } from "react-router-dom"

export default function BottomNav() {
  const [value, setValue] = React.useState("Todos")
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
      >
        <BottomNavigationAction
          label="Todos"
          icon={<PlaylistAddIcon />}
          value="todos"
          onClick={() => {
            setValue("todos")
            navigate("/")
          }}
        />
        <BottomNavigationAction
          label="Goals"
          icon={<EmojiEventsIcon />}
          value="goals"
          onClick={() => {
            setValue("goals")
            navigate("/goals")
          }}
        />
      </BottomNavigation>
    </Box>
  )
}
