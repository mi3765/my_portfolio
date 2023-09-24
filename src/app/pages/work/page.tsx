"use client";
import { WorkCard } from "../../components/WorkCard";
import { Header } from "@/app/components/Header";
import { useEffect, useState } from "react";
import axios from "axios";

const Work = () => {
	const [workData, setWorkData] = useState([]);
	useEffect(() => {
		axios
			.get("/api/work")
			.then((response) => {
				setWorkData(response.data);
			})
			.catch((error) => {
				console.log("受信に失敗しました", error);
			});
	}, []);

	const containerItem = {
		width: "calc(33.33% - 40px)",
	};

	return (
		<div className="text-center">
			<Header />
			<h1 className="text-4xl font-bold mb-4">Work</h1>
			<div className="flex flex-wrap">
				<WorkCard style={containerItem} />
				<WorkCard style={containerItem} />
				<WorkCard style={containerItem} />
				<WorkCard style={containerItem} />
				<WorkCard style={containerItem} />
				<WorkCard style={containerItem} />
				<WorkCard style={containerItem} />
				<WorkCard style={containerItem} />
			</div>
		</div>
	);
};

export default Work;
