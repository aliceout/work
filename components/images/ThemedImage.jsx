import Image from "next/image";
import { useTheme } from "next-themes";

function ThemedImage({ darkImage, lightImage, alt, width, height, className }) {
  const { resolvedTheme } = useTheme();
  let src;

  switch (resolvedTheme) {
    case "light":
      src =  lightImage ;
      break;
    case "dark":
      src =  darkImage ;
      break;
    default:
      src =
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
      break;
  }

  return <Image src={src} width={width} height={height} alt={alt} className={className} />;
}

export default ThemedImage;
