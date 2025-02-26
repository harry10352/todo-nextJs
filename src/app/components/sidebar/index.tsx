import { List, ListItem, ListItemText, Drawer } from "@mui/material";
import { styled } from "@mui/system";
import { useRouter } from "next/router";

const StyledDrawer = styled(Drawer)({
  width: 240,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: 240,
    boxSizing: "border-box",
    backgroundColor: "#f4f4f4",
  },
});

const StyledList = styled(List)({
  marginTop: "60px",
});

const StyledListItem = styled(ListItem)({
  "&:hover": {
    backgroundColor: "#e0e0e0",
  },
});

const Sidebar: React.FC = () => {
  const route = useRouter();
  function routeToPage(url: string) {
    route.push(url);
  }

  return (
    <StyledDrawer variant="permanent" anchor="left">
      <StyledList>
        <StyledListItem onClick={() => routeToPage("/dashboard")}>
          <ListItemText primary="Dashboard" />
        </StyledListItem>
        <StyledListItem onClick={() => routeToPage("/todo/create")}>
          <ListItemText primary="Create Todo" />
        </StyledListItem>
        <StyledListItem onClick={() => routeToPage("/todo/list")}>
          <ListItemText primary="View Todos" />
        </StyledListItem>
      </StyledList>
    </StyledDrawer>
  );
};

export default Sidebar;
