import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "evverywhere — Cape Town Creative Agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(ellipse at 30% 20%, #1a1a1a 0%, #040404 60%)",
          color: "#f7f4ef",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.42em",
            textTransform: "uppercase",
            color: "#999",
            fontFamily: "monospace",
            display: "flex",
          }}
        >
          Cape Town · Est. 2024
        </div>
        <div
          style={{
            fontSize: 168,
            fontWeight: 300,
            letterSpacing: "-0.04em",
            lineHeight: 0.92,
            fontStyle: "italic",
            display: "flex",
          }}
        >
          evverywhere
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#bbb",
            maxWidth: 900,
            lineHeight: 1.4,
            display: "flex",
          }}
        >
          A creative agency for the everywhere generation. Strategy, paid ads,
          content, analysis, web.
        </div>
      </div>
    ),
    { ...size },
  );
}
