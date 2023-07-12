import React from "react";
import logo from "./logo.svg";
import "./App.css";
import image from "./mk11.png";
import {
  Button,
  AppBar,
  Page,
  Spacer,
  Main,
  Card,
  Container,
  Theme,
  GridItem,
  GridContainer,
} from "@yakad/ui";

function Header() {
  return (
    <AppBar>
      <h1>React </h1>
      <Spacer />
      <Button size="small" variant="filled">
        send
      </Button>
    </AppBar>
  );
}

function Product() {
  return (
    <Card>
      <img src={image} style={{ width: "100%", borderRadius: "1.0rem" }} />
      <h3>Moratl Kombat</h3>
      <span>1000 $</span>
      <Button size="small" variant="filled" style={{ margin: "10px" }}>
        Buy
      </Button>
    </Card>
  );
}

function App() {
  return (
    <Theme color="pink" mode="dark">
      <Page>
        <Header />
        <Main>
          <Container maxWidth="md">
            <GridContainer>
              <GridItem xl={3} md={6} sm={12}>
                <Product />
              </GridItem>
              <GridItem xl={3} md={6} sm={12}>
                <Product />
              </GridItem>
              <GridItem xl={3} md={6} sm={12}>
                <Product />
              </GridItem>
              <GridItem xl={3} md={6} sm={12}>
                <Product />
              </GridItem>
              <GridItem xl={6} md={6} sm={12}>
                <Product />
              </GridItem>
              <GridItem xl={6} md={6} sm={12}>
                <Product />
              </GridItem>
              <GridItem xl={3} md={6} sm={12}>
                <Product />
              </GridItem>
              <GridItem xl={3} md={6} sm={12}>
                <Product />
              </GridItem>
            </GridContainer>
          </Container>
        </Main>
      </Page>
    </Theme>
  );
}

export default App;
