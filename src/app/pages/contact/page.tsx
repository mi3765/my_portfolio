const Contact = () => {
	return (
		<div>
			<div className="p-8 max-w-md mx-auto bg-gray-100 rounded-lg shadow-md">
				<h2 className="text-2xl font-semibold mb-4">お問い合わせフォーム</h2>
				<form action="#" method="post">
					<div className="mb-4">
						<label htmlFor="name" className="block text-gray-700 font-medium">
							お名前
						</label>
						<input
							type="text"
							id="name"
							name="name"
							className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
							required
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="email" className="block text-gray-700 font-medium">
							メールアドレス
						</label>
						<input
							type="email"
							id="email"
							name="email"
							className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
							required
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="subject"
							className="block text-gray-700 font-medium"
						>
							件名
						</label>
						<input
							type="text"
							id="subject"
							name="subject"
							className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
							required
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="message"
							className="block text-gray-700 font-medium"
						>
							メッセージ
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
							送信
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
