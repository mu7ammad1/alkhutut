"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { useState } from "react";

const PetsWithPagination = ({ rows }: { rows: any[] }) => {
  const itemsPerPage = 5;

  // حالة لتخزين عدد السجلات التي سيتم عرضها
  const [visibleRows, setVisibleRows] = useState(rows.slice(0, itemsPerPage));

  // دالة لعرض المزيد من السجلات عند الضغط على زر "عرض المزيد"
  const showMore = () => {
    const nextRows = rows.slice(0, visibleRows.length + itemsPerPage);
    setVisibleRows(nextRows);
  };

  return (
    <div>
      {visibleRows.length > 0 ? (
        visibleRows.map((row:any, index) => (
          <div
            key={index}
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
                      <DialogTitle>{row.owner}</DialogTitle>
                      <DialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers. This action cannot be undone. This will
                        permanently delete your account and remove your data
                        from our servers. This action cannot be undone. This
                        will permanently delete your account and remove your
                        data from our servers. This action cannot be undone.
                        This will permanently delete your account and remove
                        your data from our servers. This action cannot be
                        undone. This will permanently delete your account and
                        remove your data from our servers. This action cannot be
                        undone. This will permanently delete your account and
                        remove your data from our servers. This action cannot be
                        undone. This will permanently delete your account and
                        remove your data from our servers. This action cannot be
                        undone. This will permanently delete your account and
                        remove your data from our servers. This action cannot be
                        undone. This will permanently delete your account and
                        remove your data from our servers. This action cannot be
                        undone. This will permanently delete your account and
                        remove your data from our servers. This action cannot be
                        undone. This will permanently delete your account and
                        remove your data from our servers. This action cannot be
                        undone. This will permanently delete your account and
                        remove your data from our servers. This action cannot be
                        undone. This will permanently delete your account and
                        remove your data from our servers. This action cannot be
                        undone. This will permanently delete your account and
                        remove your data from our servers. This action cannot be
                        undone. This will permanently delete your account and
                        remove your data from our servers. This action cannot be
                        undone. This will permanently delete your account and
                        remove your data from our servers. This action cannot be
                        undone. This will permanently delete your account and
                        remove your data from our servers. This action cannot be
                        undone. This will permanently delete your account and
                        remove your data from our servers. This action cannot be
                        undone. This will permanently delete your account and
                        remove your data from our servers. This action cannot be
                        undone. This will permanently delete your account and
                        remove your data from our servers. This action cannot be
                        undone. This will permanently delete your account and
                        remove your data from our servers. This action cannot be
                        undone. This will permanently delete your account and
                        remove your data from our servers.
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
              <span className="text-base">{row.name}</span>
            </div>
          </div>
        ))
      ) : (
        <p>لا توجد حيوانات أليفة في النظام.</p>
      )}

      {/* عرض زر "عرض المزيد" إذا كان هناك المزيد من السجلات */}
      {visibleRows.length < rows.length && (
        <button onClick={showMore}>عرض المزيد</button>
      )}
    </div>
  );
};

export default PetsWithPagination;
