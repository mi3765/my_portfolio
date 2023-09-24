import React from "react";
import Link from "next/link";
import About from "./pages/about/page";

const Home = () => {
	const container = {
		background: "#d0e2be",
	};
	return (
		<div className="">
			<div style={container}>
				<Link href="/">Home</Link>
			</div>
			<div style={container}>
				<Link href="pages/about">about</Link>
				<About />
			</div>
			<div style={container}>
				<Link href="pages/work">work</Link>
			</div>
			<div style={container}>
				<Link href="pages/blog">blog</Link>
			</div>
			<div style={container}>
				<Link href="pages/contact">contact</Link>
			</div>
			<div style={container}>
				<Link href="pages/postarticle">post article</Link>
			</div>
			<div style={container}>
				<Link href="pages/postwork/">post work</Link>
			</div>
		</div>
	);
};

export default Home;
