"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Footer from "@/app/components/footer/footer.js";
import Hero from "../../components/hero/hero.js";
import Summary from "../../components/summary/summary.js";
import Section from "../../components/section/section.js";
import Problem from "../../components/problem/problem.js";
import { Box, Button, Typography, Divider } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowOutward from "@mui/icons-material/ArrowOutward";

// Create a custom theme with Apple system fonts
const theme = createTheme({
  typography: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 380,
      md: 1180,
      lg: 1280,
      xl: 1350,
    },
  },
});

export default function Instagram() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          maxWidth: "1300px",
          margin: "0 auto",
          padding: { xs: "10px", sm: "20px" },
        }}
      >
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={handleGoBack}
          disableRipple
          sx={{
            textTransform: "none",
            fontWeight: 400,
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            color: "#888",
            position: "relative",
            overflow: "hidden",
            textAlign: "center",
            padding: "5px 10px",
            transition: "color 0.3s ease, transform 0.3s ease",
            "&:hover": {
              color: "#111",
              background: "none",
              "&::after": {
                width: "100%",
              },
            },
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: "8px",
              left: "0",
              height: "2px",
              backgroundColor: "#111",
              width: "0%",
              transition: "width 0.4s ease",
            },
          }}
        >
          BACK
        </Button>
        <Box
          sx={{
            marginTop: "20px",
            position: "relative",
            width: "100vw",
            height: "45vh",
            overflow: "hidden",
            backgroundColor: "#D3E9D4",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {/* Main Image */}
          <Box
            component="img"
            src="/images/MySpend/mySpendMock.png"
            alt="MySpend Mock"
            sx={{
              maxWidth: "1500px",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              margin: "0 auto",
            }}
          />
        </Box>
        {/* Hero section */}
        <Box
          sx={{
            position: "relative",
            marginTop: "170px",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Hero
            title="TD"
            timeline="March 2025"
            role="Product Manager & Designer"
            toolsSkills="Figma, Prototyping, Visual Design, User Research, Product Design, Product Management"
            company="Product Strategy"
            header="Improving GenZ's financial well-being with TD MySpend"
            projectType="Case Competition"
            description="Re-envisioning TD's MySpend app to provide long-term financial goal support by allowing Gen Z users to create, manage, and engage with short-term tactical tools."
            mainColour="#D3E9D4"
            subColour="#1A5336"
          />
        </Box>

        <Divider
          sx={{
            width: "100%",
            maxWidth: "1300px",
            marginTop: "70px",
            marginBottom: "50px",
          }}
        />
      </Box>

      <Box
        sx={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: { xs: "10px", sm: "20px" },
        }}
      >
        <Summary
          context={{
            description:
              "Hosted by Ivey Product Society, ProdX is the first product case competition at Ivey. I was excited to put my knowledge and skills in product design, strategy, and management, by taking on a real-world product issue.",
            customTitle: "Tackling the first product case competition",
          }}
          problem={{
            description:
              "In today\’s economy, GenZ is budgeting at record rates. However, there\’s a lack of accessible financial tools that are clear, transparent, and personalized.",
            customTitle: "GenZ needs tailored short-term financial tools",
          }}
          solution={{
            images: ["/images/MySpend/mySpendSolution.png"],
            customTitle: "The TD MySpend Dashboard",
          }}
          outcomes={{
            images: ["/images/MySpend/mySpendOutcome.png"],
            customTitle: "Presenting to product leaders and placing 2nd Place",
          }}
        />

        <Divider
          sx={{
            width: "100%",
            maxWidth: "1300px",
            marginTop: "70px",
            marginBottom: "50px",
          }}
        />
      </Box>

      <Box
        sx={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: { xs: "10px", sm: "20px" },
        }}
      >
        <Section
          header="HOW IT STARTED"
          description={[
            <>
              TD Bank is seeking to enhance its mobile banking application with
              a new feature specifically designed for <b>Gen Z users</b>. As one
              of North America&apos;s leading financial institutions, TD
              recognizes that Gen Z users have{" "}
              <b>unique financial behaviors and expectations</b> that differ
              significantly from previous generations.
            </>,
            <>
              The <b>TD MySpend app</b> allows users to oversee their saving and
              spending habits, tracking regular cash flow, setting savings
              goals, and gathering personalized financial insights. Directly
              linked to the user&apos;s Personal Banking account, this app
              provides a seamless experience in managing finances and monitoring
              progress towards financial goals.
            </>,
          ]}
        />
      </Box>

      <Box
        sx={{
          maxWidth: "1300px",
          margin: "0 auto",
          marginTop: "40px",
          padding: { xs: "10px", sm: "20px" },
        }}
      >
        <Section
          header="EXPLORING THE PROBLEM"
          description={[
            <>
              Canadians spend an average of <b>15 hours</b> per week worrying
              about money. There are multiple steps in how people manage their
              finances. We broke the process into 3 main steps.
            </>,
          ]}
        />
      </Box>

      <Box
        sx={{
          padding: "10px",
        }}
      >
        <Box
          component="img"
          src="/images/MySpend/jobsToBeDone.png"
          alt="Jobs to be Done"
          sx={{
            width: "100%",
            maxWidth: "1300px",
            height: "auto",
            margin: { xs: "10px auto", sm: "20px auto" },
            marginTop: "20px",
            borderRadius: "25px",
            border: "1px solid black",
          }}
        />
      </Box>

      <Box
        sx={{
          maxWidth: "1300px",
          margin: "0 auto",
          marginTop: "40px",
          padding: { xs: "10px", sm: "20px" },
        }}
      >
        <Section
          header="USER RESEARCH"
          description={[
            <>
              We began by defining the average Gen Z user. They are someone who
              is <b>young</b> and is transitioning from{" "}
              <b>spontaneous spending to responsible financial management</b>.
              They are looking for <b>clear, simple, and accessible</b> tools
              that help them <b>understand their finances</b>.
            </>,
            <>From here, we started conducting user research.</>,
          ]}
        />
      </Box>

      <Box
        sx={{
          padding: "10px",
        }}
      >
        <Box
          component="img"
          src="/images/MySpend/userResearch.png"
          alt="User Research"
          sx={{
            width: "100%",
            maxWidth: "1300px",
            height: "auto",
            margin: { xs: "10px auto", sm: "20px auto" },
            marginTop: "20px",
            borderRadius: "25px",
            border: "1px solid black",
          }}
        />
      </Box>

      <Box
        sx={{
          maxWidth: "1300px",
          margin: "0 auto",
          marginTop: "40px",
          padding: { xs: "10px", sm: "20px" },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato",
            fontWeight: 400,
            fontSize: "18px",
          }}
        >
          Gen Z users face <b>growing anxiety</b> when dealing with their
          finances. They need accessible tools that are personalized to their
          lives from trusted sources, such as TD, a leading financial
          institution.
        </Typography>
      </Box>

      <Box
        sx={{
          padding: "10px",
        }}
      >
        <Box
          component="img"
          src="/images/MySpend/quote.png"
          alt="Impactful Quote"
          sx={{
            width: "100%",
            maxWidth: "1300px",
            height: "auto",
            margin: { xs: "10px auto", sm: "20px auto" },
            marginTop: "20px",
            borderRadius: "25px",
            border: "1px solid black",
          }}
        />
      </Box>

      <Box
        sx={{
          maxWidth: "1300px",
          margin: "0 auto",
          marginTop: "40px",
          padding: { xs: "10px", sm: "20px" },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato",
            fontWeight: 100,
            fontStyle: "italic",
            fontSize: "18px",
            marginBottom: "20px",
          }}
        >
          PAIN POINTS
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: "40px",
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontWeight: 700,
                fontSize: "20px",
              }}
            >
              BUDGET FATIGUE
            </Typography>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontWeight: 400,
                fontSize: "18px",
              }}
            >
              Users feel overwhelmed from manually inputting information for
              budgets.
            </Typography>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontWeight: 700,
                fontSize: "20px",
              }}
            >
              FINANCIAL MISDIRECTION
            </Typography>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontWeight: 400,
                fontSize: "18px",
              }}
            >
              There is a lack of clear guidance when viewing financial insights.
              Users are unsure what to do to improve/maintain their financial
              well-being.
            </Typography>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontWeight: 700,
                fontSize: "20px",
              }}
            >
              DULL FINANCIAL TOOLS
            </Typography>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontWeight: 400,
                fontSize: "18px",
              }}
            >
              The current options for financial management are outdated and
              static, demotivating users from proactively managing their
              finances.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          maxWidth: "1300px",
          margin: "0 auto",
          marginTop: "40px",
          padding: { xs: "10px", sm: "20px" },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato",
            fontWeight: 400,
            fontSize: "18px",
          }}
        >
          TD&apos;s current platform lacks <b>key budgeting features</b> and
          fails to meet users&apos; need for effortless financial management.
        </Typography>
      </Box>

      <Box
        sx={{
          backgroundColor: "#D3E9D4",
          justifyContent: "center",
          flexDirection: "column",
          alignContent: "center",
          marginTop: "25px",
          padding: { xs: "10px", sm: "20px" },
        }}
      >
        <Box
          sx={{
            maxWidth: "1300px",
            margin: "0 auto",
          }}
        >
          <Problem
            intro="AND SO, WE ASKED:"
            introColour="#1A5336"
            problemStatement="How might we enable Gen Z users to keep up with their financial well-being on a regular basis?"
          />
        </Box>
      </Box>

      <Box
        sx={{
          maxWidth: "1300px",
          margin: "0 auto",
          marginTop: "40px",
          padding: { xs: "10px", sm: "20px" },
        }}
      >
        <Section header="SOLUTION" description={[]} />
      </Box>

      <Box
        sx={{
          padding: "10px",
        }}
      >
        <Box
          component="img"
          src="/images/MySpend/valueProp.png"
          alt="Value Proposition"
          sx={{
            width: "100%",
            maxWidth: "1300px",
            height: "auto",
            margin: { xs: "10px auto", sm: "20px auto" },
            marginTop: "20px",
            borderRadius: "25px",
            border: "1px solid black",
          }}
        />
      </Box>

      <Box
        sx={{
          maxWidth: "1300px",
          margin: "0 auto",
          marginTop: "40px",
          padding: { xs: "10px", sm: "20px" },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato",
            fontWeight: 400,
            fontSize: "18px",
          }}
        >
          The MySpend Dashboard empowers users with{" "}
          <b>actionable financial insights</b> through intuitive digital tools,
          addressing the gaps in traditional money management. By providing
          short-term spending insights, this solution offers a{" "}
          <b>holistic view of financial well-being</b>, helping users make
          informed decisions.
        </Typography>
      </Box>

      <Box
        sx={{
          maxWidth: "1300px",
          margin: "0 auto",
          marginTop: "40px",
          padding: { xs: "10px", sm: "20px" },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato",
            fontWeight: 100,
            fontStyle: "italic",
            fontSize: "18px",
            marginBottom: "20px",
          }}
        >
          FINAL DESIGN
        </Typography>
      </Box>

      <Box
        sx={{
          maxWidth: "1300px",
          margin: { sm: "10px", md: "20px auto" },
          marginTop: "40px",
          border: "1px solid black",
          borderRadius: "25px",
        }}
      >
        {[
          {
            gif: "/images/MySpend/mySpend1.gif",
            description:
              "The TD MySpend app now has a dashboard that has a switch for 3 different views: a budget, a calendar view, and a MySpend recap. The user is able to set a budget for the different categories that are already within the MySpend app. Within each category, there are more items and the user is able to allocate a budget to those as well. The user's bills will also display here and they can be entered in manually or analyzed from reoccurring payments.",
          },
          {
            gif: "/images/MySpend/mySpend2.gif",
            description:
              "The calendar shows a high-level view of the user's cash inflows and outflows as well as any bills that have been paid and bills that need to be paid. This serves as a visual for how the user can plan their savings/money throughout the month and ensure they are staying within their budgets.",
          },
          {
            gif: "/images/MySpend/mySpend3.gif",
            description:
              "The MySpend recap is similar to Spotify or BeReal recap where it displays calculated metrics based on the user's savings and acheived goals. These can be shared to friends and family to promote friendly competition and entice more users to be aware of the MySpend app or try the app themselves.",
          },
        ].map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "30px",
              padding: "30px",
            }}
          >
            <Box
              sx={{
                flex: 1,
                marginRight: { xs: 0, md: "20px" },
                marginBottom: { xs: "20px", md: 0 },
              }}
            >
              <Box
                component="img"
                src={item.gif}
                alt={`GIF ${index + 1}`}
                sx={{
                  width: "70%",
                  height: "auto",
                  borderRadius: { xs: "45px", lg: "80px" },
                }}
              />
            </Box>

            <Box
              sx={{
                flex: 1,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontWeight: 400,
                  fontSize: "18px",
                }}
              >
                {item.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          maxWidth: "1300px",
          margin: "0 auto",
          marginTop: "40px",
          padding: { xs: "10px", sm: "20px" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "left",
          gap: "20px",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Section
            header="OUTCOMES"
            description={[
              <>
                My team and I presented our proposal to industry leaders,
                resulting in us placing 2nd overall!
              </>,
            ]}
          />

          <Box sx={{ marginTop: "10px" }}>
            <Button
              variant="text"
              endIcon={<ArrowOutward />}
              sx={{
                fontSize: { xs: "14px", md: "18px" },
                backgroundColor: "transparent",
                color: "#888",
                fontWeight: "400",
                position: "relative",
                overflow: "hidden",
                textAlign: "center",
                transition: "transform 0.03s, background-color 0.06s",
                boxShadow: "none",
                textTransform: "none",
                width: "fit-content",
                minWidth: "180px",
                whiteSpace: "nowrap",
                marginBottom: { xs: "0", md: "-20px" },
                left: "0",
                "& .MuiButton-endIcon": {
                  transition: "transform 0.3s ease-in-out",
                },
                "&:hover": {
                  color: "#222",
                  borderColor: "#222",
                  "& .MuiButton-endIcon": {
                    transform: "rotate(45deg)",
                  },
                  "&::after": {
                    width: "100%",
                  },
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: "7px",
                  left: "0",
                  height: "1px",
                  backgroundColor: "#222",
                  width: "0%",
                  transition: "width 0.4s ease",
                },
              }}
              href="https://drive.google.com/file/d/1CyC69mQ5sxbagyYlnLnlSXeNmLEGpnZT/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Our Presentation
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="/images/MySpend/winningPic.png"
            alt="Placed 2nd Place"
            style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          maxWidth: "1300px",
          margin: "0 auto",
          marginTop: "150px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Box>
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            disableRipple
            sx={{
              textTransform: "none",
              fontWeight: 400,
              fontSize: { xs: "14px", sm: "16px", md: "18px" },
              color: "#888",
              position: "relative",
              overflow: "hidden",
              textAlign: "center",
              padding: "5px 10px",
              transition: "color 0.3s ease, transform 0.3s ease",
              "&:hover": {
                color: "#111",
                background: "none",
                "&::after": {
                  width: "100%",
                },
              },
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: "8px",
                left: "0",
                height: "2px",
                backgroundColor: "#111",
                width: "0%",
                transition: "width 0.4s ease",
              },
            }}
          >
            BACK TO TOP
          </Button>
        </Box>

        <Typography
          sx={{
            fontFamily: "Lato",
            fontSize: "24px",
            fontWeight: 700,
          }}
        >
          |
        </Typography>

        <Box>
          <Button
            href="/#section2"
            disableRipple
            sx={{
              textTransform: "none",
              fontWeight: 400,
              fontSize: { xs: "14px", sm: "16px", md: "18px" },
              color: "#888",
              position: "relative",
              overflow: "hidden",
              textAlign: "center",
              padding: "5px 10px",
              transition: "color 0.3s ease, transform 0.3s ease",
              "&:hover": {
                color: "#111",
                background: "none",
                "&::after": {
                  width: "100%",
                },
              },
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: "8px",
                left: "0",
                height: "2px",
                backgroundColor: "#111",
                width: "0%",
                transition: "width 0.4s ease",
              },
            }}
          >
            SEE MORE WORKS
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          margin: "auto",
          width: "100%",
        }}
      >
        <Box sx={{ marginTop: "120px" }}>
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
