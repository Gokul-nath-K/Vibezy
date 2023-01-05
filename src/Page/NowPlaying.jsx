import { Button, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import AppTopBar from "../components/AppTopBar";
import SideBar from "../components/sideBar";
import MusicControlBar from "../components/MusicControlBar";
import MusicControlBar2 from "../components/MusicControl2";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: 200,
    width: 200,
    position: "absolute",
    left: "5%",
    top: "15%",
  },
  cover: {
    width: 200,
    height: 200,
  },
  songname: {
    position: "absolute",
    left: "22%",
    top: "27%",
    color: "white",
  },
  songdetails: {
    position: "absolute",
    left: "22%",
    top: "37%",
    color: "white",
  },
  button1: {
    position: "absolute",
    top: "58%",
    left: "2%",
    right: "70%",
    color: "white",
  },
  button2: {
    position: "absolute",
    top: "68%",
    left: "2%",
    right: "70%",
    color: "white",
  },
}));

export default function CurrentSongPage( ) {
  const classes = useStyles();

  return (
    <>
      
        <div className="inner-content">
          <Card className={classes.root} style={{ boxShadow: "none" }}>
            <CardMedia
              className={classes.cover}
              image={require("../Pictures/ranjithame.jpeg")}
            />
          </Card>
        </div>
        <div>
          <Typography variant="h4" className={classes.songname}>
            Ranjithame
          </Typography>
          <Typography variant="h5" className={classes.songdetails}>
            Song by M.M. Manasi and Thalapathy Vijay
            <br/>
          </Typography>
        </div>
        <div>
          <hr
            style={{
              width: "90%",
              top: "53%",
              position: "absolute",
              right: "5%",
              color: "white",
            }}
          />
          <Button className={classes.button1}>
          Ranjithame - From("Varisu")
          </Button>
          <hr
            style={{
              width: "90%",
              top: "78%",
              position: "absolute",
              right: "5%",
              color: "black",
            }}
          />
        </div>
      
    </>
  );
}
