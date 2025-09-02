"use server";
import Image, { ImageProps } from "next/image";
import { getImagePlaceholderFromRegistry } from "@/scripts/imagePlaceholder";

const ImagePlus = async (props: ImageProps) => {
  const base64 = getImagePlaceholderFromRegistry(props.src as string);

  return <Image {...props} placeholder="blur" blurDataURL={base64} />;
};

export default ImagePlus;
