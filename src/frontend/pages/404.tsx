import { Box, Button, Container, Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";
import GifPageNotFound from "../public/images/404.gif";

const PageNotFound: React.FC = () => {
  return (
    <>
      <Head>
        <title>Page not found - CashFlow</title>
      </Head>
      <Container maxWidth="md">
        <Box display="flex" justifyContent="center">
          <Image
            src={GifPageNotFound}
            alt="Page not found image"
            className="h-full w-8/12"
          />
        </Box>

        <Typography align="center" mb={4}>
          You either tried some shady route or you came here by mistake.
          Whichever it is, try using the navigation.
        </Typography>

        <Box display="flex" justifyContent="center">
          <Button variant="contained" href="/" startIcon={<FiArrowLeft />}>
            Go back
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default PageNotFound;
