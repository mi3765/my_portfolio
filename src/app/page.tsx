"use client";
import React, { useRef } from "react";
import Link from "next/link";
import About from "./pages/about/page";
import { WorkCard } from "./components/WorkCard";
import { BlogCard } from "./components/BlogCard";
import { Header } from "./components/Header";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Home = () => {
	const progressWorkCircle = useRef(null);
	const progressBlogCircle = useRef(null);
	const progressWorkContent = useRef(null);
	const progressBlogContent = useRef(null);
	const onAutoplayTimeWork = (s, time, progress) => {
		progressWorkCircle.current.style.setProperty("--progress", 1 - progress);
		progressWorkContent.current.textContent = `${Math.ceil(time / 1000)}s`;
	};
	const onAutoplayTimeBlog = (s, time, progress) => {
		progressBlogCircle.current.style.setProperty("--progress", 1 - progress);
		progressBlogContent.current.textContent = `${Math.ceil(time / 1000)}s`;
	};
	const container = {
		background: "#d0e2be",
	};
	const cardStyle = {
		width: "400px", // カードの幅を調整してください
		margin: "0 auto", // 中央配置するために追加
	};

	return (
		<div className="">
			{/* TODO: 画面遷移必要なもの： PostArticle, PostWork, Blog, Work */}
			<Header />
			{/* <div style={container} className="text-center">
				<Link href="/" className="text-center text-6xl mb-5">
					Home
				</Link>
			</div> */}
			<div style={container} className="text-center">
				<Link href="pages/postarticle" className="text-center text-6xl mb-5">
					post article
				</Link>
			</div>
			<div style={container} className="text-center">
				<Link href="pages/postwork/" className="text-center text-6xl mb-5">
					post work
				</Link>
			</div>
			<div style={container} className="text-center">
				<Link href="pages/about" className="text-center text-6xl mb-5">
					about
				</Link>
				<About />
			</div>
			<div className="text-center">
				<Link href="pages/work" className="text-center text-6xl mb-5">
					Work
				</Link>
				<Swiper
					spaceBetween={30}
					centeredSlides={true}
					autoplay={{
						delay: 4500,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[Autoplay, Pagination, Navigation]}
					onAutoplayTimeLeft={onAutoplayTimeWork}
					className="mySwiper"
				>
					<SwiperSlide>
						<WorkCard style={cardStyle} />
					</SwiperSlide>
					<SwiperSlide>
						<WorkCard style={cardStyle} />
					</SwiperSlide>
					<SwiperSlide>
						<WorkCard style={cardStyle} />
					</SwiperSlide>
					<SwiperSlide>
						<WorkCard style={cardStyle} />
					</SwiperSlide>
					<SwiperSlide>
						<WorkCard style={cardStyle} />
					</SwiperSlide>
					<SwiperSlide>
						<WorkCard style={cardStyle} />
					</SwiperSlide>
					<SwiperSlide>
						<WorkCard style={cardStyle} />
					</SwiperSlide>
					<SwiperSlide>
						<WorkCard style={cardStyle} />
					</SwiperSlide>
					<div className="autoplay-progress" slot="container-end">
						<svg viewBox="0 0 48 48" ref={progressWorkCircle}>
							<circle cx="24" cy="24" r="20"></circle>
						</svg>
						<span ref={progressWorkContent}></span>
					</div>
				</Swiper>
			</div>
			<div className="text-center">
				<Link href="pages/blog" className="text-center text-6xl mb-5">
					Blog
				</Link>
				<Swiper
					spaceBetween={30}
					centeredSlides={true}
					autoplay={{
						delay: 4500,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[Autoplay, Pagination, Navigation]}
					onAutoplayTimeLeft={onAutoplayTimeBlog}
					className="mySwiper"
				>
					<SwiperSlide>
						<BlogCard style={cardStyle} />
						<BlogCard style={cardStyle} />
						<BlogCard style={cardStyle} />
					</SwiperSlide>
					<SwiperSlide>
						<BlogCard style={cardStyle} />
						<BlogCard style={cardStyle} />
						<BlogCard style={cardStyle} />
					</SwiperSlide>
					<SwiperSlide>
						<BlogCard style={cardStyle} />
						<BlogCard style={cardStyle} />
						<BlogCard style={cardStyle} />
					</SwiperSlide>

					<div className="autoplay-progress" slot="container-end">
						<svg viewBox="0 0 48 48" ref={progressBlogCircle}>
							<circle cx="24" cy="24" r="20"></circle>
						</svg>
						<span ref={progressBlogContent}></span>
					</div>
				</Swiper>
			</div>
			{/* <div style={container} className="text-center">
				<Link href="pages/contact" className="text-center text-6xl mb-5">
					contact
				</Link>
			</div> */}
		</div>
	);
};

export default Home;
