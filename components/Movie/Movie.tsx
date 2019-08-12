import * as React from "react";

import { MovieProps, MovieState } from "./Movie.type";
import movieApi from "utils/movieApi";

class Movie extends React.Component<MovieProps, MovieState> {
  state: MovieState = {};

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie = async () => {
    const { id } = this.props;
    const response = await movieApi.get(
      `/movie/${id}?api_key=${process.env.TMDB_MOVIE_KEY}&language=en-US`
    );
    const movie = response.data;

    this.setState({ ...movie });
  };

  render() {
    const {
      poster_path,
      title,
      vote_average,
      budget,
      runtime,
      overview
    } = this.state;

    if (title) {
      return (
        <div>
          <img
            src={poster_path && process.env.TMDB_IMAGE_URL + poster_path}
            alt="poster"
          />
          <h3>{title}</h3>
          <p>Rating: {vote_average}</p>
          <p>Budget: {budget}</p>
          <p>Runtime: {runtime}</p>
          <p>Overview: {overview}</p>
          <style jsx>{`
            div {
              background-color: lemonchiffon;
            }
            img {
              width: 400px;
              border: 3px solid purple;
            }
            h3 {
              font-size: 24px;
              color: lightseagreen;
            }
            p {
              font-size: 18px;
              color: saddlebrown;
            }
          `}</style>
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}

export default Movie;
