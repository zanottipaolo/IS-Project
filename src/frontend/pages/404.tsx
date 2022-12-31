import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Box, Button, Container, Typography } from "@mui/material";
import { TiArrowLeftThick } from "react-icons/ti";

const PageNotFound: React.FC = () => {
  return (
    <>
      <Head>
        <title>404 Page not found - CashFlow</title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Image
                alt="404 page not found"
                src="/images/404.gif"
                style={{
                  marginTop: 50,
                  display: "inline-block",
                  maxWidth: "100%",
                  width: 500,
                }}
                width={500}
                height={500}
              />
            </Box>
            <Typography align="center" color="textPrimary" variant="subtitle2">
              You either tried some shady route or you came here by mistake.
              Whichever it is, try using the navigation.
            </Typography>
            <Link href="/" passHref style={{ textDecoration: "none" }}>
              <Button
                component="a"
                startIcon={<TiArrowLeftThick />}
                sx={{ mt: 3, p: 1.5 }}
                variant="contained"
              >
                Go back to dashboard
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default PageNotFound;
