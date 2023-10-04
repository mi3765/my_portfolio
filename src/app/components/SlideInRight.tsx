"use client";
import { useInView } from "react-intersection-observer";

export const SlideInRight = ({ children }: any) => {
	const { ref, inView } = useInView({
		rootMargin: "-100px",
		triggerOnce: true,
	});
	return (
		<div
			ref={ref}
			className={`${
				inView ? "pacity-100" : "opacity-0 translate-x-[50%"
			} duration-[1s]`}
		>
			{children}
		</div>
	);
};
