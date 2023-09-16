import Image from "next/image";
import { Header } from "@/app/components/Header";

const About = () => {
	return (
		<div>
			<Header />
			<div className="flex flex-col items-center">
				<h1 className="text-center text-6xl">About</h1>
				<div className="flex my-8 mx-auto max-w-screen-lg">
					<div className="flex-1 flex justify-center items-center">
						<div className="rounded-3xl overflow-hidden">
							<Image
								src="/my-photo.png"
								width={300}
								height={200}
								alt="my-photo"
							/>
						</div>
					</div>
					<div className="flex-1 p-8">
						<div className="h-full">
							{/* <h1>氏名: 水野慧亞</h1> */}
							{/* <p>岐阜協立大学 経営学部 情報メディア学科 3年</p> */}
							{/* <p>ソフトピア共同研究室</p> */}
							<p>趣味: 麻雀、アニメ鑑賞</p>
						</div>
						<hr className="my-4" />
						<div>
							<p>
								9月の東京でのハッカソンに向けて、フロントエンド開発技術力の向上と、10月の応用情報に向けての勉強をしています。
							</p>
							<p>今年の目標: フルスタックでオリジナルアプリ開発とAtCoder入茶</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
