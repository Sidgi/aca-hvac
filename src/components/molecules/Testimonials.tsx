import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import React from "react";
import { Container, Grid } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const Testimonials = ({testimonialObjectList = []}) => {
  return (
    <>
      <div>
        <Typography textAlign={"center"} variant="h3">
          Customers Love ACA HCAC ❤️
        </Typography>
        <Container>
          <Grid container sx={{ flexGrow: 1 }}>
            {testimonialObjectList?.map(({ imageUrl, name, description }) => {
              return (
                <Grid item xs={12} md={4}>
                  <Card sx={{ maxWidth: 345, borderRadius: 8 }}>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="140"
                      image={imageUrl}
                    />
                    <CardContent>
                      <FormatQuoteIcon fontSize="large" />
                      <Typography gutterBottom variant="h5" component="div">
                        {name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button variant="contained" size="small">
                        Share
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Testimonials;
