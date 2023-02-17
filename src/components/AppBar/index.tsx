import { useState } from "react";
import { Divider, Toolbar } from "@material-ui/core";
import { AppBar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Box, Container } from "@mui/system";
import Typography from "@mui/material/Typography";
// import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import logo from "../../assets/logo.svg";
import user_image from "../assets/avatar_img.jpg";
import { useNavigate } from "react-router-dom";

export default function AppBarComponent() {
  const user = {
    // Para ver o comportamento do componente sem usuário logado mude o state de user para false
    state: true,
    name: "Marcos Jorge",
    // para ver o comportamento do componente sem imagem descomente a linha abaixo
    image: "",
    // para ver o comportamento do componente com imagem descomente a linha abaixo
    // image: user_image,
  };
  const arrName = user.name.split(" ");
  const first = arrName[0].split("");
  const final = arrName[arrName.length - 1].split("");
  const letterFirst = first[0];
  const letterFinal = final[0];
  const letters = `${letterFirst}${letterFinal}`;
  const navigate = useNavigate();
  const pages = [
    { name: "Carros", to: "/" },
    { name: "Motos", to: "/" },
    { name: "Leilão", to: "/" },
  ];
  const settings = [
    "Editar perfil",
    "Editar endereço",
    "Meus Anúncios",
    "Sair",
  ];

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar color="inherit" elevation={0} variant="outlined">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Box
            sx={{
              display: "flex",
              flexGrow: {
                md: 0,
                xs: 10,
              },
            }}
          >
            <Button
              sx={{ justifyContent: "start" }}
              onClick={() => navigate("/")}
            >
              <img src={logo} alt="Logo MotorShop" />
            </Button>
          </Box>

          {/* menu hamburguer */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              mr: "0",
              ml: "0",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                width: "100vw",
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  sx={{
                    overflow: "visible",
                    left: "0px",
                    right: "0px",
                    pt: 2,
                    pb: 2,
                  }}
                  onClick={handleCloseNavMenu}
                >
                  <Typography sx={{}} textAlign="center">
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
              <Divider />
              {user.state ? (
                settings.map((page) => (
                  <MenuItem
                    key={page}
                    sx={{
                      width: "100vw",
                      pt: 2,
                      pb: 2,
                    }}
                    style={{ maxWidth: "100vw", left: "0px" }}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography sx={{}} textAlign="center">
                      {page}
                    </Typography>
                  </MenuItem>
                ))
              ) : (
                <>
                  <MenuItem
                    key={"login"}
                    sx={{
                      width: "100vw",
                      alignContent: "center",
                      pt: 2,
                      pb: 2,
                    }}
                    style={{ maxWidth: "100vw", left: "0px" }}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography sx={{}} textAlign="center">
                      Fazer Login
                    </Typography>
                  </MenuItem>
                  <MenuItem sx={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      variant="outlined"
                      onClick={() => {
                        navigate(`/`);
                        return handleCloseNavMenu();
                      }}
                      sx={{
                        my: 2,
                        pt: 2,
                        pb: 2,
                        pr: 2.5,
                        pl: 2.5,
                        color: "black",
                        borderColor: "#DEE2E6",
                        display: "flex",
                        width: "90%",
                        textTransform: "capitalize",
                        ":hover": {
                          color: "#1976d2",
                        },
                      }}
                      key={"cadastrar"}
                    >
                      <Typography
                        m={0.2}
                        mr={0.7}
                        ml={0.7}
                        sx={{
                          fontWeight: 600,
                        }}
                        textAlign="center"
                      >
                        Cadastrar
                      </Typography>
                    </Button>
                  </MenuItem>
                </>
              )}
            </Menu>
          </Box>

          {/* páginas menu desktop */}
          <Box
            sx={{
              flexGrow: 12,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => (
              <Button
                variant="text"
                key={page.name}
                onClick={() => {
                  navigate(`page.to`);
                  return handleCloseNavMenu();
                }}
                sx={{
                  my: 2,
                  mr: 1,
                  color: "#495057",
                  display: "block",
                  fontWeight: 400,
                  textTransform: "capitalize",
                }}
              >
                {page.name}
              </Button>
            ))}
            <Divider orientation="vertical" variant="middle" flexItem></Divider>
            {user.state ? (
              <>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 2 }}>
                    {user.image ? (
                      <Avatar
                        sx={{
                          bgcolor: "#5126EA",
                          height: "32px",
                          width: "32px",
                        }}
                        sizes="small"
                        src={user.image}
                      />
                    ) : (
                      <Avatar
                        sx={{
                          bgcolor: "#5126EA",
                          height: "32px",
                          width: "32px",
                        }}
                        sizes="small"
                      >
                        <Typography>{letters}</Typography>
                      </Avatar>
                    )}
                  </IconButton>
                </Tooltip>
                <Typography
                  sx={{ display: "flex", alignItems: "center", mr: 2 }}
                >
                  {user.name}
                </Typography>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-user"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography
                        sx={{ display: "flex", width: "150px" }}
                        textAlign="center"
                      >
                        {setting}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <>
                <Button
                  variant="text"
                  onClick={() => {
                    navigate(`/`);
                    return handleCloseNavMenu();
                  }}
                  sx={{
                    my: 2,
                    mr: 2,
                    color: "black",
                    display: "block",
                    fontWeight: 600,
                    textTransform: "capitalize",
                  }}
                  key={"login"}
                >
                  <Typography
                    sx={{ color: "#4529E6", fontWeight: 600, ml: 2.5, mr: 2.5 }}
                    textAlign="center"
                  >
                    Fazer Login
                  </Typography>
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => {
                    navigate(`/`);
                    return handleCloseNavMenu();
                  }}
                  sx={{
                    my: 2,
                    pt: 0,
                    pb: 0,
                    pr: 2.5,
                    pl: 2.5,
                    color: "black",
                    borderColor: "#DEE2E6",
                    display: "block",
                    textTransform: "capitalize",
                    ":hover": {
                      color: "#1976d2",
                    },
                  }}
                  key={"cadastrar"}
                >
                  <Typography
                    m={0.2}
                    mr={0.7}
                    ml={0.7}
                    sx={{
                      fontWeight: 600,
                    }}
                    textAlign="center"
                  >
                    Cadastrar
                  </Typography>
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
