import { useState } from "react";

interface StackedCard {
  id: string;
  title: string;
  image: string;
  alt: string;
  content: string[];
}

const cards: StackedCard[] = [
  {
    id: "card-1",
    title: "Process Discovery",
    image: "https://picsum.photos/id/641/400/200",
    alt: "Process discovery and mapping",
    content: [
      "We start by understanding your current workflows and identifying bottlenecks that automation can solve.",
      "Our team maps out every step of your processes, from data entry to final output.",
      "We analyze where time is being wasted and where human error commonly occurs.",
      "Together, we prioritize which processes will deliver the highest ROI when automated."
    ]
  },
  {
    id: "card-2", 
    title: "Strategic Planning",
    image: "https://picsum.photos/id/634/400/200",
    alt: "Strategic automation planning",
    content: [
      "We design a comprehensive automation strategy that aligns with your business goals.",
      "Our experts select the right tools and platforms for your specific use cases.",
      "We create detailed implementation roadmaps with clear milestones and success metrics.",
      "We ensure your automation plan integrates seamlessly with existing systems and workflows."
    ]
  },
  {
    id: "card-3",
    title: "Implementation & Training",
    image: "https://picsum.photos/id/824/400/200", 
    alt: "Implementation and team training",
    content: [
      "We build and deploy your automated workflows with minimal disruption to operations.",
      "Our team handles all technical setup, testing, and quality assurance.",
      "We provide comprehensive training for your team on new automated processes.",
      "We document everything and provide ongoing support to ensure long-term success."
    ]
  }
];

export default function StackedList() {
  const [selectedCard, setSelectedCard] = useState("card-1");

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Our Process
          </h3>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A systematic approach to transforming your business through intelligent automation
          </p>
        </div>

        {/* Stacked Cards Container */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-4xl h-80 md:h-96">
            {/* Hidden Radio Inputs for State Management */}
            {cards.map((card) => (
              <input
                key={card.id}
                className="sr-only"
                id={card.id}
                type="radio"
                name="process-panel"
                checked={selectedCard === card.id}
                onChange={() => setSelectedCard(card.id)}
              />
            ))}

            {/* Stacked Cards */}
            {cards.map((card, index) => {
              const isSelected = selectedCard === card.id;
              const cardIndex = cards.findIndex(c => c.id === card.id);
              const selectedIndex = cards.findIndex(c => c.id === selectedCard);
              
              // Calculate stacking order and transforms
              let order = 1;
              let scale = 0.75;
              let opacity = 0.6;
              let translateY = "0px";
              
              if (isSelected) {
                order = 3;
                scale = 1;
                opacity = 1;
                translateY = "0px";
              } else if (cardIndex === (selectedIndex + 1) % cards.length) {
                order = 2;
                scale = 0.85;
                opacity = 0.8;
                translateY = "-2rem";
              } else {
                order = 1;
                scale = 0.75;
                opacity = 0.6;
                translateY = "-4rem";
              }

              return (
                <article
                  key={card.id}
                  className={`absolute inset-0 glass-card rounded-2xl overflow-hidden transition-all duration-500 ease-in-out cursor-pointer stacked-card ${
                    isSelected ? 'stacked-card-selected' : ''
                  }`}
                  style={{
                    zIndex: order,
                    transform: `translateY(${translateY}) scale(${scale})`,
                    opacity: opacity,
                  }}
                  onClick={() => setSelectedCard(card.id)}
                >
                  {/* Card Header */}
                  <header className="bg-gradient-to-r from-blue-600/80 to-emerald-600/80 p-4 md:p-6 flex items-center justify-between">
                    <h4 className="text-xl md:text-2xl font-semibold text-white m-0">
                      {card.title}
                    </h4>
                    <label 
                      htmlFor={cards[(cardIndex + 1) % cards.length].id}
                      className="text-white text-2xl md:text-3xl cursor-pointer hover:rotate-90 transition-transform duration-300"
                    >
                      &#10539;
                    </label>
                  </header>

                  {/* Card Content */}
                  <div className="p-4 md:p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 items-start">
                      {/* Image */}
                      <div className="relative">
                        <img
                          src={card.image}
                          alt={card.alt}
                          className="w-full h-32 md:h-48 object-cover rounded-lg"
                        />
                      </div>

                      {/* Content */}
                      <div className="space-y-3 md:space-y-4">
                        {card.content.map((paragraph, pIndex) => (
                          <p
                            key={pIndex}
                            className="text-slate-300 leading-relaxed text-sm md:text-base"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {cards.map((card, index) => (
            <button
              key={card.id}
              onClick={() => setSelectedCard(card.id)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                selectedCard === card.id
                  ? "bg-gradient-to-r from-blue-400 to-emerald-400 scale-125"
                  : "bg-slate-600 hover:bg-slate-500"
              }`}
              aria-label={`Go to ${card.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
