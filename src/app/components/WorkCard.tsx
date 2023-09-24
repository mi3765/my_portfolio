import React from "react";

interface WorkCardProps {
	style: React.CSSProperties;
}

export const WorkCard: React.FC<WorkCardProps> = ({ style }) => {
	return (
		<div className="rounded-lg bg-gray-100 p-5 m-5" style={style}>
			<ul>
				<li>
					<h2 className="text-lg font-semibold mb-2">作品名1</h2>
					<img
						src="/wave-photo.avif"
						alt="wave-photo"
						className="w-full h-auto rounded-lg mb-2"
					/>
					<p className="text-sm text-gray-500">作成期間</p>
					<a href="#" className="text-sm text-gray-500">
						URL
					</a>
					<p className="text-sm">概要</p>
				</li>
			</ul>
		</div>
	);
};
