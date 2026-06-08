import { ImageResponse } from "next/og";

import { siteConfig } from "@/data/site";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, rgba(15,23,42,1) 0%, rgba(30,41,59,1) 55%, rgba(71,85,105,1) 100%)",
          color: "white",
          padding: "56px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 28,
            padding: 40,
            background: "rgba(255,255,255,0.04)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              fontSize: 26,
              letterSpacing: 6,
              textTransform: "uppercase",
            }}
          >
            <div
              style={{
                width: 22,
                height: 22,
                borderRadius: 999,
                background: "#fc3e30",
              }}
            />
            CENOZ
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 900 }}>
            <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.04 }}>
              Módulos portátiles, baños químicos y equipos atmosféricos.
            </div>
            <div style={{ fontSize: 30, lineHeight: 1.4, color: "rgba(255,255,255,0.78)" }}>
              Soluciones para empresas, obras, municipios y operaciones con atención
              directa desde Bahía Blanca.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 18,
              alignItems: "center",
              fontSize: 24,
              color: "rgba(255,255,255,0.82)",
            }}
          >
            <div
              style={{
                padding: "14px 22px",
                borderRadius: 999,
                background: "rgba(252,62,48,0.18)",
                color: "#ffe2de",
              }}
            >
              {siteConfig.addressLine}
            </div>
            <div>{siteConfig.siteUrl.replace("https://", "")}</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}