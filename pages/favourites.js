import useSWR from "swr";
import { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { favouritesAtom } from "../store";
import { Row, Col } from "react-bootstrap";
import ArtworkCard from "../components/ArtworkCard";
import Card from "react-bootstrap/Card";
import Error from "next/error";

export default function Favourites(props) {
  const [artworkList, setArtworkList] = useAtom(favouritesAtom);
  if (!favouritesList) return null;
  console.log(artworkList);
  return (
    <>
      <Row className='gy-4'>
        {artworkList.length > 0 ? (
          artworkList[page - 1].map((currentObj) => {
            return (
              <Col lg={3} key={currentObj}>
                <ArtworkCard objectID={currentObj} />
              </Col>
            );
          })
        ) : (
          <Card>
            <Card.Body>
              <Card.Text>
                Nothing Here
                <br />
                Try searching for something else.
                <br />
              </Card.Text>
            </Card.Body>
          </Card>
        )}
      </Row>
    </>
  );
}
