import React, { useState } from "react";
import { Box, makeStyles, TextField } from "@material-ui/core";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import Records from "../Data/homePage_db.json";

const useStyles = makeStyles({
  h6: {
    color: "#ffffff",
    fontSize: "16px",
    textAlign: "center",
  },
  h5: {
    color: "white",
  },
  searchField: {
    padding: "1 %",
    borderRadius: 50,
    backgroundColor: "whitec",
    width: "600",
  },
  root: {
    display: 'flex',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 90,
  },
});

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");

  let handleChange = (e) => {
    e.preventDefault();
    let lowerCase = e.target.value.toLowerCase();
    setSearchInput(lowerCase);
  };

  const filteredData = Records.filter((el) => {
    if (searchInput === "") {
      return el;
    } else {
      return el.name.toLowerCase().includes(searchInput);
    }
  });

  const classes = useStyles();
  return (
    <>
      <TextField
        id="outlined-basic"
        onChange={handleChange}
        variant="filled"
        fullWidth
        placeholder="Search"
        className={classes.searchField}
      />
      <br />
      <br />
      <div className="row" id="row">
        {filteredData &&
          filteredData.map((record) => {
            return (
                <div
                  className="col-md-3"
                  key={record.id}
                  style={{ color: "white" }}
                >
                  <Card
                    className={classes.root}
                    sx={{
                      maxWidth: 250,
                      maxHeight: 90,
                      bgcolor: "#212121",
                    }}
                  >
                    <Box>
                      <CardMedia
                        className={classes.cover}
                        component="img"
                        height="90"
                        width="90"
                        image={require("../Pictures/" + record.imagePath)}
                        // sx={{ padding: "10px", paddingBottom: "0px" }}
                      />
                    </Box>
                    <Box>
                      <CardContent className={classes.content}>
                          <Typography variant="h6" classes={{ h6: classes.h6 }}>
                            {record.name}
                          </Typography>
                      </CardContent>
                    </Box>
                  </Card>
                  <br />
                  <br />
                </div>
            );
          })}
      </div>
    </>
  );
}

export default SearchBar;
