import './listaNoticias.css'; 
import{Row , Col} from 'react-bootstrap'; 
import Noticia from '../Noticia/Noticia';
function ListaNoticias({arrayNoticias}){
    return(
        <Row className='contendor-card'>
        {
          arrayNoticias.map((newNoticia, index)=> {
            return(
              <Col key={index}>
                <Noticia titulo={newNoticia.title} 
                urlImg={newNoticia.image_url == null ? '/src/assets/descarga.jpg' : newNoticia.image_url}
                 linkNoticia={newNoticia.link} 
                 descripcion={newNoticia.description == null ? 'No se encontro una descripción' : newNoticia.description } />
              </Col>
            )
          })
        }
      </Row>
    ); 
}
export default ListaNoticias; 
