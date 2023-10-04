"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export const Header = () => {
	const router = useRouter();
	const [menuOpen, setMenuOpen] = useState(false);

	const handleClickRoute = (
		e: React.MouseEvent<HTMLAnchorElement>,
		href: string
	) => {
		e.preventDefault();
		router.push(href);
		// スマートフォンサイズの場合、メニューを閉じる
		if (menuOpen) {
			setMenuOpen(false);
		}
	};

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<div className="mx-5 md:mx-20 my-5 lg:mx-20">
			<div className="hidden md:flex md:justify-between">
				<h1>
					<a href="/" onClick={(e) => handleClickRoute(e, "/")}>
						My Portfolio
					</a>
				</h1>
				<ul className="flex gap-10">
					<li>
						<a href="/" onClick={(e) => handleClickRoute(e, "/")}>
							Home
						</a>
					</li>
					<li>
						<a
							href="/about"
							onClick={(e) => handleClickRoute(e, "/pages/about")}
						>
							About
						</a>
					</li>
					<li>
						<a href="/work" onClick={(e) => handleClickRoute(e, "/pages/work")}>
							Work
						</a>
					</li>
					<li>
						<a href="/blog" onClick={(e) => handleClickRoute(e, "/pages/blog")}>
							Blog
						</a>
					</li>
					<li>
						<a
							href="/contact"
							onClick={(e) => handleClickRoute(e, "/pages/contact")}
						>
							Contact
						</a>
					</li>
				</ul>
			</div>
			<div className="mx-5 md:mx-20 md:hidden">
				{/* スマートフォンサイズの場合のメニューアイコン */}
				<div className="md:hidden">
					{menuOpen ? (
						<div className="flex justify-end">
							<CloseIcon
								onClick={toggleMenu}
								className="cursor-pointer"
								fontSize="large"
							/>
						</div>
					) : (
						<div className="flex justify-between items-center">
							<h1>
								<a
									href="/"
									onClick={(e) => handleClickRoute(e, "/")}
									className="text-xl"
								>
									My Portfolio
								</a>
							</h1>
							<MenuIcon
								onClick={toggleMenu}
								className="cursor-pointer"
								fontSize="large"
							/>
						</div>
					)}
				</div>

				{/* スマートフォンサイズのメニュー */}
				{menuOpen && (
					<ul className="md:mt-0 h-screen text-center flex flex-col justify-center text-3xl">
						<li className="">
							<a href="/" onClick={(e) => handleClickRoute(e, "/")}>
								Home
							</a>
						</li>
						<li className="mt-8">
							<a
								href="/about"
								onClick={(e) => handleClickRoute(e, "/pages/about")}
							>
								About
							</a>
						</li>
						<li className="mt-8">
							<a
								href="/work"
								onClick={(e) => handleClickRoute(e, "/pages/work")}
							>
								Work
							</a>
						</li>
						<li className="mt-8">
							<a
								href="/blog"
								onClick={(e) => handleClickRoute(e, "/pages/blog")}
							>
								Blog
							</a>
						</li>
						<li className="mt-8">
							<a
								href="/contact"
								onClick={(e) => handleClickRoute(e, "/pages/contact")}
							>
								Contact
							</a>
						</li>
					</ul>
				)}
			</div>
		</div>
	);
};
