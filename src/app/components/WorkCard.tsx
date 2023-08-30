export const WorkCard = () => {
	return (
		<div
			className="w-full sm:w-1/2 md:w-1/2 
				lg:w-1/3 xl:w-1/3 my-2 p-4 rounded-lg
				bg-gray-100 mx-auto max-w-xs sm:max-w-sm
				md:max-w-md lg:max-w-lg xl:max-w-lg"
		>
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
