import { Heart, Users, Lightbulb, BookOpen, Feather, Star } from "lucide-react"

export function WhatWeValue() {
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Creativity",
      description: "We celebrate innovative expression and original thinking in all its forms.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Inclusivity",
      description: "Every voice matters, and we welcome diverse perspectives and experiences.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Reflection",
      description: "We value thoughtful contemplation and the power of introspective writing.",
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Excellence",
      description: "We maintain high standards while nurturing emerging talent and established voices.",
    },
    {
      icon: <Feather className="h-8 w-8" />,
      title: "Authenticity",
      description: "We champion genuine expression over trends and honest storytelling above all.",
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Community",
      description: "We foster connections between writers, readers, and literary enthusiasts worldwide.",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-secondary text-4xl md:text-5xl font-bold text-primary mb-6">What We Value</h2>
            <p className="text-primary/70 font-primary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              The principles that guide our editorial decisions and shape our literary community.
            </p>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-6"></div>
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group text-center p-8 rounded-3xl bg-gradient-to-br from-accent/5 to-primary/5 border border-primary/10 transition-all duration-300 hover:shadow-card hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6 transition-all duration-300 group-hover:bg-accent/20 group-hover:scale-110">
                  {value.icon}
                </div>

                {/* Title */}
                <h3 className="font-secondary text-xl font-bold text-primary mb-4">{value.title}</h3>

                {/* Description */}
                <p className="text-primary/70 font-primary leading-relaxed">{value.description}</p>

                {/* Decorative element */}
                <div className="w-8 h-1 bg-accent/30 mx-auto rounded-full mt-4 transition-all duration-300 group-hover:bg-accent/60 group-hover:w-12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
