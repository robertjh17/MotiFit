import { TestimonialItem } from "@/interfaces/TestimonialItem";
import { GoArrowRight } from "react-icons/go";

type HomeTestimonialProps = {
    testimonialItems: TestimonialItem[];
  };

export default function HomeTestimonial({testimonialItems}: HomeTestimonialProps){
    return(
        <>
        {testimonialItems.map((item, index) => (
            <a
            key={index}
            href="/login"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              {item.title}{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <GoArrowRight className="font-bold"/>
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              {item.description}
            </p>
          </a>
        ))}
        </>
    )
}