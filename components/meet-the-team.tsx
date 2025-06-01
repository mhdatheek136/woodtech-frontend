import Image from "next/image"

export function MeetTheTeam() {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Lead Developer",
      image: "/placeholder.svg?height=300&width=300&text=Alex+Chen",
      bio: "Full-stack developer specializing in modern web technologies and user experience design.",
    },
    {
      name: "Maya Patel",
      role: "UI/UX Designer",
      image: "/placeholder.svg?height=300&width=300&text=Maya+Patel",
      bio: "Creates intuitive digital experiences that bridge the gap between literature and technology.",
    },
    {
      name: "Jordan Kim",
      role: "DevOps Engineer",
      image: "/placeholder.svg?height=300&width=300&text=Jordan+Kim",
      bio: "Ensures our platform runs smoothly and securely, supporting our growing literary community.",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-secondary/30 via-white to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-secondary text-4xl md:text-5xl font-bold text-primary mb-6">Meet the Team</h2>
            <p className="text-primary/70 font-primary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              The technical minds who bring Burrowed's digital vision to life, creating seamless experiences for our
              literary community.
            </p>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-6"></div>
          </div>

          {/* Team grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-6 shadow-card border border-primary/5 transition-all duration-300 hover:shadow-soft hover:-translate-y-2"
              >
                {/* Photo */}
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-accent/10 to-primary/10">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="font-secondary text-xl font-bold text-primary mb-2">{member.name}</h3>
                  <p className="text-accent font-primary font-medium mb-3">{member.role}</p>
                  <p className="text-primary/70 font-primary text-sm leading-relaxed">{member.bio}</p>
                </div>

                {/* Decorative element */}
                <div className="w-12 h-1 bg-accent/30 mx-auto rounded-full mt-4 transition-all duration-300 group-hover:bg-accent/60"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
