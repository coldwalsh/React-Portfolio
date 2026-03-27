const experiences = [
    {
        period: "Summers 2024 – 2025",
        title: "Wilderness Expedition Leader & Youth Mentor",
        company: "Moondance Adventures • Philmont Scout Ranch",
        description:
            "Led multi-week backcountry expeditions for teenagers across two consecutive summers — guiding Scout groups on 60–120 mile routes through the Sangre de Cristo Mountains at Philmont, then leading 12–14-year-olds along the Colorado Trail with Moondance Adventures. Managed all daily logistics in remote terrain: route planning, weather assessment, campsite selection, and Leave No Trace compliance.",
        tags: ["Leadership", "Risk Management", "Logistics", "Mentorship"],
        side: "left",
    },
    {
        period: "2024 – Present",
        title: "Founder",
        company: "Hoos Ultra Running Team • University of Virginia",
        description:
            "Founded and built UVA's ultramarathon running team from the ground up — establishing the club, recruiting members, and creating a community around long-distance trail running. Organized training runs, race logistics, and team events while balancing a full course load.",
        tags: ["Entrepreneurship", "Community Building", "Event Planning"],
        side: "right",
    },
    {
        period: "2023 – Present",
        title: "Trip Leader & Executive Board",
        company: "UVA Outdoors Club • UVA Climbing Club",
        description:
            "Lead multi-day wilderness trips for UVA Outdoors Club, handling planning, safety, and group management for participants of varying skill levels. Serve on the executive board of the Climbing Club, helping coordinate events, manage operations, and grow membership.",
        tags: ["Trip Planning", "Safety", "Team Leadership"],
        side: "left",
    },
];

export const Experience = () => {
    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-linear-to-b from-background via-surface/20 to-background pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="mb-16 animate-fade-in">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary mb-4">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        Leadership & Experience
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Beyond the{" "}
                        <em className="font-serif text-primary not-italic">classroom.</em>
                    </h2>
                    <p className="text-muted-foreground max-w-xl text-base leading-relaxed">
                        Leadership forged in the backcountry — managing groups in remote terrain
                        teaches a kind of ownership and adaptability no internship can replicate.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Center vertical line — hidden on mobile */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-linear-to-b from-transparent via-border to-transparent" />

                    <div className="space-y-8 md:space-y-16">
                        {experiences.map((exp, i) => (
                            <div key={i} className="relative flex items-start">
                                {/* Center dot — hidden on mobile */}
                                <div
                                    className="hidden md:block absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 z-10 mt-6 animate-pulse"
                                    style={{
                                        backgroundColor: "#CC7711",
                                        borderColor: "#CC7711",
                                        boxShadow: "0 0 10px #CC7711",
                                    }}
                                />

                                {/* Mobile: full-width single column */}
                                <div
                                    className="w-full md:hidden animate-fade-in"
                                    style={{ animationDelay: `${i * 200}ms` }}
                                >
                                    <ExperienceCard exp={exp} align="left" />
                                </div>

                                {/* Desktop: alternating two-column */}
                                {exp.side === "left" ? (
                                    <>
                                        <div
                                            className="hidden md:block w-[calc(50%-2rem)] mr-auto animate-fade-in-left"
                                            style={{ animationDelay: `${i * 200}ms` }}
                                        >
                                            <ExperienceCard exp={exp} align="right" />
                                        </div>
                                        <div className="hidden md:block w-[calc(50%-2rem)] ml-auto" />
                                    </>
                                ) : (
                                    <>
                                        <div className="hidden md:block w-[calc(50%-2rem)] mr-auto" />
                                        <div
                                            className="hidden md:block w-[calc(50%-2rem)] ml-auto animate-fade-in-right"
                                            style={{ animationDelay: `${i * 200}ms` }}
                                        >
                                            <ExperienceCard exp={exp} align="left" />
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const ExperienceCard = ({ exp, align }) => {
    const isRight = align === "right";

    return (
        <div
            className="glass rounded-xl p-6 hover:glass-strong transition-all duration-300 group"
            style={{
                borderColor: "rgba(32,178,166,0.15)",
            }}
        >
            {/* Date */}
            <p
                className={`text-sm font-medium mb-2 ${isRight ? "text-right" : "text-left"}`}
                style={{ color: "#CC7711" }}
            >
                {exp.period}
            </p>

            {/* Title & Company */}
            <h3
                className={`text-xl font-bold text-foreground mb-1 ${
                    isRight ? "text-right" : "text-left"
                }`}
            >
                {exp.title}
            </h3>
            <p
                className={`text-sm text-muted-foreground mb-3 ${
                    isRight ? "text-right" : "text-left"
                }`}
            >
                {exp.company}
            </p>

            {/* Description */}
            <p
                className={`text-sm text-foreground/70 leading-relaxed mb-4 ${
                    isRight ? "text-right" : "text-left"
                }`}
            >
                {exp.description}
            </p>

            {/* Tags */}
            <div
                className={`flex flex-wrap gap-2 ${
                    isRight ? "justify-end" : "justify-start"
                }`}
            >
                {exp.tags.map((tag) => (
                    <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium glass"
                        style={{
                            color: "#CC7711",
                            border: "1px solid rgba(32,178,166,0.25)",
                        }}
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};
