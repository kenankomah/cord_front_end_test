import { useEffect, useState } from "react";

const useFetch = (url: string) => {
	const [data, setData] = useState<any>(null);
	const [error, setError] = useState<any>(null);
	const [unfilteredData, setUnfilteredData] = useState<any>(null);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(url);
				if (!response.ok) {
					throw Error("Could not fetch the data for that resource");
				}
				let apiData = await response.json();

				setError(new Error());
				setData(apiData);
				setUnfilteredData(apiData);
			} catch (err: any) {
				setError(err.message);
			}
		})();
	}, [url]);

	return { data, error, setData, unfilteredData };
};

export default useFetch;
