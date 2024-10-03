import Image from "next/image";
import Link from "next/link";
import { FaRegThumbsUp } from "react-icons/fa";

const Card = ({ result }) => {
  return (
    <div className="group cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          alt={result.title}
          placeholder="blur"
          blurDataURL="/spinner2.svg"
          style={{ maxWidth: "100%", height: "auto" }}
        />

        <div className="p-2">
          <p className="line-clamp-2 max-w-md text-md">{result.overview}</p>
          <h2 className="mt-1 text-lg truncate font-bold">
            {result.title || result.original_name}
          </h2>
          <p className="truncate text-sm flex items-center">
            {result.media_type && `${result.media_type}`} •{" "}
            {result.release_date || result.first_air_date}{" "}
            <FaRegThumbsUp className="h-5 w-5 mr-1 ml-3" /> {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
