"use client";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { Header } from "../../components/Header";
import axios from "axios";
import { useState } from "react";

const PostWork: React.FC = () => {
	const [title, setTitle] = useState("");
	const [period, setPeriod] = useState("");
	const [url, setUrl] = useState("");
	const [message, setMessage] = useState("");
	const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
	const [imagePreviews, setImagePreviews] = useState<string[]>([]);

	const handleUploadPhoto = () => {
		const fileInput = document.createElement("input");
		fileInput.type = "file";
		fileInput.accept = "image/*";
		fileInput.multiple = true; // 複数のファイルを選択できるようにする
		fileInput.click();

		fileInput.addEventListener("change", (e: any) => {
			// TODO: objectの型付け any修正
			const files = e.target.files;

			if (files) {
				// 最大4枚まで選択できるように制限する
				const selectedFilesArray: any = Array.from(files).slice(0, 4);
				setSelectedFiles(selectedFilesArray);

				// 選択された画像をプレビュー表示
				const previews = selectedFilesArray.map((file: any) =>
					URL.createObjectURL(file)
				);

				// 既存のプレビュー画像に新しいプレビュー画像を追加
				setImagePreviews((prevPreviews) => [...prevPreviews, ...previews]);
			}
		});
	};

	const baseURL = "http://localhost:3000/pages/postwork";

	const postWork = async () => {
		const requestData = {
			title: title,
			period: period,
			url: url,
			files: selectedFiles,
		};

		axios
			.post(baseURL, requestData)
			.then((response) => {
				console.log(response.data);
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
						作品名
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
							className='bg-gray-300 p-2 m-2 rounded-lg cursor-pointer"'
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
					<label htmlFor="period" className="block text-gray-700 font-medium">
						作成期間
					</label>
					<input
						type="text"
						id="period"
						name="period"
						className="mt-1 p-1 max-w-lg border rounded-md focus:ring focus:ring-blue-200"
						required
						value={period}
						onChange={(e) => setPeriod(e.target.value)}
					/>
				</div>
				<div className="flex items-center gap-5 m-5">
					<label htmlFor="url" className="block text-gray-700 font-medium">
						URL
					</label>
					<input
						type="text"
						id="url"
						name="url"
						className="mt-1 p-1 max-w-lg border rounded-md focus:ring focus:ring-blue-200"
						required
						value={url}
						onChange={(e) => setUrl(e.target.value)}
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
						rows={4}
						required
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					></textarea>
				</div>
				<div className="mt-4">
					<button
						type="submit"
						className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
						onClick={postWork}
					>
						投稿
					</button>
				</div>
			</div>
		</div>
	);
};

export default PostWork;
