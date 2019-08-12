import Link from "next/link";
import * as React from "react";
import { useRouter } from "next/router";

import Movie from "../../components/Movie";

const MoviePage = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <div>
      <Movie id={+pid} />
      <Link href="/now-playing">
        <a>Go back to now playing</a>
      </Link>
    </div>
  );
};

export default MoviePage;
