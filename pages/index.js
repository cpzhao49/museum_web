/*********************************************************************************
 *  WEB422 – Assignment 4
 *  I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 *  No part of this assignment has been copied manually or electronically from any other source
 *  (including web sites) or distributed to other students.
 *
 *   Name: Chongpu Zhao Student ID: 105054217 Date: 11/4/2022
 *
 ********************************************************************************/
import { favouritesAtom } from "../store";
import { useAtom } from "jotai";
import { Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

export default function Home() {
  const [cartList, setCartList] = useAtom(favouritesAtom);
  return (
    <>
      <Image src='https://upload.wikimedia.org/wikipedia/commons/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg' fluid rounded />
      <br />
      <br />
      <Row>
        <Col>
          The Metropolitan Museum of Art of New York City, colloquially `&quot;`the Met`&quot;`,[a] is the largest art museum in the Americas. Its permanent collection contains over two million
          works,[1] divided among 17 curatorial departments. The main building at 1000 Fifth Avenue, along the Museum Mile on the eastern edge of Central Park on Manhattan`&quot;`s Upper East Side, is
          by area one of the world`&quot;`s largest art museums. A much smaller second location, The Cloisters at Fort Tryon Park in Upper Manhattan, contains an extensive collection of art,
          architecture, and artifacts from medieval Europe.
        </Col>
        <Col>
          <a href='https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art' target='_blank' rel='noreferrer'>
            https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art
          </a>
        </Col>
      </Row>
    </>
  );
}
