import React from "react";
import Link from "next/link";
import Image from "next/image";

const Home = () => {
	return (
		<div className="flex justify-center gap-10">
			<Link href="/">Home</Link>
			<Link href="pages/about">about</Link>
			<Link href="pages/work">work</Link>
			<Link href="pages/skill">skill</Link>
			<Link href="pages/blog">blog</Link>
			<Link href="pages/contact">contact</Link>
			<Link href="pages/postarticle">post article</Link>
			<Link href="pages/postwork/">post work</Link>
		</div>
	);
};

export default Home;
