import { ilaktraValueList } from "@/constants";
import { Hero, Industries, PostRFQSection, Reviews, ValueSection } from "@/containers";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Industries />
      <Reviews />
      <ValueSection title="Why Choose ILAKTRA?" data={ilaktraValueList} />
      <PostRFQSection />
    </>
  );
}
