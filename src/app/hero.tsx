import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { BlurFade } from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

const data = {
  name: "Alexandros",
  description: "Aspiring Software Engineer & Entrepreneur",
  avatar: "/me.jpeg",
};

export function Hero() {
  return (
    <section id="hero">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="gap-2 flex justify-between">
          <div className="flex-col flex flex-1 space-y-1.5">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
              yOffset={8}
              text={`Hi, I'm ${data.name} 👋`}
            />
            <BlurFadeText
              className="max-w-[600px] md:text-xl"
              delay={BLUR_FADE_DELAY}
              text={data.description}
            />
          </div>
          <BlurFade delay={BLUR_FADE_DELAY} inView>
            <Avatar className="size-28 border">
              <AvatarImage alt="Alexandros Lekkas" src={data.avatar} />
              <AvatarFallback>AL</AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
