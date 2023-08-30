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
					<Link href="/About">About</Link>
				</li>
				<li>
					<Link href="/Work">Work</Link>
				</li>
				<li>
					<Link href="/Blog">Blog</Link>
				</li>
			</ul>
		</div>
	);
};
