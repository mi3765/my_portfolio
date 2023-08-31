import { BlogCard } from "@/app/components/BlogCard";
import { Header } from "@/app/components/Header";

const Blog = () => {
	return (
		<div className="text-center">
			<Header />
			<h1 className="text-4xl font-bold mb-4">Blog</h1>
			<div className="flex flex-wrap justify-around">
				<BlogCard />
				<BlogCard />
				<BlogCard />
				<BlogCard />
				<BlogCard />
				<BlogCard />
				<BlogCard />
				<BlogCard />
			</div>
		</div>
	);
};

export default Blog;
