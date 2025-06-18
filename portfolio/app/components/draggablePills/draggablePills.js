import React, { useEffect, useRef, useState } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import Matter from "matter-js";

const roles = [
  {
    label: "researcher",
    img: "/images/researcherPill.png",
    sizes: { xs: { height: 25, width: 134 }, md: { height: 31, width: 161 } },
  },
  {
    label: "designer",
    img: "/images/designerPill.png",
    sizes: { xs: { height: 25, width: 118 }, md: { height: 31, width: 142 } },
  },
  {
    label: "ui/ux designer",
    img: "/images/uiuxPill.png",
    sizes: { xs: { height: 25, width: 160 }, md: { height: 31, width: 195 } },
  },
  {
    label: "developer",
    img: "/images/developerPill.png",
    sizes: { xs: { height: 25, width: 128 }, md: { height: 31, width: 154 } },
  },
  {
    label: "product manager",
    img: "/images/PMPill.png",
    sizes: { xs: { height: 25, width: 185 }, md: { height: 31, width: 225 } },
  },
];

const DraggablePills = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const boxWidth = isMobile ? 320 : 500;
  const boxHeight = isMobile ? 150 : 190;

  const sceneRef = useRef();
  const engine = useRef(Matter.Engine.create());
  const [bodies, setBodies] = useState([]);
  const bodiesRef = useRef([]);

  useEffect(() => {
    const world = engine.current.world;
    Matter.World.clear(world);
    Matter.Engine.clear(engine.current);

    engine.current = Matter.Engine.create();
    const updatedWorld = engine.current.world;
    updatedWorld.gravity.y = 1;

    const wallThickness = isMobile ? 50 : 40;

    const walls = [
      Matter.Bodies.rectangle(
        boxWidth / 2,
        boxHeight + wallThickness / 2,
        boxWidth,
        wallThickness,
        { isStatic: true }
      ),
      Matter.Bodies.rectangle(
        boxWidth / 2,
        -wallThickness / 2,
        boxWidth,
        wallThickness,
        { isStatic: true }
      ),
      Matter.Bodies.rectangle(
        -wallThickness / 2,
        boxHeight / 2,
        wallThickness,
        boxHeight,
        { isStatic: true }
      ),
      Matter.Bodies.rectangle(
        boxWidth + wallThickness / 2,
        boxHeight / 2,
        wallThickness,
        boxHeight,
        { isStatic: true }
      ),
    ];

    const pills = roles.map((role, i) => {
      const { width, height } = isMobile ? role.sizes.xs : role.sizes.md;
      const body = Matter.Bodies.rectangle(80 + i * 30, 40, width, height, {
        restitution: 0.8,
        friction: 0.2,
        frictionAir: 0.05,
      });
      body.label = role.label;
      return body;
    });

    Matter.World.add(updatedWorld, [...walls, ...pills]);
    bodiesRef.current = pills;

    const mouse = Matter.Mouse.create(sceneRef.current);
    const mouseConstraint = Matter.MouseConstraint.create(engine.current, {
      mouse,
      constraint: { stiffness: 0.2, render: { visible: false } },
    });

    Matter.World.add(updatedWorld, mouseConstraint);
    Matter.Engine.run(engine.current);

    const update = () => {
      Matter.Engine.update(engine.current, 1000 / 60);
      setBodies(
        pills.map((body) => ({
          id: body.label,
          x: body.position.x,
          y: body.position.y,
          angle: body.angle,
        }))
      );
      requestAnimationFrame(update);
    };
    update();

    return () => {
      Matter.World.clear(updatedWorld);
      Matter.Engine.clear(engine.current);
    };
  }, [isMobile, boxWidth, boxHeight]);

  useEffect(() => {
    if (!isMobile) return;

    const handleOrientation = (event) => {
      const gamma = event.gamma || 0;
      const beta = event.beta || 0;

      const gravityX = gamma / 90;
      const gravityY = beta / 90;

      engine.current.world.gravity.x = gravityX;
      engine.current.world.gravity.y = gravityY;
    };

    window.addEventListener("deviceorientation", handleOrientation, true);

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation, true);
    };
  }, [isMobile]);

  return (
    <Box
      ref={sceneRef}
      sx={{
        width: `${boxWidth}px`,
        height: `${boxHeight}px`,
        margin: "auto",
        position: "relative",
        cursor: "grab",
      }}
    >
      {bodies.map((body) => {
        const roleObj = roles.find((r) => r.label === body.id);
        const { width, height } = isMobile
          ? roleObj.sizes.xs
          : roleObj.sizes.md;

        return (
          <Box
            key={body.id}
            sx={{
              position: "absolute",
              transform: `translate(${body.x - width / 2}px, ${body.y - height / 2}px) rotate(${body.angle ?? 0}rad)`,
              transition: "transform 0.05s linear",
              pointerEvents: "none",
            }}
          >
            <Image
              src={roleObj.img}
              alt={body.id}
              width={width}
              height={height}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default DraggablePills;
