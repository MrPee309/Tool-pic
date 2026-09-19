import { ImageResponse } from "next/og";

export const alt = "Tool-Pic: Pick the right tool for the job";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          padding: 80,
          background: "#ffffff",
        }}
      >
        <div style={{ display: "flex", fontSize: 36, fontWeight: 700, color: "#1F5EFF", letterSpacing: 6 }}>
          TOOL-PIC
        </div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 88, fontWeight: 800, color: "#0B1B3A", lineHeight: 1.1 }}>
          Pick the right tool for the job.
        </div>
      </div>
    ),
    { ...size },
  );
}
