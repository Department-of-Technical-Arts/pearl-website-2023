/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/uS99KVr3aDl
 */
import Link from "next/link";
import { Input } from "@/app/ui/input";
import { Button } from "@/app/ui/button";
import { CardContent, Card } from "@/app/ui/card";
import Navbar from "../ui/navbar";
import Footer from "../ui/footer";
import { getData } from "@/firebase/config";
import updateEvents from "./updateEvents";

export const revalidate = 3600;

export default async function Events({
	searchParams,
}: {
	searchParams: {
		[key: string]: string;
	};
}) {
	let { Workshops, Competitions, Games, Talks } = await getData();
	Workshops = Object.values(Workshops);
	Competitions = Object.values(Competitions);
	Games = Object.values(Games);
	Talks = Object.values(Talks);
	console.log(Games);
	const filter = searchParams.filter?.split(",");
	let events = [];
	if (filter) {
		events = filter.reduce((acc: any[], curr) => {
			if (curr === "workshops") return [...acc, ...Workshops];
			if (curr === "competitions") return [...acc, ...Competitions];
			if (curr === "games") return [...acc, ...Games];
			if (curr === "talks") return [...acc, ...Talks];
			return acc;
		}, []);
	} else {
		events = [
			...Object.values(Games),
			...Object.values(Competitions),
			...Object.values(Workshops),
			...Object.values(Talks),
		];
	}
	// console.log(Workshops, Competitions, Games);
	const checkboxClass =
		"before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10";

	// const [filter, setFilter] = useState({
	// 	Workshops: true,
	// 	Competitions: true,
	// 	Games: true,
	// 	Talks: true,
	// 	search: "",
	// });

	// const events = useMemo(() => {
	// 	const allFields = [];
	// 	if (filter.Workshops && Workshops) allFields.push(...Workshops);
	// 	if (filter.Competitions && Competitions) allFields.push(...Competitions);
	// 	if (filter.Games && Games) allFields.push(...Games);
	// 	if (filter.Talks && Talks) allFields.push(...Talks);
	// 	return allFields;
	// }, [filter, Workshops, Competitions, Games, Talks]);

	return (
		<div className="flex flex-col min-h-[100dvh] ">
			<Navbar />
			<main className="flex-1">
				<section className="flex items-center justify-center w-full min-h-[60vh] py-6 md:py-12 lg:py-24 xl:py-32">
					<div className=" px-4 md:px-6 flex flex-col items-center justify-center space-y-2 text-center">
						<div className="space-y-2">
							<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
								Upcoming Events
							</h1>
							<p className="mx-auto max-w-[600px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
								Explore our exciting lineup of events happening this Pearl.
							</p>
						</div>
						<div className="mx-auto max-w-sm !mt-7">
							<Link
								className="px-4 py-2 bg-white rounded-md hover:bg-gray-100 "
								href={"#events"}
							>
								Purchase Tickets
							</Link>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32 ">
					<div className=" px-4 md:px-6 grid items-center gap-6 text-center lg:grid-cols-[1fr_600px] lg:gap-12">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
								Featured Events
							</h2>
							<p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
								Check out our highlighted events and mark your calendars.
							</p>
						</div>
						<div className="mx-auto w-full max-w-2xl space-y-4">
							<div className="grid gap-4">
								<Card>
									<CardContent className="flex items-center space-x-4">
										<img
											alt="Event"
											className="rounded-lg overflow-hidden aspect-square object-cover object-center"
											height="100"
											src="/placeholder.svg"
											width="100"
										/>
										<div className="space-y-1">
											<h3 className="text-xl font-bold">
												Summer Music Festival
											</h3>
											<p className="text-sm text-gray-500 ">
												August 20-22, 2023
											</p>
										</div>
									</CardContent>
								</Card>
							</div>
						</div>
					</div>
				</section>
				<section
					id="events"
					className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
				>
					<div className="px-4 md:px-6 flex flex-col items-center justify-center space-y-2 text-center">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
								All Events
							</h2>
							<p className="mx-auto max-w-[600px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
								Register for our upcoming events and get your tickets now.
							</p>
						</div>
						{/* event card grid section */}
						<div className="flex flex-col md:flex-row justify-between w-full">
							<div className="flex flex-col w-full md:w-1/4">
								{/* <Input placeholder="Search for events" /> */}
								<form
									className="flex flex-col space-y-2 items-center"
									action={updateEvents}
								>
									<label className="text-sm font-bold">
										Filter by Category
									</label>
									<div className="flex flex-col">
										<label className="flex items-center space-x-2">
											<CheckBox
												label="Workshops"
												name="filter[]"
												value="workshops"
											/>

											<span>Workshops</span>
										</label>
										<label className="flex items-center space-x-2">
											<CheckBox
												label="Competitions"
												name="filter[]"
												value="competitions"
											/>

											<span>Competitions</span>
										</label>
										<label className="flex items-center space-x-2">
											<CheckBox label="Games" name="filter[]" value="games" />

											<span>Games</span>
										</label>
										<label className="flex items-center space-x-2">
											<CheckBox label="Talks" name="filter[]" value="talks" />

											<span>Talks</span>
										</label>
									</div>
									<Button type="submit">Apply</Button>
								</form>
							</div>
							<div className="flex flex-col w-full md:w-3/4 space-y-4">
								{events.map((event: any, index) => (
									<Card key={index}>
										<CardContent className="p-0 flex items-center space-x-4 text-left">
											<img
												alt="Event"
												src={
													event.image_url +
													"-/preview/938x432/-/quality/smart/-/format/auto/"
												}
												className="rounded-lg overflow-hidden aspect-square object-cover object-center md:w-1/4 md:h-full"
												height="100"
												width="100"
											/>
											<div className="space-y-1 flex flex-col items-start md:w-3/4">
												<h3 className="text-xl font-bold ">{event.name}</h3>
												<p className="text-sm text-gray-500">{event.short}</p>
												<p className="text-sm text-gray-500 !mt-3">
													Registration Fee <b>{event.price}</b>
												</p>
											</div>
										</CardContent>
									</Card>
								))}
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}

const CheckBox = ({
	label,
	checked,
	onChange,
	name,
	value,
}: {
	label: string;
	checked?: boolean;
	name: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
	return (
		<label
			className="relative flex items-center p-3 rounded-full cursor-pointer"
			htmlFor="checkbox"
		>
			<input
				type="checkbox"
				className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
				id="checkbox"
				checked={checked}
				name={name}
				value={value}
			/>
			<span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-3.5 w-3.5"
					viewBox="0 0 20 20"
					fill="currentColor"
					stroke="currentColor"
					stroke-width="1"
				>
					<path
						fill-rule="evenodd"
						d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
						clip-rule="evenodd"
					></path>
				</svg>
			</span>
		</label>
	);
};
