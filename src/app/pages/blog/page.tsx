"use client";
import { BlogCard } from "@/app/components/BlogCard";
import { Header } from "@/app/components/Header";
import { useState, useEffect } from "react";
import axios from "axios";

const Blog = () => {
	const [articleData, setArticleData] = useState([]);
	useEffect(() => {
		axios
			.get("/api/postarticle")
			.then((response) => {
				setArticleData(response.data);
			})
			.catch((error) => {
				console.log("データ取得に失敗しました", error);
			});
	}, []);

	const containerItem = {
		width: "calc(33.33% - 40px)",
	};

	return (
		<div className="text-center">
			<Header />
			<h1 className="text-4xl font-bold mb-4">Blog</h1>
			<div className="flex flex-wrap">
				<BlogCard style={containerItem} />
				<BlogCard style={containerItem} />
				<BlogCard style={containerItem} />
				<BlogCard style={containerItem} />
				<BlogCard style={containerItem} />
				<BlogCard style={containerItem} />
				<BlogCard style={containerItem} />
				<BlogCard style={containerItem} />
			</div>
		</div>
	);
};

export default Blog;
