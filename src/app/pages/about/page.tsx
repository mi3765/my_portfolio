const About = () => {
	return (
		<div className="flex flex-col">
			<h1 className="text-center">About</h1>
			<div className="flex">
				<img src="" alt="" className="flex-1 w-full h-full" />
				<div className="flex-1">
					<h1>氏名: 水野慧亞</h1>
					<p>岐阜協立大学 経営学部 情報メディア学科 3年</p>
					<p>ソフトピア共同研究室</p>
					<p>趣味: 麻雀、アニメ鑑賞</p>
					<hr />
					<p>資格: ITパスポート、基本情報技術者</p>
					<p>技術スキル: Next.js、TypeScript、TailwindCSS、Go、MySQL、C++</p>
					<p>Email: airever3985@gmail.com</p>
					<p>
						<a href="https://github.com/mi3765">
							Github: https://github.com/mi3765
						</a>
					</p>
					<p>現在の取り組み:</p>
					<p>
						9月の東京でのハッカソンに向けて、フロントエンド開発技術力の向上と、10月の応用情報に向けての勉強をしています。
					</p>
					<p>今年の目標: フルスタックでオリジナルアプリ開発とAtCoder入茶</p>
				</div>
			</div>
		</div>
	);
};

export default About;
