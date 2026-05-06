const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const SUPABASE_BUCKET = process.env.NEXT_PUBLIC_SUPABASE_BUCKET || "assets";

function getAsset(path: string): string {
  if (!SUPABASE_URL) return `/${path}`;
  return `${SUPABASE_URL}/storage/v1/object/public/${SUPABASE_BUCKET}/${path}`;
}

export const assets = {
  logo: getAsset("logo.png"),
  heroVideo: getAsset("RECAP-WEB.mp4"),
  heroPoster: getAsset("logo.png"),
  backgroundMusic: getAsset("background.mp3"),
  portfolio: [
    {
      video: getAsset("71-DANCE-CAMP-INDONESIA-2025.mp4"),
      poster: getAsset("71dancecamp-thumb.jpg"),
      category: "71 Dance Camp · 2025",
      title: "International Event",
    },
    {
      video: getAsset("YKAKI.mp4"),
      poster: getAsset("YKAKI-thumb.jpg"),
      category: "Berani Gundul YKAKI · 2026",
      title: "Collaboration Project",
    },
    {
      video: getAsset("black-auto.mp4"),
      poster: getAsset("black-auto-thumb.jpg"),
      category: "Black Auto · 2023",
      title: "Automotive",
    },
    {
      video: getAsset("TEST-SALMAN.mp4"),
      poster: getAsset("TEST-SALMAN-thumb.jpg"),
      category: "KRY · 2025",
      title: "Brand",
    },
    {
      video: getAsset("CorynAdelina-Menyerah-Hari-ini.mp4"),
      poster: getAsset("menyerah-hari-ini.jpg"),
      category: "Menyerah Hari Ini By Coryn Adelina · 2024",
      title: "Music Video",
    },
  ],
};
