import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Nicolás Nievas — Backend & Fullstack Developer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#EEEAE3",
        }}
      >
        <div
          style={{
            fontSize: 220,
            fontFamily: "serif",
            color: "#171717",
            letterSpacing: "-6px",
            lineHeight: 1,
          }}
        >
          NN
        </div>
      </div>
    ),
    { ...size }
  )
}