// // import React, { useRef, useEffect, useState } from "react";
// // import { useRouter } from "next/navigation";
// // import { Box, useMediaQuery, useTheme } from "@mui/material";
// // import { motion, useMotionValue, animate } from "framer-motion";
// // import WorkItem from "../workItem/workItem";

// // const WorksCarousel = ({ items }) => {
// //   const router = useRouter();
// //   const theme = useTheme();
// //   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

// //   const containerRef = useRef(null);
// //   const totalItems = items.length;
// //   const visibleItems = isMobile ? 3 : 5;

// //   const itemWidth = isMobile ? 320 : 550;
// //   const itemSpacing = isMobile ? -70 : -120;
// //   const totalItemOffset = itemWidth + itemSpacing;

// //   const [currentVirtualIndex, setCurrentVirtualIndex] = useState(0);
// //   const isScrollingRef = useRef(false);

// //   const x = useMotionValue(0);

// //   const handleWheel = (e) => {
// //     e.preventDefault();
// //     if (isScrollingRef.current) return;

// //     const direction = e.deltaY > 0 ? 1 : -1;

// //     setCurrentVirtualIndex((prev) => {
// //       const next = prev + direction;
// //       return ((next % totalItems) + totalItems) % totalItems;
// //     });

// //     isScrollingRef.current = true;
// //     setTimeout(() => {
// //       isScrollingRef.current = false;
// //     }, 600);
// //   };

// //   useEffect(() => {
// //     const container = containerRef.current;
// //     container.addEventListener("wheel", handleWheel, { passive: false });
// //     return () => container.removeEventListener("wheel", handleWheel);
// //   }, []);

// //   useEffect(() => {
// //     const containerWidth = isMobile
// //       ? window.innerWidth * 0.95
// //       : window.innerWidth * 0.8;
// //     const mobileCenterAdjustment = isMobile
// //       ? containerWidth / 2 - itemWidth / 2
// //       : 0;
// //     const centerOffset =
// //       -(currentVirtualIndex * totalItemOffset) + mobileCenterAdjustment;

// //     animate(x, centerOffset, {
// //       type: "tween",
// //       duration: 5,
// //       ease: "easeInOut",
// //     });
// //   }, [currentVirtualIndex, totalItemOffset, x, isMobile, itemWidth]);

// //   const modulo = (n, m) => ((n % m) + m) % m;

// //   return (
// //     <Box
// //       ref={containerRef}
// //       sx={{
// //         height: "91%",
// //         width: "100%",
// //         overflow: "hidden",
// //         backgroundColor: "#F1F1F1",
// //         display: "flex",
// //         alignItems: "flex-end",
// //         justifyContent: "center",
// //       }}
// //     >
// //       <Box
// //         sx={{
// //           width: isMobile ? "95%" : "80%",
// //           display: "flex",
// //           justifyContent: "center",
// //         }}
// //       >
// //         <motion.div style={{ display: "flex", position: "relative" }}>
// //           {Array.from({ length: visibleItems }).map((_, idx) => {
// //             const offset = idx - Math.floor(visibleItems / 2);
// //             const virtualIdx = currentVirtualIndex + offset;
// //             const actualIdx = modulo(virtualIdx, totalItems);
// //             const isActive = offset === 0;
// //             const translateY = isActive
// //               ? isMobile
// //                 ? -100
// //                 : -100
// //               : isMobile
// //                 ? 20
// //                 : 50;
// //             const zIndex = isActive ? 2 : 1;
// //             const scale = isActive ? 1.1 : 0.9;
// //             const opacity = isActive ? 1 : 0.4;

// //             const item = items[actualIdx];

// //             const handleClick = () => {
// //               setIsExiting(true);
// //               setTimeout(() => {
// //                 router.push(item.link);
// //               }, 200);
// //             };

// //             const [isHovered, setIsHovered] = useState(false);

