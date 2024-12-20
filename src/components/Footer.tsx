import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <div className="w-full bg-secondary-foreground flex flex-col gap-10 justify-center items-center mt-16 p-5 rounded-xl">
      <div className="flex flex-row-reverse justify-between items-center w-full">
        <div className="flex *:text-primary-foreground *:text-base *:font-semibold">
          <Button variant={"link"}>من نحن؟</Button>
          <Button variant={"link"}>خصوصية المستخدم و حقوق الملكية</Button>
        </div>

        <div className="flex gap-5 *:text-primary-foreground">
          <Instagram size={32} />
          <Facebook size={32} />
          <Twitter size={32} />
        </div>
      </div>
    </div>
  );
}
