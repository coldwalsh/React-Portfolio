import {Button} from "@/components/Button";
import {ArrowRight, Download, Github, Linkedin, Twitter, ChevronDown} from 'lucide-react'
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
    "React", 
    "Tailwind CSS",
    "Java",
    "JavaScript",
    "C",
    "Python",
    "PostgreSQL",
    "AWS",
    "Git",  
]
export const Hero = () => {
    return (
        <section className="relative min-h-screen fle items-center overflow-hidden">
            {/* Bg */}
            <div className="absolute inset-0">
                <img src="/hero-bg2.png" alt="Hero Image" className="w-full h-full object-cover opacity-80"></img>
            </div>

            <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background"></div>

            {/* Orange Dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div 
                        className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={{
                            backgroundColor: "#CC7711",
                            left: `${Math.random() * 100}%`, 
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                            animationDelay: `${Math.random * 5}s`, 
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="container -auto px-6 pt-32 pb-20 realtive z-10">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Column - Text Content */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>
                                Software Engineer 
                                
                            </span>
                        </div>
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                                Software <span className="text-primary glow-text"> Engineer</span>
                                <br />
                                Outdoor Enthusiast
                                <br />
                                <span className="font-serif italic font-normal text-white">
                                    Creator.
                                </span>
                            </h1>
                            <p className="text-lg text-muted-foreground font-serif max-w-lg animate-fade-in animation-delay-200">
                                CS student at UVA building full-stack web apps, 
                                exploring distributed systems, 
                                and occasionally running 100 miles through the mountains.
                            </p>
                        </div>

                        {/* CTAs (Call to Actions) */}
                        <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                            <Button size="lg">
                                Contact Me <ArrowRight className="w-5 h-5" />
                            </Button>
                            <AnimatedBorderButton />
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            <span className="text-sm text-muted-foreground">Follow: </span>
                            {/* Put Link to Github account */}
                            {[
                                {icon: Github, href: "https://github.com/coldwalsh"},
                                {icon: Linkedin, href: "https://www.linkedin.com/in/colin-w-1694b1262/"},
                            ].map((social, idx) => (
                                <a 
                                    key={idx} 
                                    href={social.href} 
                                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                                >
                                    {<social.icon />}
                                </a>
                            ))}
                        </div>
                    </div>
                    {/* Right Column - Profile Image */}
                    <div className="realtive animate-fade-in animation-delay-300">
                        <div className="relative max-w-md mx-auto">
                            <div
                                className="absolute inset-0
                                rounded-3xl bg-linear-to-br
                                from-primary/30 via-transparent
                                to-primary/10 blur-2xl animate-pulse"
                            >
                            </div>
                            <div className="rlative glass rounded-3xl p-2 glow-border">
                                <img src="/hero.jpeg" alt="Colin Walsh" className="w-full aspect-4/5 object-cover rounded-2xl"/>

                                {/* Floating Badge */}
                                <div className="absolute -bottom-4 -right-4 bg-black rounded-xl px-4 py-3 animate-float">
                                    <div className="flex itmes-center gap-3">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                            <span className="text-sm font-medium">
                                                Please Hire Me
                                            </span>
                                    </div>
                                </div>

                                {/* Stats Badge */}
                                <div className="absolute -top-4 -left-4 bg-black rounded-xl px-4 py-3 animate-float animation-delay-500">
                                    <div className="text-2xl font-bold text-primary">0+</div>
                                    <div className="text-xs text-muted-foreground">
                                        Years Exp. 
                                    </div>
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>
                {/* Skills Section */}
                <div className="mt-20 animate-fade-in animation-delay-600">
                    <p className="text-sm text-muted-foreground mb-6 text-center">
                        Technologies I work with:
                    </p>
                    <div className="relative overflow-hidden">
                        <div className="flex animate-marquee">
                            {[...skills, ...skills].map((skill, idx) => (
                                <div key={idx} className="shrink-0 px-8 py-4">
                                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
                <a
                    href="about"
                    className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary"

                >
                    <span className="text-xs uppercase tracking-wider">Scroll</span>
                    <ChevronDown className="w-6 h-6 animate-bounce" />
                </a>
            </div>
        </section>
    );
};