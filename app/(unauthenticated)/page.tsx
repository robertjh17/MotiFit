import HomeTestimonial from "@/components/testimonials/HomeTestimonial";
import { TestimonialItem } from "@/interfaces/TestimonialItem";
import Banner from "@/components/ui/Banner"

export default function Home() {
  const testimonialList: TestimonialItem[] = [
    {title: "Titel 1", description: "Beschrijving 1"},
    {title: "Titel 2", description: "Beschrijving 2"},
    {title: "Titel 3", description: "Beschrijving 3"},
    {title: "Titel 4", description: "Beschrijving 4"}
  ]

  return (
    <>
    <Banner />
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
      
      <HomeTestimonial testimonialItems={testimonialList}/>
      </div>
    </>
  );
}