// //             if (isActive) {
// //               return (
// //                 <motion.div
// //                   key={virtualIdx}
// //                   animate={{
// //                     y: translateY,
// //                     scale,
// //                     opacity,
// //                   }}
// //                   transition={{
// //                     type: "spring",
// //                     stiffness: 500,
// //                     damping: 25,
// //                   }}
// //                   style={{
// //                     zIndex,
// //                     position: "relative",
// //                     marginLeft: idx === 0 ? 0 : itemSpacing,
// //                     width: `${itemWidth}px`,
// //                     cursor: "pointer",
// //                   }}
// //                   onClick={handleClick}
// //                   onMouseEnter={() => setIsHovered(true)}
// //                   onMouseLeave={() => setIsHovered(false)}
// //                 >
// //                   <WorkItem
// //                     {...item}
// //                     isActive={isActive}
// //                     isHovered={isHovered}
// //                   />
// //                 </motion.div>
// //               );
// //             }
// //             return (
// //               <motion.div
// //                 key={virtualIdx}
// //                 animate={{ y: translateY, scale, opacity }}
// //                 transition={{
// //                   type: "spring",
// //                   stiffness: 500,
// //                   damping: 35,
// //                   mass: 1.5,
// //                 }}
// //                 style={{
// //                   zIndex,
// //                   position: "relative",
// //                   marginLeft: idx === 0 ? 0 : -120,
// //                   cursor: "default",
// //                 }}
// //               >
// //                 <WorkItem {...item} isActive={isActive} isHovered={false} />
// //               </motion.div>
// //             );
// //           })}
// //         </motion.div>
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default WorksCarousel;

// import React from "react";
// import {
//   Box,
//   Typography,
//   Button,
//   Chip,
//   Stack,
//   IconButton,
//   Link,
//   useMediaQuery,
// } from "@mui/material";
// import Image from "next/image";
// import DraggablePills from "../draggablePills/draggablePills";
// import { useTheme } from "@mui/material/styles";

// const AudreyProfileCard = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   return (
//     <Box
//       sx={{
//         height: "100%",
//         width: "100%",
//         borderTopRightRadius: { xs: 24, md: 48 },
//         borderBottomRightRadius: { xs: 24, md: 48 },
//         borderTopLeftRadius: { xs: 24, md: 0 },
//         borderBottomLeftRadius: { xs: 24, md: 0 },
//         textAlign: "left",
//         px: { xs: 2, md: 3 },
//         py: { xs: 2, md: 3 },
//         background: "#F1F1F1",
//         ml: 0,
//         alignItems: "center",
//       }}
//     >
//       <Box
//         component="img"
//         src="/images/me.png"
//         alt="Audrey Li"
//         sx={{
//           width: { xs: "100%", sm: 530 },
//           height: "auto",
//           mx: "auto",
//           mb: 3,
//           borderRadius: 4,
//           display: "block",
//         }}
//       />

//       <Typography
//         sx={{
//           fontFamily: "Urbanist, sans-serif",
//           fontWeight: 400,
//           mb: 2,
//           fontSize: { xs: "20px", md: "28px" },
//           lineHeight: 1.4,
//           color: "#808080",
//           textAlign: "left",
//         }}
//       >
//         I’m Audrey Li, a{" "}
//         <Box
//           component="span"
//           sx={{
//             color: "#171717",
//             background:
//               "linear-gradient(to bottom, transparent 60%, #C9DEFF 60%)",
//           }}
//         >
//           product designer
//         </Box>{" "}
//         &{" "}
//         <Box
//           component="span"
//           sx={{
//             color: "#171717",
//             background:
//               "linear-gradient(to bottom, transparent 60%, #C9DEFF 60%)",
//           }}
//         >
//           developer
//         </Box>{" "}
//         who loves shaping ideas into products through{" "}
//         <Box
//           component="span"
//           sx={{
//             color: "#171717",
//             background:
//               "linear-gradient(to bottom, transparent 60%, #C9DEFF 60%)",
//           }}
//         >
//           design & code
//         </Box>
//         .
//       </Typography>

//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "row",
//           alignItems: "center",
//           mb: 2,
//         }}
//       >
//         <Typography
//           sx={{
//             fontWeight: "bold",
//             fontFamily: "Urbanist, sans-serif",
//             fontSize: { xs: "16px", md: "20px" },
//             color: "#171717",
//             mr: 4,
//             mb: { xs: 0.5, sm: 0 },
//           }}
//         >
//           Currently
//         </Typography>
//         <Typography
//           sx={{
//             color: "#808080",
//             fontFamily: "Lato, sans-serif",
//             fontSize: { xs: "14px", md: "18px" },
//             textAlign: "left",
//           }}
//         >
//           Product @ TwoSmallMen
//         </Typography>
//       </Box>

