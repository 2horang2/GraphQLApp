import { gql, useQuery } from "@apollo/client"

const ALL_MOVIES = gql`
query getMovies {
  allMovies {
    title
    id
  }
}`;

export default function Movies() {
  
    //const result = useQuery(ALL_MOVIES);
    const {data , loading, error } = useQuery(ALL_MOVIES); //선언형
    if(loading){
      return <h1>Loading ... </h1>
    } 
    if(error){
      return <h1> Could not fetch </h1>
    }
    return (
      <ul>
          {data.allMovies.map(movie=><li key={movie.id}>{movie.title}</li>)}
      </ul>
    );
  }