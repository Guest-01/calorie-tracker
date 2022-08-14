import 'dotenv/config';

export default {
  name: "calorie-tracker",
  slug: "calorie-tracker",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff"
  },
  updates: {
    fallbackToCacheTimeout: 0
  },
  assetBundlePatterns: [
    "**/*"
  ],
  ios: {
    supportsTablet: true
  },
  web: {
    favicon: "./assets/favicon.png"
  },
  extra: {
    supabaseProjectUrl: process.env.SUPABASE_PROJECT_URL,
    supabaseAnonKey: process.env.SUPABASE_ANON_KEY
  }
}