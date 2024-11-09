/* eslint-disable @typescript-eslint/no-unused-vars */
import { sql } from "@vercel/postgres";
import PetsWithPagination from "./note/useVisit";

export default async function Home() {
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
  ];

  // استعلام لجلب جميع الحيوانات الأليفة من الجدول
  const { rows } = await sql`
 SELECT * FROM Pets
`;

  return (
    <main className={`flex flex-col gap-3`}>
      <div className={`w-full h-28`}></div>
      <PetsWithPagination rows={rows} />
    </main>
  );
}
