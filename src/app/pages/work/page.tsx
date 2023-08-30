import { WorkCard } from "../../components/WorkCard";
import { Header } from "@/app/components/Header";

const Work = () => {
	return (
		<div className="text-center">
			<Header />
			<h1 className="text-4xl font-bold mb-4">Work</h1>
			<div className="flex flex-wrap justify-around">
				<WorkCard />
				<WorkCard />
				<WorkCard />
				<WorkCard />
				<WorkCard />
				<WorkCard />
				<WorkCard />
				<WorkCard />
			</div>
		</div>
	);
};

export default Work;
