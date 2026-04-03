import React, { useState, useEffect, useMemo } from 'react';
import { Search as SearchIcon, XCircle } from 'lucide-react';
import { useUser } from '../hooks/useUser';
import debounce from 'lodash.debounce';
import SearchUserTile from '../components/SearchUserTile';

const Search = () => {
    const [ query, setQuery ] = useState('');
    const [ results, setResults ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    const { handleSearchUser } = useUser()

async function fetchSearchUserData(query) {
    try {
        setLoading(true)

        const data = await handleSearchUser({ query })

        // 👇 adjust based on your API
        setResults(data?.users || data || [])

    } catch (err) {
        console.log(err)
    } finally {
        setLoading(false)
    }
}

const debouncedSearch = useMemo(
    () => debounce((query) => {
        fetchSearchUserData(query)
    }, 500),
    []
);

   useEffect(() => {
    if (!query) {
        setResults([])   // clear results when empty
        return;
    }
        debouncedSearch(query);

    return () => {
        debouncedSearch.cancel(); // ✅ important cleanup
    };

}, [query]);

    return (
        <div className="min-h-dvh bg-[#05050A] text-white w-full" style={{ fontFamily: 'Inter, sans-serif' }}>
            <div className="max-w-2xl mx-auto pt-8 px-4 md:px-6 lg:px-8 pb-20">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-3xl font-semibold tracking-tight text-white mb-6">Search</h1>

                    {/* Search Bar */}
                    <div className="relative flex items-center w-full h-14 rounded-[1.25rem] bg-[#0B0B14] px-4 transition-all focus-within:bg-[#1A1A28] focus-within:ring-1 focus-within:ring-[#9333EA] border border-white/5 hover:border-white/10 shadow-xl">
                        <SearchIcon size={20} className="text-gray-400" />
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search users..."
                            className="bg-transparent border-none outline-none w-full ml-3 text-white placeholder-gray-500 text-[15px]"
                        />
                        {query && (
                            <button onClick={() => setQuery('')} className="ml-2 text-gray-500 hover:text-gray-300 transition-colors">
                                <XCircle size={18} />
                            </button>
                        )}
                    </div>
                </div>

                {/* Results List */}
                <div className="flex flex-col gap-2 mt-6">
                    {loading && (
                        <div className="flex justify-center items-center py-10">
                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                        </div>
                    )}

                    {!loading && query && results.length === 0 && (
                        <div className="text-center py-10 text-gray-500">
                            No results found for "{query}"
                        </div>
                    )}

                    {!loading && results.map((user) => <SearchUserTile key={user._id} user={user} />)}

                    {!query && !loading && (
                        <div className="text-center py-12 flex flex-col items-center justify-center opacity-70 border-t border-white/5 mt-8">
                            <SearchIcon size={48} className="text-gray-600 mb-4 stroke-1" />
                            <p className="text-gray-400 text-[15px]">Search for creators, artists, and friends</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Search;
