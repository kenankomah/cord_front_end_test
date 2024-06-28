import useFetch from "../../pages/discover/useFetch";
import {
	Genre,
	LeftCont,
	MovieItemWrapper,
	Overview,
	Ratings,
	ReleaseDate,
	RightCont,
	Title,
	TitleDiv,
} from "./styles";

export default function MovieItem({ movie }: any) {
	const {
		title,
		poster_path,
		overview,
		release_date,
		vote_average,
		genre_ids,
	} = movie;

	const MOVIE_DATA_API_KEY = process.env.REACT_APP_MOVIE_DATA_API_KEY;
	const genreListUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${MOVIE_DATA_API_KEY}`;
	const { data: genreOptions } = useFetch(genreListUrl);

	const findGenre = (genreIds: number[]) => {
		const lastId = genreIds.length - 1;
		const pipeSymbol = (index: number) => (index === lastId ? "" : " | ");

		let genreNames = "";
		genreIds.forEach((genreId, i) => {
			genreOptions?.genres.forEach(
				(genre: { id: number; name: string }) => {
					if (genreId === genre.id) {
						genreNames += genre.name + pipeSymbol(i);
					}
				}
			);
		});

		return genreNames;
	};

	const genreNames = findGenre(genre_ids);

	return (
		<MovieItemWrapper>
			<LeftCont>
				<img
					src={`https://image.tmdb.org/t/p/w185/${poster_path}`}
					alt="poster"
					className="poster"
					style={{
						height: "100%",
						width: "100%",
						objectFit: "cover",
					}}
				/>
			</LeftCont>
			<RightCont>
				<div>
					<TitleDiv>
						<div>
							<Title>{title}</Title>
							<Genre>{genreNames}</Genre>
						</div>

						<Ratings>{vote_average.toFixed(1)}</Ratings>
					</TitleDiv>
					<Overview>{overview}</Overview>
				</div>
				<ReleaseDate>{release_date} </ReleaseDate>
			</RightCont>
		</MovieItemWrapper>
	);
}
