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

	var fileArray: File[] = [];

	const handleUploadPhoto = () => {
		const fileInput = document.createElement("input");
		fileInput.type = "file";
		fileInput.accept = "image/*";
		fileInput.multiple = true; // 複数のファイルを選択できるようにする
		fileInput.click();

		fileInput.addEventListener("change", (e: any) => {
			if (e.currentTarget) {
				const files = e.target.files;
				console.log(e.target.files);

				if (files) {
					// 最大4枚まで選択できるように制限する
					const selectedFilesArray: any = Array.from(files).slice(0, 4);
					setSelectedFiles(selectedFilesArray);
					console.log(selectedFilesArray);

					selectedFiles.map((file) => {
						fileArray.push(file);
					});

					// 選択された画像をプレビュー表示
					const previews = selectedFilesArray.map((file: any) =>
						URL.createObjectURL(file)
					);

					// 既存のプレビュー画像に新しいプレビュー画像を追加
					setImagePreviews((prevPreviews) => [...prevPreviews, ...previews]);

					console.log(previews);
				}
			}
		});
	};

	// TODO: axiosの画像ファイルの複数送信

	const baseURL = "http://localhost:3000/pages/postarticle";

	const postArticle = () => {
		const requestData = {
			title: title,
			message: message,
			files: fileArray,
		};

		// POSTリクエストを送信
		axios
			.post(baseURL, requestData)
			.then((response) => {
				console.log("サーバーレスポンス", requestData);
				console.log(response);
			})
			.catch((error) => {
				console.error("エラー", error);
			});
	};

	return (
		<div className="text-center">
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
						value={message}
					></textarea>
				</div>
				<div className="mt-4">
					<button
						type="submit"
						className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200 cursor-pointer"
						onClick={postArticle}
					>
						投稿
					</button>
				</div>
			</div>
		</div>
	);
};

export default PostArticle;
