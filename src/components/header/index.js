import {
    AppBar,
    Toolbar,
    MenuItem,
  } from "@material-ui/core";

const Header = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <MenuItem>
            Kenzie<span>SHOP</span>
          </MenuItem>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Header;
