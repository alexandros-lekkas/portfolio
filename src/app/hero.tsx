import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { BlurFade } from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

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
              text={`Hi, I'm Alexandros} 👋`}
            />
            <BlurFadeText
              className="max-w-[600px] md:text-xl"
              delay={BLUR_FADE_DELAY}
              text={"she skibidi on my toilet until I"}
            />
          </div>
          <BlurFade delay={BLUR_FADE_DELAY} inView>
            <Avatar className="size-28 border">
              <AvatarImasge alt="Alexandros Lekkas" src={"/me.jpeg"} />
              <AvatarFallback>AL</AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
