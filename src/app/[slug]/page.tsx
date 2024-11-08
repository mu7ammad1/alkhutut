import { Button } from "@/components/ui/button";
import { Download, Lamp } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import Link from "next/link";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: (await params).slug,
    openGraph: {
      images: ["/some-specific-page-image.jpg", ...previousImages],
    },
  };
}
export default async function Page({ params, searchParams }: Props) {
  const slug = (await searchParams).slug;

  return (
    <main className="flex flex-col gap-5">
      <div
        className="w-full flex justify-center items-center sticky top-0 z-50 p-5"
        id="section1"
      >
        <div className="flex gap-3 bg-white dark:bg-black w-auto p-3 rounded-full">
          <Link href={`#section3`}>
            <Button variant={"outline"} size={"lg"} className="rounded-full">
              <Lamp /> <span>تجارب</span>
            </Button>
          </Link>
          <Link href={`#section4`}>
            <Button variant={"outline"} size={"lg"} className="rounded-full">
              <Lamp /> <span>تجارب</span>
            </Button>
          </Link>
          <Link href={`#section5`}>
            <Button variant={"outline"} size={"lg"} className="rounded-full">
              <Lamp /> <span>تجارب</span>
            </Button>
          </Link>
        </div>
      </div>
      <div className="w-full pt-5 rounded-xl">
        <h1 className={`text-center font-medium text-9xl`}>زُحَل</h1>
        <p className={`text-center font-medium text-3xl pt-10`}>
          خط عربي متغير مستوحى من خط النسخ
        </p>
      </div>

      <div className="pt-28 " id="section3">
        <div className="w-full p-6 bg-popover dark:bg-opacity-50 rounded-3xl">
          <div className="w-full grid grid-cols-5 gap-5 justify-between items-center text-sm">
            <div className="w-full">
              <Switch />
            </div>
            <div className="w-full flex flex-col gap-4 col-span-2">
              <b>font Size</b>
              <Slider defaultValue={[33]} max={100} step={1} />
            </div>
            <div className="w-full flex flex-col gap-4 col-span-2">
              <b>font wight</b>
              <Slider defaultValue={[33]} max={100} step={1} />
            </div>
          </div>
          <div
            className="w-full h-96 line-clamp-1 flex justify-center items-center pt-10 resize-none outline-none focus-visible:ring-black/0 focus-visible:ring-0"
            style={{
              fontSize: `100px`,
            }}
            lang="ar"
            contentEditable={true}
          >
            asfasfjoiui
          </div>
        </div>
      </div>

      <div className="w-full h-24" id="section4"></div>

      <div className="flex flex-col gap-5">
        <div className="w-full bg-green-400 rounded-3xl p-5">
          <div className="w-full flex justify-between items-center">
            <span>Weight 200 - Extralight</span>
            <span>الوزن ٢٠٠ - رفيع</span>
          </div>
          <h1 className="font-extralight text-center text-8xl my-10">
            يحتاجُ العالَمُ إِلى خُطوطٍ مُتَنَوِّعة
          </h1>
          <div className={`flex justify-between items-center z-0`}>
            <Button
              variant={"secondary"}
              size={"default"}
              className="rounded-2xl"
            >
              <Download /> <span className="max-sm:hidden">Download</span>
            </Button>
          </div>
        </div>
        <div className="w-full bg-blue-400 rounded-3xl p-5">
          <div className="w-full flex justify-between items-center">
            <span>Weight 200 - Extralight</span>
            <span>الوزن ٢٠٠ - رفيع</span>
          </div>
          <h1 className="font-extralight text-center text-8xl my-10">
            يحتاجُ العالَمُ إِلى خُطوطٍ مُتَنَوِّعة
          </h1>
          <div className={`flex justify-between items-center z-0`}>
            <Button
              variant={"secondary"}
              size={"default"}
              className="rounded-2xl"
            >
              <Download /> <span className="max-sm:hidden">Download</span>
            </Button>
          </div>
        </div>
        <div className="w-full bg-teal-400 rounded-3xl p-5">
          <div className="w-full flex justify-between items-center">
            <span>Weight 200 - Extralight</span>
            <span>الوزن ٢٠٠ - رفيع</span>
          </div>
          <h1 className="font-extralight text-center text-8xl my-10">
            يحتاجُ العالَمُ إِلى خُطوطٍ مُتَنَوِّعة
          </h1>
          <div className={`flex justify-between items-center z-0`}>
            <Button
              variant={"secondary"}
              size={"default"}
              className="rounded-2xl"
            >
              <Download /> <span className="max-sm:hidden">Download</span>
            </Button>
          </div>
        </div>
        <div className="w-full bg-violet-400 rounded-3xl p-5">
          <div className="w-full flex justify-between items-center">
            <span>Weight 200 - Extralight</span>
            <span>الوزن ٢٠٠ - رفيع</span>
          </div>
          <h1 className="font-extralight text-center text-8xl my-10">
            يحتاجُ العالَمُ إِلى خُطوطٍ مُتَنَوِّعة
          </h1>
          <div className={`flex justify-between items-center z-0`}>
            <Button
              variant={"secondary"}
              size={"default"}
              className="rounded-2xl"
            >
              <Download /> <span className="max-sm:hidden">Download</span>
            </Button>
          </div>
        </div>
        <div className="w-full bg-stone-400 rounded-3xl p-5">
          <div className="w-full flex justify-between items-center">
            <span>Weight 200 - Extralight</span>
            <span>الوزن ٢٠٠ - رفيع</span>
          </div>
          <h1 className="font-extralight text-center text-8xl my-10">
            يحتاجُ العالَمُ إِلى خُطوطٍ مُتَنَوِّعة
          </h1>
          <div className={`flex justify-between items-center z-0`}>
            <Button
              variant={"secondary"}
              size={"default"}
              className="rounded-2xl"
            >
              <Download /> <span className="max-sm:hidden">Download</span>
            </Button>
          </div>
        </div>
        <div className="w-full bg-emerald-400 rounded-3xl p-5">
          <div className="w-full flex justify-between items-center">
            <span>Weight 200 - Extralight</span>
            <span>الوزن ٢٠٠ - رفيع</span>
          </div>
          <h1 className="font-extralight text-center text-8xl my-10">
            يحتاجُ العالَمُ إِلى خُطوطٍ مُتَنَوِّعة
          </h1>
          <div className={`flex justify-between items-center z-0`}>
            <Button
              variant={"secondary"}
              size={"default"}
              className="rounded-2xl"
            >
              <Download /> <span className="max-sm:hidden">Download</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full h-24" id="section5"></div>

      <div className={``}>
        <div></div>
        <div className={`bg-[#ffffff] dark:bg-[#404040] rounded-3xl p-5`}>
          <h2 className="text-4xl font-medium text-right p-5">
            الحروف العربية
          </h2>
          <div
            className={`grid grid-cols-12 items-center justify-center gap-5`}
          >
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
          </div>
          <h2 className="text-4xl font-medium text-right p-5">
            الحروف العربية المركبة
          </h2>
          <div className={`grid grid-cols-9 items-center justify-center gap-5`}>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
          </div>
          <h2 className="text-4xl font-medium text-right p-5">
            الحروف اللاتينية
          </h2>
          <div className={`grid grid-cols-9 items-center justify-center gap-5`}>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
          </div>
          <h2 className="text-4xl font-medium text-right p-5">
            الأرقام والرموز والعلامات
          </h2>
          <div className={`grid grid-cols-9 items-center justify-center gap-5`}>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              ء
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
