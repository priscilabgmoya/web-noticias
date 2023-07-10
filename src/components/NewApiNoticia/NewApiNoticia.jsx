import { useState , useEffect} from "react";
import ListaNoticias from "../Lista-Noticias/ListaNoticias";

function NewApiNoticia ({urlApi}){
    const [noticias, setNoticias] = useState([]); 

    useEffect(()=> {
    obtenerDatos(); 
    }, [noticias])
    
    const obtenerDatos = async () => {
      const res = await fetch(`${urlApi}`); 
      const response = await res.json(); 
      setNoticias(response.results); 
    }
    
    return(
        <ListaNoticias arrayNoticias={noticias} />
    ); 
}
export  default NewApiNoticia; 