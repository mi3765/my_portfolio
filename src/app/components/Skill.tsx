import React from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

const data = [
	{
		name: "HTML",
		value: 5,
	},
	{
		name: "CSS",
		value: 4,
	},

	{
		name: "JavaScript",
		value: 4,
	},
	{
		name: "TypeScript",
		value: 3,
	},
	{
		name: "React",
		value: 3,
	},
	{
		name: "Next.js",
		value: 3,
	},
	{
		name: "Firebase",
		value: 3,
	},
	{
		name: "Golang",
		value: 1,
	},
	{
		name: "MySQL",
		value: 1,
	},
	{
		name: "AWS",
		value: 1,
	},
];

export const Skill = () => {
	return (
		<ResponsiveContainer width="100%" height={500} className="">
			<BarChart data={data} layout="vertical">
				<XAxis type="number" domain={[0, 5]} tickCount={6} />
				<YAxis dataKey="name" type="category" width={100} />
				<Tooltip />
				<Bar dataKey="value" fill="#8884d8" />
			</BarChart>
		</ResponsiveContainer>
	);
};
