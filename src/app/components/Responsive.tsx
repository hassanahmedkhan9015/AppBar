"use client";
import React from "react";
import "../globals.css"
import {
  Box,
  Dropdown,
  Input,
  MenuButton,
  MenuItem,
  Typography,
} from "@mui/joy";
import Menu from "@mui/joy/Menu";
import Image from "next/image";
import { useTheme } from "@mui/joy";
import Logo from "../assets/finyou.svg";
import { KeyboardArrowDown } from "@mui/icons-material";

import { items } from "./Items";
import { dropdownData } from "./Items";

function Responsive() {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", m: "auto" }}>
        {/* LOGO-Here  */}
        <Box
          sx={{
            pl: 0.5,
            mr: 10,
          }}
        >
          <Image
            src={Logo}
            alt="logo"
            style={{ width: "139px", height: "34px" }}
          />
        </Box>

        {/* DropDowns, Links,& Items  */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            m: "auto",
            alignContent: "center",

            // [theme.breakpoints.down("md")]: {
            //   display: "none",
            // },
          }}
        >
          {/* <Box > */}
          {items.map((item, index) => (
            <Typography
              key={index}
              sx={{
                my: 2,
                alignContent: "center",

                fontSize: 11,
                display: "flex",
                alignItems: "center",
                gap: 0.5,
              }}
            >
              <Image alt={`Item ${index}`} src={item.image} />
              {item.label}
            </Typography>
          ))}
          {/* </Box> */}

          {/* Items & Dropdowns */}
          <Box>
            {dropdownData.map((data, index) => (
              <Dropdown key={index}>
                <MenuButton
                  variant="plain"
                  size="sm"
                  sx={{ display: "block", my:4 }}
                >
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
                    <KeyboardArrowDown sx={{ width: 13 }} />
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
        </Box>

        {/* <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2.5,
            m: "auto",
            
          }}
        >
          <Input
            disabled={false}
            placeholder="    Ask Fin for"
            
            sx={{
              p: 1,
              width: "239.028px",
              height: " 37.312px",
              flexShrink: 0,
            }}
          />
        </Box> */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2.5,
            m: "auto",
           
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
      </Box>
    </>
  );
}

export default Responsive;
