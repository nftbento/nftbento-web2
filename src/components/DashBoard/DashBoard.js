import {
	// faRetweet,
	faSpinner
} from "@fortawesome/free-solid-svg-icons";
import {
	// Fragment,
	useEffect, useState
} from "react";
import {
	// toast,
	ToastContainer
} from "react-toastify";
// import { TwitterTweetEmbed } from "react-twitter-embed";
import styled, {
	// keyframes
} from "styled-components";

import {
	getData,
	// getTweetsByQuery
} from "../../Scripts/Axios/axiosRequests";
import { baseUrl } from "../../Scripts/Constants";
import { StyledIcon } from "../../StyledComponents";
import {
	// picksOnScreen,
	// screenSize,
	// sizeBreakpoints,
} from "../../StyledComponents/Constants";
import {
	// SocialPicks,
	TradingPicks
} from ".";

const StyledMain = styled.main`
	height: 100%;
	margin-top: 10px;
`;

// const StyleTweetWrapper = styled.div`
// 	overflow: auto;
// 	max-height: 270px;
// 	border-radius: 12px;
// `;

// const TweetsSection = styled.div`
// 	flex-direction: row;
// 	display: flex;
// 	justify-content: space-around;
// `;

// const ripple = keyframes`
// 	0% {
//     	background-color: #343a40;
//   	}

//   	50% {
//     	background-color: #0b090a;
//   	}

//   	100% {
//    		background-color: #343a40;
//   	}
// `;

// const TweetPlaceholder = styled.div`
// 	width: 250px;
// 	height: 270px;
// 	margin-top: 10px;
// 	margin-bottom: 10px;
// 	animation: 1.5s ease-in-out ${ripple} infinite;
// 	animation-delay: 0s;
// 	border-radius: 12px;
// `;

// const TitleWrapper = styled.div`
// 	display: flex;
// 	justify-content: space-between;
// 	padding-left: 40px;
// 	padding-right: 40px;
// `;
// const Title = styled.div`
// 	text-shadow: 0 0 5px #fff;
// 	color: #fff;
// 	font-size: 28px;
// 	align-self: center;
// 	@media (max-width: ${sizeBreakpoints.mobileL}) {
// 		font-size: 20px;
// 	}
// `;

