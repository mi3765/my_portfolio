import Link from "next/link";

export const Header = () => {
	return (
		<div className="flex justify-between mx-20 my-10">
			<h1>My Portfolio</h1>
			<ul className="flex gap-10">
				<li className="">
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="app/About">About</Link>
				</li>
				<li>
					<Link href="app/Work">Work</Link>
				</li>
				<li>
					<Link href="app/Blog">Blog</Link>
				</li>
			</ul>
		</div>
	);
};
