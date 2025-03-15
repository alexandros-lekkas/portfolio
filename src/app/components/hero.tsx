import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { BlurFade } from "@/components/magicui/blur-fade";

import { LinkedInProfile } from "@/types/proxycurl";

export function Hero({
  linkedInProfile,
}: {
  linkedInProfile: LinkedInProfile;
}) {
  return (
    <section id="hero">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="gap-2 flex justify-between items-center">
          <div className="flex-col flex flex-1 space-y-1.5">
            <BlurFadeText
              className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
              yOffset={8}
              text={`Hi, I'm ${linkedInProfile.first_name} 👋`}
            />
            <BlurFadeText
              className="max-w-[600px] md:text-xl"
              text={linkedInProfile.headline}
            />
          </div>
          <BlurFade inView>
            <Avatar className="size-36 border">
              <AvatarImage
                alt={linkedInProfile.full_name}
                src={"/images/me.jpg"}
              />
              <AvatarFallback>AL</AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
