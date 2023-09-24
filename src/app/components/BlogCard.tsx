interface BlogCardProps {
	style: React.CSSProperties;
}

export const BlogCard: React.FC<BlogCardProps> = ({ style }) => {
	return (
		<div className="rounded-lg bg-gray-100 p-5 m-5" style={style}>
			<ul>
				<li>
					<h2 className="text-lg font-semibold mb-2">記事名</h2>
					<img
						src="/wave-photo.avif"
						alt="wave-photo"
						className="w-full h-auto rounded-lg mb-2"
					/>
					<p className="text-sm text-gray-500">作成日時</p>
					<p className="text-sm">概要</p>
				</li>
			</ul>
		</div>
	);
};
