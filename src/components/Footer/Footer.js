import React from "react";
import { Card, CardContent, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import "./style.css";

export default function Footer() {
  return (
    <>
      <div className="containerDiv">
        <div className="carddiv">
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                color="secondary"
                style={{
                  backgroundColor: "#FFA800",
                  height: "60px",
                  width: "200px",
                  borderRadius: "20px",
                }}
                sx={{ height: "60px", width: "200px" }}
              >
                Email Us!
              </Button>
            </div>
            <h4 className="text">
              Want to learn more about Route Zero and find out if we’re <br />{" "}
              going to be cruising through a city near you?
            </h4>
          </div>
        </div>
        <footer className="footer">
          Route Zero Relay © 2023 . All rights reserved
        </footer>
      </div>
    </>
  );
}