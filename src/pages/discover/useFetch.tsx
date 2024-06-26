import { useEffect, useState } from "react";

const useFetch = (url: string) => {
	const [data, setData] = useState<any>(null);
	const [error, setError] = useState<any>(null);

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
			} catch (err: any) {
				setError(err.message);
			}
		})();
	}, []);

	return { data, error, setData };
};

export default useFetch;
