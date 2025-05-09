import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import { fakeSearchApi } from "../apis/fakeSearchApi";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const debouncedQuery = useDebounce(query, 1000);

  useEffect(() => {
    if (!debouncedQuery) {
      setResults([]);
      return;
    }

    const fetchData = async () => {
      const res = await fakeSearchApi(debouncedQuery);
      setResults(res);
    };

    fetchData();
  }, [debouncedQuery]);

  return (
    <div>
      <input
        type="text"
        placeholder="검색어 입력"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {results.map((r, idx) => (
          <li key={idx}>{r}</li>
        ))}
      </ul>
    </div>
  );
}
