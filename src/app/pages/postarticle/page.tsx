"use client";
import React, { useState } from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { Header } from "@/app/components/Header";
import axios from "axios";

const PostArticle: React.FC = () => {
	const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
	const [imagePreviews, setImagePreviews] = useState<string[]>([]);
	const [title, setTitle] = useState("");
	const [message, setMessage] = useState("");

	const handleUploadPhoto = () => {
		const fileInput = document.createElement("input");
		fileInput.type = "file";
		fileInput.accept = "image/*";
		fileInput.multiple = true; // 複数のファイルを選択できるようにする
		fileInput.click();

		fileInput.addEventListener("change", (e) => {
			const files = e.target.files;

			if (files) {
				// 最大4枚まで選択できるように制限する
				const selectedFilesArray = Array.from(files).slice(0, 4);
				setSelectedFiles(selectedFilesArray);

				// 選択された画像をプレビュー表示
				const previews = selectedFilesArray.map((file) =>
					URL.createObjectURL(file)
				);

				// 既存のプレビュー画像に新しいプレビュー画像を追加
				setImagePreviews((prevPreviews) => [...prevPreviews, ...previews]);
			}
		});
	};

	const postArticle = async () => {
		try {
			const articleData = new FormData();
			articleData.append("title", title);
			articleData.append("message", message);

			selectedFiles.forEach((file, index) => {
				articleData.append(`file${index}`, file);
			});

			const response = await axios.post("api/postarticle", articleData);
			console.log("サーバーレスポンス", response.data);
		} catch (error) {
			console.log("エラー", error);
		}
	};

	return (
		<div className="text-center">
			{/* TODO: Headerコンポーネントの実装が必要 */}
			<Header />
			<div className="flex flex-col items-center">
				<div className="flex items-center gap-5 m-5">
					<label htmlFor="title" className="block text-gray-700 font-medium">
						記事名
					</label>
					<input
						type="text"
						id="title"
						name="title"
						className="mt-1 p-1 max-w-lg border rounded-md focus:ring focus:ring-blue-200"
						required
						onChange={(e) => setTitle(e.target.value)}
						value={title}
					/>
				</div>
				<div className="flex items-center gap-5 m-5">
					<h1>画像</h1>
					<div>
						<AddPhotoAlternateIcon
							style={{ fontSize: "3rem" }}
							onClick={handleUploadPhoto}
							className="bg-gray-300 p-2 m-2 rounded-lg cursor-pointer"
						/>
					</div>
				</div>
				<div className="flex">
					{imagePreviews.map((preview, index) => (
						<div key={index} className="mr-2">
							<img
								src={preview}
								alt={`Selected ${index + 1}`}
								style={{ maxWidth: "100px", maxHeight: "100px" }}
							/>
						</div>
					))}
				</div>
				<div className="flex items-center gap-5 m-5">
					<label htmlFor="message" className="block text-gray-700 font-medium">
						概要
					</label>
					<textarea
						id="message"
						name="message"
						className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
						rows={4}
						required
						onChange={(e) => setMessage(e.target.value)}
						value={title}
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

export default PostArticle;
