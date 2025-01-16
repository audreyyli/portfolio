"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Footer from "@/app/components/footer/footer.js";
import Hero from "../../components/hero/hero.js";
import Summary from "../../components/summary/summary.js"
import Section from "../../components/section/section.js"
import Problem from "../../components/problem/problem.js"
import { Box, Button, Typography, Divider } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

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
              position: 'relative',
              width: '100vw',
              height: '45vh',
              overflow: 'hidden',
              backgroundColor: '#FFDEE7',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            {/* Main Image */}
            <Box
              component="img"
              src="/images/InstagramMock.png"
              alt="Instagram Mock"
              sx={{
                maxWidth: "1500px",
                width: '100%',
                height: '100%',
                objectFit: 'cover',
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
            title="INSTAGRAM"
            timeline="Oct 2024 - Dec 2024"
            role="Product Designer & Analyst"
            toolsSkills="Figma, Prototyping, Visual Design, User Research, Product Design"
            company="Product Strategy"
            header="Improving personalization for Instagram's explore page"
            projectType="Fellowship Project"
            description="A feature to enhance content discovery and provide personalized recommendations through a customizable Instagram Explore page."
            mainColour="#FFDEE7"
            subColour="#FF5093"
          />
        </Box>

        <Divider sx={{ width: "100%", maxWidth: "1300px", marginTop: "70px", marginBottom: "50px", }} />
      </Box>
      
      <Box
        sx={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: { xs: "10px", sm: "20px" },
        }}>
        <Summary
          context={{
            description: "I joined Ivey Product Society\'s fellowship program to tackle a project through a product lens, expanding my expertise in product management and strategy.",
            customTitle: "A new challenge",
          }}
          problem={{
            description: "With so many different creators, genres, and interests, it\'s difficult to find content that suits specific interests.",
            customTitle: "Content discovery isn\'t personalized enough",
          }}
          solution={{
            images: [
              "/images/igSolution.png",
            ],
            customTitle: "Customizable Explore Pages on Instagram",
          }}
          outcomes={{
            images: [
              "/images/igOutcome.png",
            ],
            customTitle: "Presenting to product leaders on Product Review Day",
          }}
        />

        <Divider sx={{ width: "100%", maxWidth: "1300px", marginTop: "70px", marginBottom: "50px", }} />
      </Box>

      <Box
        sx={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: { xs: "10px", sm: "20px" },
        }}>
        <Section
          header="HOW IT STARTED"
          description={[
            <>
              Instagram is a platform that connects over a billion users worldwide. But at its core, Instagram is more than just a social app—it&apos;s a space for people to{" "}
              <b>explore their passions</b>, <b>build communities</b>, and <b>find content that truly resonates with them</b>.
            </>,
            <>
              One of Instagram&apos;s primary goals has always been to help users explore what they love. But while Instagram excels in many ways, there&apos;s a growing gap in its ability to{" "}
              <b>personalize content discovery</b> for its users.
            </>,
          ]}
        />
      </Box>

      <Box
        sx={{
          backgroundColor: "#FFDEE7",
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
              intro="AND SO, I ASKED:"
              introColour="#FF5093"
              problemStatement="How can Instagram improve its content discovery to create a personalized feed expereince for users?"
            />
          </Box>
      </Box>

      <Box
        sx={{
          maxWidth: "1300px",
          margin: "0 auto",
          marginTop: "40px",
          padding: { xs: "10px", sm: "20px" },
        }}>
        <Section
          header="EXPLORING THE PROBLEM"
          description={[
            <>
              There are many steps to finding new, personalized content on social media. I broke down the process into 4 main steps.
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
          src="/images/jobToBeDone.png"
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
        }}>
          <Typography
            sx={{
              fontFamily: "Lato",
              fontWeight: 400,
              fontSize: "18px",
            }}
          >
            Where within the user&apos;s journey would there be an opportunity to make an impact? Taking into consideration how each step creates value for the user and the constraints, I mapped out the user&apos;s journey to make a decision.
          </Typography>
      </Box>

      <Box
        sx={{
          padding: "10px",
        }}
      >
        <Box
          component="img"
          src="/images/userJourney.png"
          alt="User Journey"
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
        }}>
          <Typography
            sx={{
              fontFamily: "Lato",
              fontWeight: 400,
              fontSize: "18px",
            }}
          >
            I identified that the scrolling step would allow for the opportunity to make the largest impact. After making a decision on which step, I conducted user research to further help me refine my solution.
          </Typography>
      </Box>

      <Box
        sx={{
          maxWidth: "1300px",
          margin: "0 auto",
          marginTop: "40px",
          padding: { xs: "10px", sm: "20px" },
        }}>
        <Section
          header="USER RESEARCH"
          description={[
            <>
              I began by defining the average Instagram user. They are someone who is <b>young and casually</b> uses Instagram. They are looking for <b>personable content</b> that are sources of <b>entertainment or connects them with trends</b>.
            </>,
            <>
              From here I started conducting user research.
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
          src="/images/userTestimonies.png"
          alt="User Testimonies"
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
        }}>
          <Typography
            sx={{
              fontFamily: "Lato",
              fontWeight: 400,
              fontSize: "18px",
            }}
          >
            Users feel a disconnect with the content being shown on Instagram, opting for other social platforms that provide more personalized and niche-focused recommendations. Many users struggle to find content aligned with their specific interests, expressing frustration with Instagram&apos;s Explore page and algorithms.
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
        {/* Subtitle */}
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

        {/* Left and Right Sections */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: "40px",
          }}
        >
          {/* Left Section */}
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontWeight: 700,
                fontSize: "20px",
              }}
            >
              CONTENT MISALIGNMENT
            </Typography>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontWeight: 400,
                fontSize: "18px",
              }}
            >
              Users feel that their explore pages are not tailored to their specific interests.
            </Typography>
          </Box>

          {/* Right Section */}
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontWeight: 700,
                fontSize: "20px",
              }}
            >
              LACK OF NICHE CONTENT
            </Typography>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontWeight: 400,
                fontSize: "18px",
              }}
            >
              Users with unique or niche interests struggle to find posts or topics.
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
        }}>
        <Section
          header="SOLUTION"
          description={[
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
          src="/images/valueProp.png"
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
        }}>
          <Typography
            sx={{
              fontFamily: "Lato",
              fontWeight: 400,
              fontSize: "18px",
            }}
          >
            By catering to a broader range of preferences, Instagram can better serve niche interests and enhance user satisfaction, ensuring the platform remains relevant and engaging. This approach benefits users by making it easier to discover content that resonates with their diverse interests, while Instagram gains increased user engagement and retention.
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
        {/* Subtitle */}
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

      {/* GIF and Text Section */}
      <Box
        sx={{
          maxWidth: "1300px",
          margin: { xs: "10px auto", sm: "20px auto" },
          marginTop: "40px",
          border: "1px solid black",
          borderRadius: "25px",
        }}
      >
        {[
          {
            gif: "/images/igRecord1.gif",
            description: "Instagram's explore page now has different tabs.",
          },
          {
            gif: "/images/igRecord2.gif",
            description: "The \"For You\" page is a general page and works similar to the current explore page. There is now a \"Trending\" page that has preset tabs to show the popular content for each category. The \"Friends\" tab shows the content that your friends have recently interacted with. Lastly, there is a \"+\" or a tab to add a customizable explore page, tailored with specific interests.",
          },
          {
            gif: "/images/igRecord3.gif",
            description: "The custom explore page takes in selected interests and curate an explore page specifically to those selected interests. No longer interested in those topics? No worries! The page can be easily edited!",
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
            {/* GIF on the left */}
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

            {/* Text on the right */}
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
        }}>
        <Section
          header="REFLECTION"
          description={[
            <>
              Sometimes, the most impactful innovations lie in simplifying what already exists and truly addressing user needs. By providing users with greater control and customization—such as personalized tabs or interest-based filtering—Instagram can bridge the gap between user expectations and platform experience.
            </>
          ]}
        />
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
        {/* Left Button */}
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
          }}>
            |
        </Typography>

        {/* Right Button */}
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

      {/* Footer Section */}
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