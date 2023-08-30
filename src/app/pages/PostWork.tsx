"use client";

import { Header } from "../components/Header";

export const PostWork = () => {
	const HandleUploadPhoto = () => {};

	return (
		<div className="text-center">
			<Header />
			{/* TODO: 投稿画面は管理者しか行けない */}
			{/* TODO: ボタン風にアレンジ */}

			<div className="flex justify-center" onClick={HandleUploadPhoto}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-10 h-10 text-orange-300"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
					/>
				</svg>
			</div>
		</div>
	);
};