export const DashBoard = () => {
	const saleCountCutoff = 1;
	const numberOfCollectionsToShow = 12;
	// mock using 10
	// const tweetsPerFetch = 24;
	// const tweetsWhitelistPerFetch = 96;
	// const whiteListMint = "whitelist mint";
	// const [data, setData] = useState({ data: [] });
	const [collections, setCollections] = useState([]);
	// const [tweetArrayIndex, setTweetArrayIndex] = useState(0);
	// const [tweetIndex, setTweetIndex] = useState(0);
	// const [exit, setExit] = useState(1);
	// const [currentPageForWhitelist, setCurrentPageForWhitelist] = useState(0);
	// const [currentAllTweetsWhitelist, setCurrentAllTweetsWhitelist] = useState(
	// 	[]
	// );
	// const [currentNextTokenWhitelist, setCurrentNextTokenWhitelist] =
	// 	useState("");
	// const [currentAllTweets, setCurrentAllTweets] = useState([]);
	// const [currentNextTokens, setCurrentNextTokens] = useState("");
	// const [picksCount, setPicksCount] = useState(null);

	useEffect(() => {
		// let counts;
		// const handleResize = () => {
		// 	const width = Number(window.innerWidth);
		// 	if (width >= screenSize.large) {
		// 		counts = picksOnScreen.large;
		// 	} else if (width < screenSize.large && width >= screenSize.medium) {
		// 		counts = picksOnScreen.medium;
		// 	} else if (width < screenSize.medium) {
		// 		counts = picksOnScreen.small;
		// 	}
		// 	setPicksCount(counts);
		// };

		async function fetchData() {
			// mock collection summary will be placed here
			const response = await getData(`${baseUrl}/v1/activity/summary`);
			const filteredCollections = response.collections
				.filter(
					(responseCollection) => responseCollection.count >= saleCountCutoff
				)
				.slice(0, numberOfCollectionsToShow);
			setCollections(filteredCollections);

			// const names = getCollectionNames(filteredCollections);
			// mock tweets will be placed here
			// await Promise.all(
			// 	names.map((name) => getTweetsByQuery(name, tweetsPerFetch))
			// )
			// 	.then((responses) => {
			// 		const data = responses.filter(
			// 			(response) => response?.data && Array.isArray(response?.data)
			// 		);

			// 		const tokens = responses.map((response, index) => {
			// 			return {
			// 				token: response.meta?.next_token,
			// 				name: filteredCollections[index].name,
			// 			};
			// 		});
			// 		setCurrentNextTokens([...tokens]);

			// 		const arraysOfTweetsArray = [...data.map((data) => data.data)];
			// 		setCurrentAllTweets(arraysOfTweetsArray);
			// 		const tweetsSet = removeTweetDuplicates(arraysOfTweetsArray, counts);
			// 		setData([...tweetsSet]);
			// 	})
			// 	.catch((error) => {
			// 		console.log(error);
			// 	});

			// const whitelistMintTweetsResponse = await getTweetsByQuery(
			// 	whiteListMint,
			// 	tweetsWhitelistPerFetch
			// );
			// setCurrentAllTweetsWhitelist([...whitelistMintTweetsResponse.data]);
			// setCurrentNextTokenWhitelist(
			// 	whitelistMintTweetsResponse.meta?.next_token
			// );
		}

		// handleResize();
		// window.addEventListener("resize", handleResize);

		fetchData();
		// return () => window.removeEventListener("resize", handleResize);
	}, []);

	// const getCollectionNames = (currentCollections) => {
	// 	return currentCollections
	// 		.slice(0, numberOfCollectionsToShow)
	// 		.map((collection) => collection.name);
	// };

	// const removeTweetDuplicates = (
	// 	data,
	// 	tweetCounts,
	// 	currentExit = exit,
	// 	currentTweetIndex = tweetIndex,
	// 	currentTweetArrayIndex = tweetArrayIndex
	// ) => {
	// 	let tweetsSet = new Set();
	// 	let localExit = currentExit;
	// 	const indexOfLongestArray = data.reduce((acc, arr, idx) => {
	// 		return arr.length > data[acc].length ? idx : acc;
	// 	}, 0);
	// 	const totalTweetsCount = data?.[indexOfLongestArray].length * data.length;

	// 	let localTweetIndex = currentTweetIndex;
	// 	let localTweetArrayIndex = currentTweetArrayIndex;
	// 	const arraysOfTweetArrayLength = data.length;
	// 	let tweetsLength = data?.[localTweetArrayIndex]?.length;
	// 	if (localTweetIndex >= tweetsLength) {
	// 		while (localTweetArrayIndex < arraysOfTweetArrayLength) {
	// 			localTweetArrayIndex =
	// 				(localTweetArrayIndex + 1) % arraysOfTweetArrayLength;
	// 			if (!!data?.[localTweetArrayIndex]?.[localTweetIndex]) {
	// 				tweetsLength = data?.[localTweetArrayIndex]?.length;
	// 				break;
	// 			}
	// 		}
	// 	}
	// 	while (tweetsSet.size < tweetCounts && localExit < totalTweetsCount) {
	// 		while (localTweetIndex < tweetsLength) {
	// 			for (
	// 				;
	// 				localTweetArrayIndex < arraysOfTweetArrayLength;
	// 				localTweetArrayIndex++
	// 			) {
	// 				if (!!data?.[localTweetArrayIndex]?.[localTweetIndex]) {
	// 					tweetsSet.add(data[localTweetArrayIndex][localTweetIndex]);
	// 					if (tweetsSet.size >= tweetCounts) {
	// 						setTweetIndex(
	// 							localTweetArrayIndex === arraysOfTweetArrayLength - 1
	// 								? localTweetIndex + 1
	// 								: localTweetIndex
	// 						);

	// 						setTweetArrayIndex(
	// 							(localTweetArrayIndex + 1) % arraysOfTweetArrayLength
	// 						);

	// 						setExit(localExit + 1);
	// 						break;
	// 					}
	// 				}

	// 				localExit++;
	// 			}
	// 			if (tweetsSet.size >= tweetCounts) {
	// 				break;
	// 			} else {
	// 				localTweetIndex++;
	// 				localTweetArrayIndex = 0;
	// 			}
	// 		}
	// 	}
	// 	if (tweetsSet.size < tweetCounts) {
	// 		setExit(localExit);
	// 	}
	// 	return tweetsSet;
	// };

	// const refreshWhitelistTweets = async (tweetCounts) => {
	// 	if (
	// 		(currentPageForWhitelist + 1) * tweetCounts >=
	// 		tweetsWhitelistPerFetch
	// 	) {
	// 		if (currentNextTokenWhitelist) {
	// 			const whitelistMintTweetsResponse = await getTweetsByQuery(
	// 				whiteListMint,
	// 				tweetsWhitelistPerFetch,
	// 				currentNextTokenWhitelist
	// 			);
	// 			setCurrentAllTweetsWhitelist([...whitelistMintTweetsResponse.data]);
	// 			setCurrentNextTokenWhitelist(
	// 				whitelistMintTweetsResponse.meta?.next_token
	// 			);
	// 			setCurrentPageForWhitelist(currentPageForWhitelist + 1);
	// 		} else {
	// 			notify("There is no more tweets about Whitelist Mint");
	// 		}
	// 	} else {
	// 		setCurrentPageForWhitelist(currentPageForWhitelist + 1);
	// 	}
	// };

	// const refreshTweets = async () => {
	// 	const indexOfLongestArray = currentAllTweets.reduce((acc, arr, idx) => {
	// 		return arr.length > currentAllTweets[acc].length ? idx : acc;
	// 	}, 0);
	// 	const totalTweetsCount =
	// 		currentAllTweets[indexOfLongestArray].length * currentAllTweets.length;
	// 	if (exit >= totalTweetsCount) {
	// 		if (currentNextTokens.some((token) => !!token)) {
	// 			const names = getCollectionNames(collections);
	// 			await Promise.all(
	// 				names.map(async (name) => {
	// 					const token = currentNextTokens.find(
	// 						(tokenObject) => tokenObject.name === name
	// 					);
	// 					if (token?.token) {
	// 						const response = await getTweetsByQuery(
	// 							name,
	// 							tweetsPerFetch,
	// 							token.token
	// 						);
	// 						return {
	// 							response,
	// 							name,
	// 						};
	// 					}
	// 					return {};
	// 				})
	// 			).then((responses) => {
	// 				const data = responses.filter(
	// 					(response) =>
	// 						response?.response?.data &&
	// 						Array.isArray(response?.response?.data)
	// 				);
	// 				if (data?.length) {
	// 					const tokens = responses.map((response) => {
	// 						return {
	// 							token: response?.response?.meta?.next_token,
	// 							name: response.name,
	// 						};
	// 					});

	// 					setCurrentNextTokens([tokens]);

	// 					const arraysOfTweetsArray = [
	// 						...data.map((data) => data.response.data),
	// 					];

	// 					setCurrentAllTweets(arraysOfTweetsArray);

	// 					const tweetsSet = removeTweetDuplicates(
	// 						arraysOfTweetsArray,
	// 						picksCount,
	// 						0,
	// 						0,
	// 						0
	// 					);
	// 					setData([...tweetsSet]);
	// 				} else {
	// 					notify("There is no more tweets about Top sales");
	// 				}
	// 			});
	// 		} else {
	// 		}
	// 	} else {
	// 		const tweetsSet = removeTweetDuplicates(currentAllTweets, picksCount);
	// 		setData([...tweetsSet]);
	// 	}
	// };

	// const notify = (toastString) => {
	// 	toast.info(toastString, {
	// 		position: "bottom-center",
	// 		autoClose: 5000,
	// 		hideProgressBar: false,
	// 		closeOnClick: true,
	// 		pauseOnHover: true,
	// 		draggable: true,
	// 		progress: undefined,
	// 	});
	// };

	return (
		<StyledMain>
			{collections.length ? (
				<TradingPicks collections={collections} />
			) : (
				<StyledIcon icon={faSpinner} pulse />
			)}
			{/* <SocialPicks marginTop="30px" paddingTop="10px">
				{data?.length ? (
					<Fragment>
						<TitleWrapper>
							<Title>Top sales</Title>
							<StyledIcon
								icon={faRetweet}
								alignself="flex-end"
								onClick={refreshTweets}
							/>
						</TitleWrapper>
						<TweetsSection>
							{data.map((tweet) => (
								<StyleTweetWrapper key={tweet.id}>
									<TwitterTweetEmbed
										tweetId={tweet.id}
										options={{
											conversation: "none",
											width: 250,
											cards: "hidden",
											theme: "dark",
											lang: "en",
										}}
										placeholder={<TweetPlaceholder />}
									/>
								</StyleTweetWrapper>
							))}
						</TweetsSection>
					</Fragment>
				) : (
					<StyledIcon icon={faSpinner} pulse />
				)}
			</SocialPicks>{" "}
			<SocialPicks paddingBottom="30px" marginTop="0" paddingTop="10px">
				{currentAllTweetsWhitelist?.length && picksCount ? (
					<Fragment>
						<TitleWrapper>
							<Title>Whitelist Mint</Title>
							<StyledIcon
								icon={faRetweet}
								alignself="flex-end"
								onClick={() => refreshWhitelistTweets(picksCount)}
							/>
						</TitleWrapper>
						<TweetsSection>
							{currentAllTweetsWhitelist
								.slice(
									currentPageForWhitelist * picksCount,
									(currentPageForWhitelist + 1) * picksCount
								)
								.map((tweet) => (
									<StyleTweetWrapper key={tweet.id}>
										<TwitterTweetEmbed
											tweetId={tweet.id}
											options={{
												conversation: "none",
												width: 250,
												cards: "hidden",
												theme: "dark",
											}}
											placeholder={<TweetPlaceholder />}
										/>
									</StyleTweetWrapper>
								))}
						</TweetsSection>
					</Fragment>
				) : (
					<StyledIcon icon={faSpinner} pulse />
				)}
			</SocialPicks> */}
			<ToastContainer
				position="bottom-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</StyledMain>
	);
};
