import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";

function PaginationButtons() {
    const router = useRouter();

    const startIndex = Number(router.query.start) || 0;

    return (
        <div className="flex items-center justify-between">
            {startIndex >= 10 && (
                <Link href={`/search?term=${router.query.term}&start=${startIndex - 10}`}>
                    <div className="flex items-center space-x-1 basic-link mr-5">
                        <ChevronLeftIcon className="h-5" />
                        <p>Previous</p>
                    </div>
                </Link>
            )}

            <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
                <div className="flex items-center space-x-1 basic-link ml-auto">
                    <p>Next</p>
                    <ChevronRightIcon className="h-5" />
                </div>
            </Link>
        </div>
    );
}

export default PaginationButtons;
