import { CardCarousel } from "@/components/ui/card-carousel";

const ClientCarousel = () => {
  const testimonialImages = [
    {
      src: "/clients/client1.jpg",
      alt: "Development workspace",
      quote: "Grizzly Agency transformed our outdated platform into a modern, scalable solution that increased our conversion rates by 340%."
    },
    {
      src: "/clients/client2.jpg",
      alt: "Team collaboration",
      quote: "The team's expertise in both development and user experience is unmatched. They delivered beyond our expectations."
    },
    {
      src: "/clients/client3.jpg",
      alt: "Strategy planning",
      quote: "Working with Grizzly Agency was seamless. Their strategic approach and technical excellence helped us scale rapidly."
    },
    {
      src: "/clients/client4.jpg",
      alt: "Development workspace",
      quote: "From concept to deployment, they built technology that drives real business results. Highly recommended!"
    },
    {
      src: "/clients/client5.jpg",
      alt: "Team collaboration",
      quote: "The quality of their work and attention to detail is exceptional. They truly understand modern web development."
    }
  ];

  return (
    <div className="mt-24 sm:mt-32 lg:mt-56">
      <CardCarousel
        images={testimonialImages}
        autoplayDelay={4000}
        showPagination={true}
        showNavigation={true}
      />
    </div>
  );
};

export default ClientCarousel;
