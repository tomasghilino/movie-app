// should be dynamic by img id
import { useRouter } from 'next/router';

const MovieData = () => {

  //routing para obtener el id actual
  const router = useRouter();
  const { query: { id } } = router;

  return (
    <div>
      <h1>Movie Info</h1>
      <p>{id}</p>
    </div>
  );
};

export default MovieData;
