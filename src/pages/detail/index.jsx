import { useEffect ,useState} from "react";
import { useParams } from "react-router-dom";
import Api from "../../utis/api";
import Error from "../../components/error";
import Loader from "../../components/loader";
import Buttons from "./button";
import Banner from "./banner";
import Content from "./content";
import Actors from "./actors";
import Traillers from "./traillers";



const Detail = () => {
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState(null);
  const{id} = useParams();


  useEffect(() => {
    const params = {
      append_to_response: "credits,videos",
    };

    Api
      .get(`/movie/${id}`, { params })
      .then((res) => setMovie(res.data))
      .catch((err) => setError(err.message));
  }, []);



  
  if(error) return <Error info={error}/>;

  if(!movie) return <Loader/>;


  return (
    <div>

        <Buttons movie={movie} />

        <Banner movie={movie}/>

        <Content movie={movie} />

        <Actors cast={movie.credits.cast}/>

        <Traillers videos={movie.videos.results}/>


    </div>
  );
};

export default Detail;