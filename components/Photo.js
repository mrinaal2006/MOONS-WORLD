import Image from "next/image";
import { blur } from "@/data/blur";

// next/image + an instant blurred preview (from data/blur.js) while the photo loads.
export default function Photo(props) {
  const b = typeof props.src === "string" ? blur[props.src] : undefined;
  return <Image {...props} {...(b ? { placeholder: "blur", blurDataURL: b } : {})} />;
}
