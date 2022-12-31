import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Button, ListItem } from "@mui/material";
import { PropsWithChildren, ReactNode } from "react";

interface NavItemProps extends PropsWithChildren {
  href: string;
  icon: ReactNode;
  title: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon, title }, ...others) => {
  const router = useRouter();
  const active = href ? router.pathname === href : false;
  return (
    <ListItem
      disableGutters
      sx={{
        display: "flex",
        mb: 0.5,
        py: 0,
        px: 2,
      }}
      {...others}
    >
      <Link href={href} passHref>
        <Button
          component="a"
          startIcon={icon}
          disableRipple
          sx={{
            backgroundColor: active && "rgba(255,255,255, 0.08)",
            borderRadius: 1,
            color: active ? "secondary.main" : "neutral.300",
            fontWeight: active && "fontWeightBold",
            justifyContent: "flex-start",
            px: 3,
            textAlign: "left",
            textTransform: "none",
            width: "100%",
            "& .MuiButton-startIcon": {
              color: active ? "secondary.main" : "neutral.400",
            },
            "&:hover": {
              backgroundColor: "rgba(255,255,255, 0.08)",
            },
          }}
        >
          <Box sx={{ flexGrow: 1 }}>{title}</Box>
        </Button>
      </Link>
    </ListItem>
  );
};

export default NavItem;
