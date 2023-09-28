"use client";
import { useRouter } from "next/navigation";

export const Header = () => {
	const router = useRouter();

	const handleClickRoute = (
		e: React.MouseEvent<HTMLAnchorElement>,
		href: string
	) => {
		e.preventDefault();
		router.push(href);
	};

	return (
		<div className="flex justify-between mx-20 my-10">
			<h1>
				<a href="/" onClick={(e) => handleClickRoute(e, "/")}>
					My Portfolio
				</a>
			</h1>
			<ul className="flex gap-10">
				<li>
					<a href="/" onClick={(e) => handleClickRoute(e, "/")}>
						Home
					</a>
				</li>
				<li>
					<a href="/about" onClick={(e) => handleClickRoute(e, "/pages/about")}>
						About
					</a>
				</li>
				<li>
					<a href="/work" onClick={(e) => handleClickRoute(e, "/pages/work")}>
						Work
					</a>
				</li>
				<li>
					<a href="/blog" onClick={(e) => handleClickRoute(e, "/pages/blog")}>
						Blog
					</a>
				</li>
				<li>
					<a
						href="/contact"
						onClick={(e) => handleClickRoute(e, "/pages/contact")}
					>
						Contact
					</a>
				</li>
			</ul>
		</div>
	);
};
