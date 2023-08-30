import React from "react";
import Link from "next/link"; // Linkコンポーネントをインポート

export const RouterConfig = () => {
	return (
		<>
			<div className="bg-black">
				<Link href="/">
					<p className="">Home</p>
				</Link>
				<Link href="/About">
					<p>About</p>
				</Link>
				<Link href="/work">
					<p>Work</p>
				</Link>
				<Link href="/blog">
					<p>Blog</p>
				</Link>
			</div>
		</>
	);
};
