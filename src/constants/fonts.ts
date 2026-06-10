const SAPRONA = {
  medium: "Saprona-Medium",
  semiBold: "Saprona-SemiBold",
  bold: "Saprona-Bold",
} as const;

const SAPRONA_FONTS = {
  [SAPRONA.medium]: require("@/assets/fonts/saprona/medium.ttf"),
  [SAPRONA.semiBold]: require("@/assets/fonts/saprona/semi-bold.ttf"),
  [SAPRONA.bold]: require("@/assets/fonts/saprona/bold.ttf"),
};

export { SAPRONA, SAPRONA_FONTS };
