import Card from "react-bootstrap/Card";
import "./noticias.css";
import { useState } from "react";
function Noticia(props) {
  const [seeMore, setSeeMore] = useState(false);
  const seeMoreChange = () => {
    setSeeMore(!seeMore);
  };
  return (
    <Card>
      <Card.Img variant="top" src={props.urlImg} />
      <Card.Body>
        <Card.Title>{props.titulo}</Card.Title>
        <Card.Text>
          {seeMore ? props.descripcion : props.descripcion.slice(0, 100)}
          {props.descripcion.length <= 30 ? (
            ""
          ) : (
            <a className="item-leer" onClick={seeMoreChange}>
              {" "}
              {seeMore ? "Leer Menos" : "Leer Más"}
            </a>
          )}
        </Card.Text>
        <a type="button" className="btn btn-primary" href={props.linkNoticia}>
          {" "}
          Leer Noticia Completa
        </a>
      </Card.Body>
    </Card>
  );
}

export default Noticia;
