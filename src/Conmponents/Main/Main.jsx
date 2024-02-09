import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import background from "../assets/background.jpg";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

export default function Main() {
  const [place, setplace] = useState("egypt");
  const [data, setData] = useState("");
  console.log(data);
  const search = () => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=6ff6ddbc27cd4cc5bf2235430240702&q=${place}&aqi=no`
      )
      .then((response) => {
        let data = response.data;
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=6ff6ddbc27cd4cc5bf2235430240702&q=${place}&aqi=no`
      )
      .then((response) => {
        let data = response.data;
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {data ? (
        <Stack sx={{ backgroundImage: `url(${background})`, height: "100vh" }}>
          <Container>
            <Box
              sx={{
                ml: "300px",
                mt: "40px",
                backgroundColor: "rgba(0,0,0,.7)",
                width: "40%",
                borderRadius: "20px",
              }}
            >
              <input
                style={{
                  width: "80%",
                  height: "55px",
                  fontSize: "25px",
                  backgroundColor: "transparent",
                  padding: "0 20px 0 20px",
                  borderRadius: "20px",
                  color: "white",
                }}
                placeholder="Enter Your Location"
                onChange={(e) => {
                  setplace(e.target.value);
                }}
              />
              <IconButton
                sx={{ width: "40px" }}
                onClick={() => {
                  search();
                }}
              >
                <SearchIcon sx={{ color: "white", fontSize: "40px" }} />
              </IconButton>
            </Box>
          </Container>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Box
              sx={{
                width: "30%",
                mt: "60px",
                backgroundColor: "rgba(0,0,0,.5)",
                ml: "20px",
                display: "flex",
                padding: "30px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "90px",
                  color: "white",
                  ml: "100px",
                  mr: "20px",
                }}
              >
                {data.current.temp_c}
              </Typography>
              <Typography sx={{ fontSize: "80px", color: "white" }}>
                °C
              </Typography>
            </Box>
            <Box
              sx={{
                width: "30%",
                mt: "60px",
                backgroundColor: "rgba(0,0,0,.5)",
                mr: "40px",

                padding: "30px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "50px",
                  color: "white",
                  ml: "100px",
                  mr: "20px",
                }}
              >
                {data.current.last_updated}
              </Typography>
            </Box>
          </Stack>

          <Container
            sx={{
              width: "95%",
              backgroundColor: "rgba(0,0,0,.7)",
              display: "flex",
              padding: "30px",
              flexDirection: "row",
              mt: "9%",
            }}
          >
            <Box>
              <Typography sx={{ color: "white", fontSize: "30px" }}>
                Country : {data.location.country}
              </Typography>
              <Typography sx={{ color: "white", fontSize: "30px" }}>
                region : {data.location.region}
              </Typography>
              <Typography sx={{ color: "white", fontSize: "30px" }}>
                last_updated : {data.location.localtime}
              </Typography>
              <Typography sx={{ color: "white", fontSize: "30px" }}>
                temp_c : {data.current.temp_c}
              </Typography>
              <Typography sx={{ color: "white", fontSize: "30px" }}>
                temp_F : {data.current.temp_f}
              </Typography>
            </Box>
            <Box flexGrow={1} />

            <Box>
              <Typography sx={{ color: "white", fontSize: "30px" }}>
                State : {data.current.condition.text}
              </Typography>
              <Typography sx={{ color: "white", fontSize: "30px" }}>
                wind_kph : {data.current.wind_kph}
              </Typography>
              <Typography sx={{ color: "white", fontSize: "30px" }}>
                wind_dir: {data.current.wind_dir}
              </Typography>
              <Typography sx={{ color: "white", fontSize: "30px" }}>
                cloud: {data.current.cloud}
              </Typography>
              <Typography sx={{ color: "white", fontSize: "30px" }}>
                gust_kph : {data.current.gust_kph}
              </Typography>
            </Box>
          </Container>
        </Stack>
      ) : (
        <img src="../assets/404.png" />
      )}
    </>
  );
}
