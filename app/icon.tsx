import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 26,
          background: "#040404",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#f7f4ef",
          fontFamily: "Georgia, serif",
          fontStyle: "italic",
          letterSpacing: "-0.04em",
        }}
      >
        e
      </div>
    ),
    { ...size },
  );
}
