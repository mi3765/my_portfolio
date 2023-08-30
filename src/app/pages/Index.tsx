import { RouterConfig } from "../components/RouterConfig";
import { Header } from "../components/Header";
import { About } from "./About/About";
import { Work } from "./Work";
import { Blog } from "./Blog";
import { Contact } from "./Contact";
import { PostWork } from "./PostWork";

export const Index = () => {
	return (
		<div>
			{/* <Header />
			<img src="" alt="" />
			<h1 className="text-center text-6xl my-52">My Portfolio Site</h1>
			<About />
			<Work />
			<Blog />
			<Contact /> */}
			<PostWork />
		</div>
	);
};
