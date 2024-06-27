import React from "react";
import styled from "styled-components";
import useFetch from "../../pages/discover/useFetch";

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
		// The MovieItemWrapper must be linked to the movie details popup
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

const ReleaseDate = styled.div`
	margin-top: 20px;
`;

const Genre = styled.h3`
	color: #000;
	font-size: 12px;
	font-weight: bold;
`;

const MovieItemWrapper = styled.div`
	display: grid;
	grid-template-columns: 190px 2fr;
	gap: 20px;
	position: relative;
	background-color: white;
	border-radius: 3px;
	margin-bottom: 15px;
	padding: 20px;

	@media (max-width: 768px) {
		grid-template-columns: 100px 2fr;
	}
`;

const Ratings = styled.div`
	display: inline-block;
	margin-right: 10px;
`;

const Title = styled.h2`
	color: #000;
	font-size: 20px;
	font-weight: bold;
	margin: 0;
`;

const TitleDiv = styled.div`
	display: flex;
	justify-content: space-between;
	height: fit-content;

	align-items: center;
	color: #000;
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 10px;
`;

const LeftCont = styled.div`
	display: inline-block;
`;

const RightCont = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const Overview = styled.div`
	position: relative;
	overflow: hidden;

	@media (max-width: 768px) {
		height: 80px;
		&::before {
			content: "";
			width: 100%;
			height: 100%;
			position: absolute;
			left: 0;
			top: 0;
			background: linear-gradient(transparent 40px, white);
		}
	}
`;
