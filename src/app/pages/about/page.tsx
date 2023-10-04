"use client";
import { Header } from "@/app/components/Header";
import { Skill } from "@/app/components/Skill";

const About = () => {
	return (
		<div>
			<div className="">
				<Header />
				<div className="m-5 md:mx-20 md:my-5">
					<div className="md:relative md:h-full">
						<div className="">
							<img src="/my-photo.png" alt="" className="" />
						</div>
						<div className="p-3 w-full bg-white md:m-5 md:p-10 md:absolute md:top-1/2 md:left-1/3">
							<div className="flex items-end">
								<h2 className="text-xl tracking-widest">水野 慧亞</h2>
								<span className="text-sm text-[#aaa] ml-1 tracking-widest">
									mizuno ea
								</span>
							</div>
							<div className="text-xs">
								<p>2002年12月25日生まれ</p>
								<p>岐阜協立大学 経営学部 情報メディア学科 3年</p>
							</div>
							<div>
								<h2 className="mt-4">2021年</h2>
								<ul className="ml-2 text-xs leading-5">
									<li>3月 高校卒業</li>
									<li>4月 岐阜協立大学入学</li>
									<li>10月 ソフトピア共同研究室参加</li>
								</ul>
								<h2 className="mt-2">2022年</h2>
								<ul className="ml-2 text-xs leading-5">
									<li>6月 プログラミングと出会う</li>
									<li>9月 初めてのハッカソン参加 何も出来ず...</li>
								</ul>
								<h2 className="mt-2">2023年</h2>
								<ul className="ml-2 text-xs leading-5">
									<li>3月 2回目のハッカソン 1ページ担当する</li>
									<li>7月 3回目のハッカソン Web3.0わからん...</li>
									<li>8月 ポートフォリオを作り始める</li>
									<li>9月 4回目のハッカソン 動かず...</li>
								</ul>
							</div>
							<div className="mt-4">
								<h2 className="">今年の目標</h2>
								<div className="ml-2 text-xs leading-5">
									<li>フルスタックでのWebアプリ開発</li>
									<li>AtCoder入茶</li>
									<li>応用情報合格</li>
									<li>ハッカソン優勝</li>
									<li>西濃かるたプロジェクトの成功</li>
									<li className="mt-4">
										フロントを中心にUI構築の勉強をしながらサーバーサイドへの理解も深めます。
									</li>
								</div>
							</div>
						</div>
					</div>
					<div className="mt-5 md:relative md:top-[200px]" id="second">
						<h2>趣味</h2>
						<p>麻雀</p>
						<img src="/26243471_s.jpg" alt="" />
						<p>大学1年の終わりがけに高校の頃からの友人に麻雀を教わりました。</p>
						<p>
							毎日1半荘程度ネット麻雀を打っていましたが、現在は就活活動や開発勉強のため休止中です。
						</p>
						<p>睡眠</p>
						<p>
							寝ることが好きです。社会人になった際、体調管理には特に気をつけたいと考えています。
						</p>
						<div>
							<h2>保有資格</h2>
							<p>普通自動車免許</p>
							<p>基本情報技術者</p>
							<p>ITパスポート</p>
							<h2>Skills</h2>
							<div className="md:m-20">
								<Skill />
							</div>

							<p>
								<a href="https://github.com/mi3765">
									Github: https://github.com/mi3765
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
