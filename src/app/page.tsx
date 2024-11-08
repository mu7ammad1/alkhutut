import { Button } from "@/components/ui/button";
import { Download, InfoIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

export default function Home() {

  const Colors = [
    `ffc8dd`,
    `ffafcc`,
    `d5bdaf`,
    `c6ac8f`,
    `ccd5ae`,
    `d4a373`,
    `ff99c8`,
    `fcf6bd`,
    `d0f4de`,
    `a9def9`,
    `e4c1f9`,
    `70d6ff`,
    `ff70a6`,
    `ff9770`,
    `ffd670`,
    `e9ff70`,
    `84dcc6`,
    `a5ffd6`,
    `ffa69e`,
    `ff686b`,
    `ee6055`,
    `60d394`,
    `aaf683`,
    `ffd97d`,
    `ff9b85`,
    `c3cfa0`,
    `fedb72`,
    `da9461`,
    `a873e8`,
    `5d7bd5`,
    `56d1dc`,
    `5eaff2`,
    `f877b1`,
    `ffe45e`,
    `f0a963`,
    `dd7f5a`,
    `95d387`,
    `caffbf`,
    `ffba66`,
    `90cf8e`,
    `89d2a3`,
  ]


  const Card = (
    <div
      className={`w-full relative flex flex-col gap-5 bg-primary-foreground border-none rounded-xl p-7 text-right text-nowrap`}
    >
      <Link
        href={`/18541354`}
        className={`absolute top-0 bottom-0 left-0 right-0 w-full h-full rounded-3xl -z-0`}
      ></Link>
      <Link href={`/18541354`} className={`text-7xl py-4 w-full z-0`}>
        أبجد هوز حطي
      </Link>
      <Separator className={`bg-secondary-foreground/20 z-0`} />
      <div className={`flex justify-between items-center z-0`}>
        <div className={`flex gap-2`}>
          <Dialog>
            <DialogTrigger className="bg-secondary rounded-full p-2.5">
              <InfoIcon size={20} />
            </DialogTrigger>
            <DialogContent className="border-none">
              <DialogHeader>
                <DialogTitle>Iam Saudi Bold</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers. This
                  action cannot be undone. This will permanently delete your
                  account and remove your data from our servers. This action
                  cannot be undone. This will permanently delete your account
                  and remove your data from our servers. This action cannot be
                  undone. This will permanently delete your account and remove
                  your data from our servers. This action cannot be undone. This
                  will permanently delete your account and remove your data from
                  our servers. This action cannot be undone. This will
                  permanently delete your account and remove your data from our
                  servers. This action cannot be undone. This will permanently
                  delete your account and remove your data from our servers.
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers. This
                  action cannot be undone. This will permanently delete your
                  account and remove your data from our servers. This action
                  cannot be undone. This will permanently delete your account
                  and remove your data from our servers. This action cannot be
                  undone. This will permanently delete your account and remove
                  your data from our servers. This action cannot be undone. This
                  will permanently delete your account and remove your data from
                  our servers. This action cannot be undone. This will
                  permanently delete your account and remove your data from our
                  servers. This action cannot be undone. This will permanently
                  delete your account and remove your data from our servers.
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers. This
                  action cannot be undone. This will permanently delete your
                  account and remove your data from our servers. This action
                  cannot be undone. This will permanently delete your account
                  and remove your data from our servers. This action cannot be
                  undone. This will permanently delete your account and remove
                  your data from our servers. This action cannot be undone. This
                  will permanently delete your account and remove your data from
                  our servers. This action cannot be undone. This will
                  permanently delete your account and remove your data from our
                  servers. This action cannot be undone. This will permanently
                  delete your account and remove your data from our servers.
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <Button
            variant={"secondary"}
            size={"default"}
            className="rounded-2xl"
          >
            <Download /> <span className="max-sm:hidden">Download</span>
          </Button>
        </div>
        <span className="text-base">Iam Saudi Bold</span>
      </div>
    </div>
  );
  return (
    <main className={`flex flex-col gap-3`}>
      <div className={`w-full h-28`}></div>
      {Card}
      {Card}
      {Card}
      {Card}
      {Card}
      {Card}
      {Card}
      {Card}
      {Card}
      {Card}
      {Card}
    </main>
  );
}
