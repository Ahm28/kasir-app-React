import React, { Component } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { NavbarComponents, Hasil, ListCategories, Menus } from "./components";
import { API_URL } from "./utils/constants";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "products")
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { menus } = this.state;
    return (
      <div className="App">
        <NavbarComponents />
        <div className="mt-3">
          <Container fluid>
            <Row>
              <ListCategories />
              <Col>
                <h4>
                  <strong>List Product</strong>
                </h4>
                <hr />
                <Row>
                  {menus &&
                    menus.map((menu) => <Menus key={menu.id} menu={menu} />)}
                </Row>
              </Col>
              <Hasil />
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
