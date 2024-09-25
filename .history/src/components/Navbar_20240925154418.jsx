import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Container,
  useMediaQuery,
  Fade,
} from "@mui/material";
import { styled } from "@mui/system";
import {
  FaBars,
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaCog,
} from "react-icons/fa";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.8)",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s ease-in-out",
}));

const NavItem = styled(Typography)(({ theme }) => ({
  margin: "0 15px",
  cursor: "pointer",
  position: "relative",
  "&:after": {
    content: '""',
    position: "absolute",
    width: "0",
    height: "2px",
    bottom: "-5px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: theme.palette.primary.main,
    transition: "width 0.3s",
  },
  "&:hover:after": {
    width: "100%",
  },
}));

const FloatingNavbar = () => {
  const [visible, setVisible] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(currentScrollPos > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    handleClose();
  };

  const menuItems = [
    { icon: <FaHome />, label: "Home", sectionId: "home" },
    { icon: <FaInfoCircle />, label: "About", sectionId: "about" },
    { icon: <FaEnvelope />, label: "Contact", sectionId: "contact" },
    { icon: <FaCog />, label: "Settings", sectionId: "settings" },
  ];

  return (
    <Fade in={visible}>
      <StyledAppBar position="fixed">
        <Container>
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            >
              LOGO
            </Typography>

            {isMobile ? (
              <>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleClick}
                >
                  <FaBars />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  {menuItems.map((item) => (
                    <MenuItem
                      key={item.sectionId}
                      onClick={() => scrollToSection(item.sectionId)}
                    >
                      <Box display="flex" alignItems="center">
                        {item.icon}
                        <Typography ml={1}>{item.label}</Typography>
                      </Box>
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <Box sx={{ display: "flex" }}>
                {menuItems.map((item) => (
                  <NavItem
                    key={item.sectionId}
                    onClick={() => scrollToSection(item.sectionId)}
                  >
                    <Box display="flex" alignItems="center">
                      {item.icon}
                      <Typography ml={1}>{item.label}</Typography>
                    </Box>
                  </NavItem>
                ))}
              </Box>
            )}
          </Toolbar>
        </Container>
      </StyledAppBar>
    </Fade>
  );
};

export default FloatingNavbar;
