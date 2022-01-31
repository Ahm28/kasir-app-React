import React from "react";
import { Col, Card, Button } from "react-bootstrap";

const Menus = ({ menu }) => {
  return (
    <Col md={4} xs={6} className="mb-4">
      <Card className="shadow">
        <Card.Img
          variant="top"
          src={
            "assets/images/" +
            menu.category.nama.toLowerCase() +
            "/" +
            menu.gambar
          }
        />
        <Card.Body>
          <Card.Title>{menu.nama}</Card.Title>
          <Card.Text>Rp. {menu.harga}</Card.Text>
          <Button variant="success">+ add to cart</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Menus;
