import React from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  IconButton,
  Link,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import DraggablePills from "../draggablePills/draggablePills";

const AudreyProfileCard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        borderTopRightRadius: { xs: 24, md: 48 },
        borderBottomRightRadius: { xs: 24, md: 48 },
        borderTopLeftRadius: { xs: 24, md: 0 },
        borderBottomLeftRadius: { xs: 24, md: 0 },
        textAlign: "left",
        px: 3,
        py: 3,
        background: "#F1F1F1",
        ml: 0,
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        src="/images/me.png"
        alt="Audrey Li"
        sx={{
          width: isMobile ? "100%" : 530,
          height: "auto",
          mx: "auto",
          mb: 3,
          borderRadius: 4,
          display: "block",
        }}
      />

      <Typography
        sx={{
          fontFamily: "Urbanist, sans-serif",
          fontWeight: 400,
          mb: 2,
          fontSize: isMobile ? "24px" : "28px",
          lineHeight: 1.2,
          color: "#808080",
        }}
      >
        I’m Audrey Li, a{" "}
        <Box
          component="span"
          sx={{
            color: "#171717",
            background:
              "linear-gradient(to bottom, transparent 60%, #C9DEFF 60%)",
          }}
        >
          product designer
        </Box>{" "}
        &{" "}
        <Box
          component="span"
          sx={{
            color: "#171717",
            background:
              "linear-gradient(to bottom, transparent 60%, #C9DEFF 60%)",
          }}
        >
          developer
        </Box>{" "}
        who loves shaping ideas into products through{" "}
        <Box
          component="span"
          sx={{
            color: "#171717",
            background:
              "linear-gradient(to bottom, transparent 60%, #C9DEFF 60%)",
          }}
        >
          design & code
        </Box>
        .
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Typography
          sx={{
            fontWeight: "bold",
            fontFamily: "Urbanist, sans-serif",
            fontSize: isMobile ? "18px" : "20px",
            color: "#171717",
            mr: 4,
          }}
        >
          Currently
        </Typography>
        <Typography
          sx={{
            color: "#808080",
            fontFamily: "Lato, sans-serif",
            fontSize: isMobile ? "16px" : "18px",
          }}
        >
          Product @{" "}
          <Box
            component="a"
            href="https://www.twosmallmen.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "#808080",
              textDecoration: "underline",
              "&:hover": {
                color: "#171717",
              },
            }}
          >
            TwoSmallMen
          </Box>
        </Typography>
      </Box>

      <DraggablePills />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          mt: 1,
        }}
      >
        <Button
          href="https://drive.google.com/file/d/1RVbE5mKWXAxsMpTNuVGiFdek_5Befdsh/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            fontSize: "16px",
            fontFamily: "Urbanist, sans-serif",
            color: "#808080",
            textTransform: "none",
            fontWeight: 300,
            mx: "auto",
            mt: 1,
            mb: 0.2,
            position: "relative",
            overflow: "hidden",
            "&:hover": {
              backgroundColor: "transparent",
              color: "#171717",
            },
            "&::after": {
              content: '""',
              position: "absolute",
              top: 32,
              bottom: 0,
              left: 0,
              width: "100%",
              height: "1px",
              backgroundColor: "#171717",
              transform: "scaleX(0)",
              transformOrigin: "left",
              transition: "transform 0.3s ease",
            },
            "&:hover::after": {
              transform: "scaleX(1)",
            },
          }}
        >
          View My Resume ↗
        </Button>
      </Box>

      <Box
        sx={{
          backgroundColor: "#D9D9D9",
          borderRadius: "36px",
          padding: 2,
        }}
      >
        <Stack direction="row" spacing={1} justifyContent="center">
          <Box
            sx={{
              position: "relative",
              width: 55,
              height: 55,
              "&:hover .icon": {
                transform: "translateY(-20px) rotate(-20deg)",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)",
              },
              transition: "all 0.3s ease",
            }}
          >
            <Box
              className="label"
              sx={{
                position: "absolute",
                top: "90%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "12px",
                fontFamily: "Urbanist, sans-serif",
                fontWeight: 400,
                color: "#333",
                zIndex: 0,
                opacity: 1,
              }}
            >
              GitHub
            </Box>

            <IconButton
              component={Link}
              href="https://github.com/audreyyli"
              target="_blank"
              className="icon"
              sx={{
                p: 0,
                borderRadius: 3,
                transform: "rotate(-6.03deg)",
                transition: "transform 0.3s ease",
                zIndex: 1,
                position: "absolute",
                top: 0,
                left: 0,
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <Image
                src="/images/githubLogo.png"
                alt="GitHub"
                width={55}
                height={55}
              />
            </IconButton>
          </Box>

          <Box
            sx={{
              position: "relative",
              width: 55,
              height: 55,
              "&:hover .icon": {
                transform: "translateY(-20px) rotate(10deg)",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)",
              },
              transition: "all 0.3s ease",
            }}
          >
            <Box
              className="label"
              sx={{
                position: "absolute",
                top: "90%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "12px",
                fontFamily: "Urbanist, sans-serif",
                fontWeight: 400,
                color: "#333",
                zIndex: 0,
                opacity: 1,
              }}
            >
              Email
            </Box>

            <IconButton
              component={Link}
              href="mailto:li.audrey04@gmail.com"
              target="_blank"
              className="icon"
              sx={{
                p: 0,
                borderRadius: 3,
                transition: "transform 0.3s ease",
                zIndex: 1,
                position: "absolute",
                top: 0,
                left: 0,
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <Image
                src="/images/gmailLogo.png"
                alt="Email"
                width={55}
                height={55}
              />
            </IconButton>
          </Box>

          <Box
            sx={{
              position: "relative",
              width: 55,
              height: 55,
              "&:hover .icon": {
                transform: "translateY(-20px) rotate(20deg)",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)",
              },
              transition: "all 0.3s ease",
            }}
          >
            <Box
              className="label"
              sx={{
                position: "absolute",
                top: "90%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "12px",
                fontFamily: "Urbanist, sans-serif",
                fontWeight: 400,
                color: "#333",
                zIndex: 0,
                opacity: 1,
              }}
            >
              Nerdville
            </Box>

            <IconButton
              component={Link}
              href="https://www.linkedin.com/in/audreylii/"
              target="_blank"
              className="icon"
              sx={{
                p: 0,
                borderRadius: 3,
                transform: "rotate(5.66deg)",
                transition: "transform 0.3s ease",
                zIndex: 1,
                position: "absolute",
                top: 0,
                left: 0,
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <Image
                src="/images/linkedInLogo.png"
                alt="LinkedIn"
                width={55}
                height={55}
              />
            </IconButton>
          </Box>
        </Stack>
      </Box>

      <Typography
        color="text.secondary"
        sx={{
          fontSize: "16px",
          display: "block",
          mt: 1,
          fontFamily: "Urbanist, sans-serif",
          fontWeight: 300,
          textAlign: "center",
        }}
      >
        © 2025 | Designed & coded with love & lots of iterations by Audrey Li
      </Typography>
    </Box>
  );
};

export default AudreyProfileCard;
