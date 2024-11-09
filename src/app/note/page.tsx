import { sql } from "@vercel/postgres";
import PetsWithPagination from "./useVisit"; // استيراد الكومبوننت الجديد

export default async function Pets() {
  // استعلام لجلب جميع الحيوانات الأليفة من الجدول
  const { rows } = await sql`
    SELECT * FROM Pets
  `;

  return (
    <div>
      <h1>حيوانات أليفة</h1>
      {/* تمرير البيانات إلى كومبوننت PetsWithPagination */}
      <PetsWithPagination rows={rows} />
    </div>
  );
}
