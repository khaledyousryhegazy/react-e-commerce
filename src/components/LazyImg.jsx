import { LazyLoadImage } from "react-lazy-load-image-component";

function LazyImg({ src, style, alt }) {
  return <LazyLoadImage src={src} className={style} alt={alt} />;
}
export default LazyImg;
