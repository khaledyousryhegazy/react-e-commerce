import LazyImg from "../LazyImg";
import feature1 from "../../assets/feature1.jpg";
import feature2 from "../../assets/feature2.jpg";
import feature3 from "../../assets/feature3.jpg";

function Features() {
  return (
    <div
      className="py-5 grid grid-cols-[repeat(3,minmax(200px,1fr))] gap-5
    max-[768px]:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]
    "
    >
      <LazyImg src={feature1} style="object-cover w-full" alt="feature/jpg" />
      <LazyImg src={feature2} style="object-cover w-full" alt="feature/jpg" />
      <LazyImg src={feature3} style="object-cover w-full" alt="feature/jpg" />
    </div>
  );
}

export default Features;
