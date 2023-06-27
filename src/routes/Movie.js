import { useParams } from "react-router-dom"
import { gql, useQuery } from "@apollo/client"

const GET_MOVIE = gql`
query getMovie($movieId:String!) {
  movie(id:$movieId) {
    title
    id
  }
}`;


export default function Moive() {
    const params = useParams();

    const {data, loading, error} = useQuery(GET_MOVIE,{
        variables: {
            movieId:params.id
        }
    });

    if(loading){
        return <h1>Loading ... </h1>
      } 
      if(error){
        return <h1> Could not fetch </h1>
      }
      return (
        <ul>
            {data.movie.title}
        </ul>
      );
}