import { ilaktraValueList } from "@/constants";
import { Hero, Industries, PostRFQ, Reviews, ValueSection } from "@/containers";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Industries />
      <Reviews />
      <ValueSection title="Why Choose ILAKTRA?" data={ilaktraValueList} />
      <PostRFQ />
    </>
  );
}
