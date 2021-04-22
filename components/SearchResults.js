import PaginationButtons from "./PaginationButtons";

function SearchResults({ results }) {
    return (
        <div className="md:pl-40 pt-4 pb-14">
            <div className="md:max-w-2xl px-4">
                <p className="text-gray-600 text-sm">
                    About {results.searchInformation?.formattedTotalResults} results (
                    {results.searchInformation?.formattedSearchTime} seconds)
                </p>
                <div className="mt-4">
                    {results.items?.map((result) => (
                        <div key={result.link} className="mb-8">
                            <a className="group mb-1" href={result.link}>
                                <span className="inline-block font-medium">
                                    {result.formattedUrl}
                                </span>
                                <h2 className="text-blue-800 font-medium text-xl group-hover:underline truncate">
                                    {result.title}
                                </h2>
                            </a>
                            <p className="line-clamp-2">{result.snippet}</p>
                        </div>
                    ))}
                </div>
                <PaginationButtons />
            </div>
        </div>
    );
}

export default SearchResults;
