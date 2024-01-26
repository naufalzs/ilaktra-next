import { ilaktraValueList } from "@/constants";
import {
  Hero,
  Industries,
  PostRFQSection,
  Reviews,
  ValueSection,
} from "@/containers";

export default function HomePage() {
  return (
    <>
      <section className="w-full">
        <Hero />
      </section>

      <section className="w-full">
        <Industries />
      </section>

      <section className="w-full">
        <Reviews />
      </section>

      <section className="w-full">
        <ValueSection title="Why Choose ILAKTRA?" data={ilaktraValueList} />
      </section>

      <section className="w-full">
        <PostRFQSection />
      </section>
    </>
  );
}
