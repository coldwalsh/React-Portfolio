import { Code2, Users, Lightbulb, Rocket } from "lucide-react";

const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description:
            "Writing maintainble, scalable code that stands the test of time."
    },
    {
        icon: Rocket,
        title: "Performance",
        description:
            "Optimizing for speed and delivering lightening-fast user experiences"
    },
    {
        icon: Users,
        title: "Collaboration",
        description:
            "Working closely with teams to bring ideas to life."
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description:
            "Staying ahead with the latest technologies and best practices"
    },
]

export const About = () => {
    return (
    <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid  gap-16 items-center">
                {/* Left Column */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="text-primary text-sm font-medium tracking-wider uppercase">About Me</span>
                    </div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-primary">
                    Building the future, 
                    <span className="font-serif italic font-normal text-white"> 
                    {" "}
                    one bruh at a time.</span>
                </h2>
                {/* About Me Paragraphs */}
                <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                    <p>My name is Colin </p>
                    <p>I made this website</p>
                    <p>Hope you think this is cool</p>
                </div>

                {/* Mission Statement */}
                <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300 mb-6 animate-pulse">
                    <p className="text-lg font-medium italic text-foreground">
                        "Life should not be a journey to the grave with the intention of arriving safely in a pretty and well preserved body, but rather to skid in broadside in a cloud of smoke, thoroughly used up, totally worn out, and loudly proclaiming "Wow! What a Ride! - Hunter S. Thompson"
                    </p>
                </div>
            </div>

            {/* Right Column - Highlights */}
            <div className="grid sm:grid-cols-2 gap-6">
                {highlights.map((item, idx) => (
                    <div 
                        key={idx} 
                        className="glass p-6 rounded-2xl animate-fade-in"
                        style={{animationDelay: `${(idx + 1) * 100}ms`}}
                    >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                           <item.icon className="w-6 h-6 text-primary" /> 
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">
                            {item.description}
                        </p>

                    </div>
                ))}
            </div>
        </div>
    </section>
    );
};