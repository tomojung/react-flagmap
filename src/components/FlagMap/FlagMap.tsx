import { useEffect, useState } from "react";
import { FlagMapProps } from "./FlagMap.types";
import "./FlagMap.scss";

const FlagMap = ({ country, maxWidth = "100%", maxHeight = "100%", className = "" }: FlagMapProps) => {
	const [fileExists, setFileExists] = useState(false);
	const flagSrc = `/images/${country.toLowerCase()}.svg`;

	const checkFile = async () => {
		try {
			const response = await fetch(flagSrc, { method: "HEAD" });
			setFileExists(response.ok);
		} catch {
			setFileExists(false);
		}
	};

	useEffect(() => {
		checkFile();
	}, [flagSrc]);

	return fileExists ? (
		<div className={`flag-container ${className}`}>
			<img
				src={flagSrc}
				alt={country}
				style={{
					maxWidth: typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth,
					maxHeight: typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight,
				}}
			/>
		</div>
	) : (
		<div>Flag not available</div>
	);
};

export default FlagMap;
