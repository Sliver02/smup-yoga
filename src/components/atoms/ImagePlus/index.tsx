import Image, { ImageProps } from "next/image";
import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";

const ImagePlus = async (props: ImageProps) => {
  const { src } = props;

  const buffer = await fs.readFile(`./public${src}`);

  const { base64 } = await getPlaiceholder(buffer);

  return <Image {...props} placeholder="blur" blurDataURL={base64} />;
};

export default ImagePlus;
