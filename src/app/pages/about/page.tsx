import { Header } from "@/app/components/Header";

const About = () => {
	const containerItem = {
		width: "600px",
		height: "400px",
		background: "lightblue",
		border: "1px solid",
	};

	return (
		<div>
			<div className="">
				<Header />
				<div className="flex overflow-x-scroll">
					<div className="flex border-dotted items-center relative left-1/4">
						<div className="flex" style={containerItem}>
							<img
								src="/my-photo.png"
								alt=""
								className="object-contain max-w-full max-h-full"
							/>
							<div className="flex flex-col">
								<h2>氏名</h2>
								<p>水野慧亞</p>
								<h2>Email</h2>
								<p>airever3985@gmail.com</p>
							</div>
						</div>
						<div style={containerItem}>
							<h2>大学</h2>
							<p>岐阜協立大学</p>
							<h2>学部</h2>
							<p>経営学部</p>
							<h2>学科</h2>
							<p>情報メディア学科</p>
						</div>
						<div style={containerItem}>
							<h2>趣味</h2>
							<p>麻雀</p>
							<p>睡眠</p>
						</div>
						<div style={containerItem}>
							<h2>保有資格</h2>
							<p>基本情報技術者</p>
							<p>ITパスポート</p>
							<h2>Skills</h2>
							<div className="flex">
								<div className="">
									<h3>Frontend</h3>
									<p>JavaScript</p>
									<p>TypeScript</p>
									<p>React</p>
									<p>Next.js</p>
									<p>HTML</p>
									<p>CSS & SASS & Framework</p>
								</div>
								<div>
									<h3>Backend</h3>
									<p>Golang</p>
									<p>Firebase</p>
									<p>lambda & APIGateway & DynamoDB</p>
									<p>MySQL</p>
								</div>
							</div>
							<p>
								<a href="https://github.com/mi3765">
									Github: https://github.com/mi3765
								</a>
							</p>
						</div>
						<div style={containerItem}>
							<h2>今年の目標</h2>
							<p>フルスタックのWebアプリ開発</p>
							<p>AtCoder入茶</p>
							<p>応用情報合格</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
