"use client";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { Header } from "../../components/Header";

const PostWork: React.FC = () => {
	const handleUploadPhoto = () => {
		const fileInput = document.createElement("input");
		fileInput.type = "file";
		fileInput.accept = "image/*";
		fileInput.click();

		fileInput.addEventListener("change", (event) => {
			const selectedFile = event.target.files?.[0];
			if (selectedFile) {
				// 選択されたファイルを処理する（アップロード、プレビューなど）
				console.log("選択されたファイル:", selectedFile);
			}
		});
	};

	return (
		<div className="text-center">
			<Header />
			{/* TODO: 投稿画面は管理者しか行けない */}
			{/* TODO: ボタン風にアレンジ */}

			<div className="flex flex-col items-center">
				<div className="flex items-center gap-5 m-5">
					<label htmlFor="name" className="block text-gray-700 font-medium">
						作品名
					</label>
					<input
						type="text"
						id="name"
						name="name"
						className="mt-1 p-1 max-w-lg border rounded-md focus:ring focus:ring-blue-200"
						required
					/>
				</div>
				<div className="flex items-center gap-5 m-5">
					<h1>画像</h1>
					<div>
						<AddPhotoAlternateIcon
							style={{ fontSize: "3rem" }}
							onClick={handleUploadPhoto}
							className='bg-gray-300 p-2 m-2 rounded-lg cursor-pointer"'
						/>
					</div>
				</div>
				<img
					src="/wave-photo.avif"
					alt="wave-photo"
					className="max-w-sm max-h-full"
				/>
				<div className="flex items-center gap-5 m-5">
					<label htmlFor="name" className="block text-gray-700 font-medium">
						作成期間
					</label>
					<input
						type="text"
						id="name"
						name="name"
						className="mt-1 p-1 max-w-lg border rounded-md focus:ring focus:ring-blue-200"
						required
					/>
				</div>
				<div className="flex items-center gap-5 m-5">
					<label htmlFor="name" className="block text-gray-700 font-medium">
						URL
					</label>
					<input
						type="text"
						id="name"
						name="name"
						className="mt-1 p-1 max-w-lg border rounded-md focus:ring focus:ring-blue-200"
						required
					/>
				</div>
				<div className="flex items-center gap-5 m-5">
					<label htmlFor="message" className="block text-gray-700 font-medium">
						概要
					</label>
					<textarea
						id="message"
						name="message"
						className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
						rows="4"
						required
					></textarea>
				</div>
				<div className="mt-4">
					<button
						type="submit"
						className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
					>
						投稿
					</button>
				</div>
			</div>
		</div>
	);
};

export default PostWork;
