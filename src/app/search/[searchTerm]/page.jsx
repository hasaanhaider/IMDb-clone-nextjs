import Results from "@/app/components/Results";
import { Result } from "postcss";

const page = async ({ params }) => {
  const searchTerm = params.searchTerm;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&exclude_adult=true&language=en-US`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const results = data.results;

  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}
      {results && results.length > 0 && <Results results={results} />}
    </div>
  );
};

export default page;
