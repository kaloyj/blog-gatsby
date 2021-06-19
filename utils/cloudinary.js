const doubleEscapeString = str => {
  const commas = str.replace(",", "%252C")
  const hashtag = commas.replace("#", "%2523")

  return hashtag
}

export const getSocialImage = ({
  width = 1200,
  height = 628,
  title,
  date,
  tagline,
  titleFont = "Quicksand",
  titleExtraConfig = "_line_spacing_-10",
  taglineExtraConfig = "",
  taglineFont = "Quicksand",
  textAreaWidth = 740,
  textLeftOffset = 65,
  titleBottomOffset = 280,
  taglineTopOffset = 375,
  textColor = "171219",
  titleFontSize = 76,
  taglineFontSize = 32,
  version = process.env.CLOUDINARY_DEFAULT_VERSION,
  cloudName = process.env.CLOUDINARY_DEFAULT_CLOUDNAME,
  imagePublicID = process.env.CLOUDINARY_SOCIAL_CARD_ID,
  cloudinaryUrlBase = "https://res.cloudinary.com",
} = {}) => {
  const imageConfig = [
    `w_${width}`,
    `h_${height}`,
    "c_fill",
    "q_auto",
    "f_auto",
  ].join(",")

  const titleConfig = [
    `w_${textAreaWidth}`,
    "c_fit",
    `co_rgb:${textColor}`,
    "g_south_west",
    `x_${textLeftOffset}`,
    `y_${titleBottomOffset}`,
    `l_text:${titleFont}_${titleFontSize}_bold_${titleExtraConfig}:${doubleEscapeString(
      title
    )}`,
  ].join(",")

  const taglineConfig = [
    `w_${textAreaWidth}`,
    "c_fit",
    `co_rgb:${textColor}`,
    "g_north_west",
    `x_${textLeftOffset}`,
    `y_${taglineTopOffset}`,
    `l_text:${taglineFont}_${taglineFontSize}${taglineExtraConfig}:${doubleEscapeString(
      tagline
    )}`,
  ].join(",")

  const dateConfig = [
    `w_${textAreaWidth}`,
    "c_fit",
    `co_rgb:${textColor}`,
    "g_north_west",
    `x_${textLeftOffset + 2}`,
    "y_520",
    `l_text:${taglineFont}_18_bold_${taglineExtraConfig}:${doubleEscapeString(
      date
    )}`,
  ].join(",")

  const cloudinaryURLParts = [
    cloudinaryUrlBase,
    cloudName,
    "image",
    "upload",
    imageConfig,
    titleConfig,
    taglineConfig,
    dateConfig,
    version,
    imagePublicID,
  ]

  return cloudinaryURLParts.join("/")
}
