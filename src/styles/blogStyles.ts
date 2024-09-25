import { CSSProperties } from "react";

export const articleStyle: CSSProperties = {
	width: "90%",
	margin: "2rem auto",
	backgroundColor: "#fff",
	padding: "0 2rem",
	borderRadius: "8px",
	boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
	lineHeight: "1.6",
	color: "#333",
	fontSize: "1rem",
	maxWidth: "1000px",
	display: "flex",
	flexDirection: "column"
};

export const exampleBoxStyle: CSSProperties = {
	backgroundColor: "#f0f0f0",
	padding: "2rem",
	borderLeft: "16px solid #333",
	borderRadius: "4px",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
};

export const explanationStyle = (
	backgroundColor = "transparent"
): CSSProperties => ({
	fontSize: "1.1rem",
	lineHeight: "1.6",
	color: "#333",
	textAlign: "justify",
	backgroundColor,
	padding: "1rem",
	borderRadius: "8px",
	margin: "2rem 0"
});

export const outputStyle = {
	fontFamily: "monospace",
	fontSize: "1.1rem"
};

export const ulStyle: CSSProperties = {
	listStyleType: "disc",
	marginLeft: "1.5rem",
	paddingLeft: "0.5rem",
	fontSize: "1.05rem",
	lineHeight: "1.6"
};

export const liStyle: CSSProperties = {
	marginBottom: "0.5rem"
};