//       <DraggablePills />

//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           width: "100%",
//           mt: 1.5,
//         }}
//       >
//         <Button
//           href="#resume"
//           sx={{
//             fontSize: "16px",
//             fontFamily: "Urbanist, sans-serif",
//             color: "#808080",
//             textTransform: "none",
//             fontWeight: 300,
//             mx: "auto",
//             mt: 1,
//             mb: { xs: 0, md: 0.2 },
//             position: "relative",
//             overflow: "hidden",
//             "&:hover": {
//               backgroundColor: "transparent",
//               color: "#171717",
//             },
//             "&::after": {
//               content: '""',
//               position: "absolute",
//               top: 32,
//               bottom: 0,
//               left: 0,
//               width: "100%",
//               height: "1px",
//               backgroundColor: "#171717",
//               transform: "scaleX(0)",
//               transformOrigin: "left",
//               transition: "transform 0.3s ease",
//             },
//             "&:hover::after": {
//               transform: "scaleX(1)",
//             },
//           }}
//         >
//           View My Resume ↗
//         </Button>
//       </Box>

//       <Box
//         sx={{
//           backgroundColor: "#D9D9D9",
//           borderRadius: "36px",
//           padding: 2,
//           mt: { xs: 0, md: 2 },
//         }}
//       >
//         <Stack
//           direction={isMobile ? "row" : "row"}
//           spacing={isMobile ? 1.5 : 2}
//           justifyContent="center"
//           flexWrap={isMobile ? "wrap" : "nowrap"}
//         >
//           {[
//             {
//               label: "GitHub",
//               href: "https://github.com/yourgithub",
//               src: "/images/githubLogo.png",
//               rotate: "-6.03deg",
//               hoverRotate: "-20deg",
//             },
//             {
//               label: "Email",
//               href: "mailto:youremail@email.com",
//               src: "/images/gmailLogo.png",
//               rotate: "0deg",
//               hoverRotate: "10deg",
//             },
//             {
//               label: "Nerdville",
//               href: "https://linkedin.com/in/yourlinkedin",
//               src: "/images/linkedInLogo.png",
//               rotate: "5.66deg",
//               hoverRotate: "20deg",
//             },
//           ].map((icon, index) => (
//             <Box
//               key={index}
//               sx={{
//                 position: "relative",
//                 width: 55,
//                 height: 55,
//                 "&:hover .icon": {
//                   transform: `translateY(-20px) rotate(${icon.hoverRotate})`,
//                   boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)",
//                 },
//                 transition: "all 0.3s ease",
//               }}
//             >
//               <Box
//                 className="label"
//                 sx={{
//                   position: "absolute",
//                   top: "90%",
//                   left: "50%",
//                   transform: "translate(-50%, -50%)",
//                   fontSize: "12px",
//                   fontFamily: "Urbanist, sans-serif",
//                   fontWeight: 400,
//                   color: "#333",
//                   zIndex: 0,
//                   opacity: 1,
//                 }}
//               >
//                 {icon.label}
//               </Box>

//               <IconButton
//                 component={Link}
//                 href={icon.href}
//                 target="_blank"
//                 className="icon"
//                 sx={{
//                   p: 0,
//                   borderRadius: 3,
//                   transform: `rotate(${icon.rotate})`,
//                   transition: "transform 0.3s ease",
//                   zIndex: 1,
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   "&:hover": {
//                     backgroundColor: "transparent",
//                   },
//                 }}
//               >
//                 <Image src={icon.src} alt={icon.label} width={55} height={55} />
//               </IconButton>
//             </Box>
//           ))}
//         </Stack>
//       </Box>

//       <Typography
//         color="text.secondary"
//         sx={{
//           fontSize: { xs: "12px", md: "16px" },
//           display: "block",
//           mt: 2,
//           fontFamily: "Urbanist, sans-serif",
//           fontWeight: 300,
//           textAlign: "center",
//         }}
//       >
//         © 2025 | Designed & coded with love & lots of iterations by Audrey Li
//       </Typography>
//     </Box>
//   );
// };

// export default AudreyProfileCard;
