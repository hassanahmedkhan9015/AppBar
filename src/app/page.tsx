"use client";
import React, { useState } from "react";
import "./globals.css";
import {
  Badge,
  Button,
  DialogTitle,
  Dropdown,
  List,
  ListDivider,
  ListItem,
  MenuButton,
  MenuItem,
  ModalClose,
  useTheme,
} from "@mui/joy";
import Drawer from "@mui/joy/Drawer";

import { Divider, Input, Sheet } from "@mui/joy";

import Menu from "@mui/joy/Menu";

import { AppBar, Box, Typography } from "@mui/material";
import Image from "next/image";
import Logo from "./assets/finyou.svg";
import Toggle from "./assets/Toggle.svg";
import { ArrowDropDown } from "@mui/icons-material";

import { items } from "./components/Items";
import { dropdownData } from "./components/Items";
import { dropdownDataTwo } from "./components/Items";
import { badgesData } from "./components/Items";
import Responsive from "./components/Responsive";
import "./page.module.css";

function page() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Sheet
        // color="primary"
        // variant="soft"
        // invertedColors

        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 2,
        }}
      >
        {/* Nav-Bar-Drawer */}
        <Box sx={{ display: "flex" }}>
          <Button
            color="neutral"
            variant="plain"
            sx={{
              display: { md: "none", sm: "block" },
              position: "",
              // ml: 4,
              cursor: "pointer",
              [theme.breakpoints.down("md")]: {
                m: "auto",
              },
              [theme.breakpoints.down("sm")]: {
                ml: "-px",
              },
            }}
            onClick={() => setOpen(true)}
          >
            <Image src={Toggle} alt="Toggle-Button" />
          </Button>
          <Drawer open={open} onClose={() => setOpen(false)} size="sm">
            <ModalClose />
            <DialogTitle>
              {" "}
              <Responsive />{" "}
            </DialogTitle>
          </Drawer>
        </Box>
        {/* Nav-Bar-Logo  */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            alignContent: "center",
            [theme.breakpoints.down("md")]: {
              display: "none",
            },
          }}
        >
          <Image
            src={Logo}
            alt="logo"
            style={{ width: "139px", height: "34px" }}
          />
        </Box>
        {/*Link & Items & Dropdowns*/}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            m: "auto",
            [theme.breakpoints.down("md")]: {
              display: "none",
            },
          }}
        >
          {items.map((item, index) => (
            <Typography
              key={index}
              sx={{
                mx: "auto",
                fontSize: 11,
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                ":hover": {
                  color: "#16748D",
                },
                cursor: "pointer",
              }}
            >
              <Image
                alt={`Item ${index}`}
                src={item.image}
                className="svg-hover"
              />
              {item.label}
            </Typography>
          ))}

          {/* Divider  */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              [theme.breakpoints.down("md")]: {
                display: "none",
              },
            }}
          >
            <Divider orientation="vertical" sx={{ height: 40 }} />
          </Box>

          {/* Items & Dropdowns */}
          {dropdownData.map((data, index) => (
            <Dropdown key={index}>
              <MenuButton variant="plain" size="sm" sx={{ display: "block" }}>
                <Image src={data.icon} alt={`${data.heading} Icon`} />
                <Typography
                  sx={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    fontSize: 10,
                  }}
                >
                  {data.heading}
                  {data.decorator ? <ArrowDropDown sx={{ width: 17 }} /> : null}
                </Typography>
              </MenuButton>
              <Menu variant="plain" size="sm">
                {data.options.map((option, i) => (
                  <MenuItem key={i}>{option}</MenuItem>
                ))}
              </Menu>
            </Dropdown>
          ))}
        </Box>
        {/* Input-Field-Box */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2.5,
            m: "auto",
            [theme.breakpoints.down("sm")]: {
              display: "none",
            },
          }}
        >
          <Input
            disabled={false}
            placeholder="    Ask Fin for"
            className="input-text"
            sx={{
              p: 1,
              width: "239.028px",
              height: " 37.312px",
              flexShrink: 0,
            }}
          />
        </Box>

        {/* Profile & Icons-List*/}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            mx: "auto",
            [theme.breakpoints.down("sm")]: {
              m: "auto",
              gap: 1,
            },
            [theme.breakpoints.down("md")]: {
              m: "auto",
              gap: 3,
            },
          }}
        >
          {badgesData.map((badge, index) => (
            <Badge
              key={index}
              badgeContent={badge.badgeContent}
              color="danger"
              size="sm"
              badgeInset="5% 25%"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Image
                src={badge.icon}
                alt={badge.text}
                style={{ borderRadius: "10%" }}
              />
              <Typography sx={{ fontSize: 12, mt: 0.5 }}>
                {badge.text}
              </Typography>
            </Badge>
          ))}

          {/* Dropdown-Start  */}
          <Dropdown>
            <MenuButton
              variant="plain"
              size="sm"
              sx={{ fontSize: 12, display: "block" }}
            >
              <Image
                src={dropdownDataTwo.imageSrc}
                alt={dropdownDataTwo.altText}
                style={{ width: 30, borderRadius: "50px" }}
              />
              <Typography
                sx={{
                  display: "flex",
                  alignContent: "center",
                  alignItems: "center",
                  fontSize: 10,
                }}
              >
                {dropdownDataTwo.buttonText}
                <ArrowDropDown sx={{ width: 17 }} />
              </Typography>
            </MenuButton>

            <Menu sx={{ minWidth: 180, "--ListItemDecorator-size": "24px" }}>
              <MenuItem sx={{ pl: 2.5, py: 1.5 }}>
                <Image
                  src={dropdownDataTwo.imageSrc}
                  alt={dropdownDataTwo.altText}
                  style={{ width: 30, borderRadius: "50px" }}
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    sx={{
                      display: "flex",
                      alignContent: "center",
                      alignItems: "center",
                      fontSize: 14,
                      fontWeight: "light-bold",
                    }}
                  >
                    {dropdownDataTwo.buttonText}
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      alignContent: "center",
                      alignItems: "center",
                      fontSize: 10,
                    }}
                  >
                    {dropdownDataTwo.email}
                  </Typography>
                </Box>
              </MenuItem>

              <ListDivider />
              <ListItem nested>
                <List aria-label="Font sizes">
                  {dropdownDataTwo.menuItems.map((item, index) => (
                    <MenuItem key={index} role="menuitemradio" sx={{ pl: 2.5 }}>
                      {item}
                    </MenuItem>
                  ))}
                </List>
              </ListItem>
            </Menu>
          </Dropdown>
        </Box>
      </Sheet>
    </>
  );
}

export default page;
