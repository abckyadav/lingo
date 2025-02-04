import db from "@/db/drizzle";
import { lessons } from "@/db/schema";
import { getIsAdmin } from "@/lib/admin";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: { lessonId: number } },
) => {
  const isAdmin = await getIsAdmin();

  if (!isAdmin) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const data = await db.query.lessons.findFirst({
      where: eq(lessons.id, params.lessonId),
    });

    return NextResponse.json(data);
  } catch (error: unknown) {
    return new NextResponse(JSON.stringify(error), {
      status: 400,
    });
  }
};

export const PUT = async (
  req: Request,
  { params }: { params: { lessonId: number } },
) => {
  const isAdmin = await getIsAdmin();

  if (!isAdmin) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const body = await req.json();

  try {
    const data = await db
      .update(lessons)
      .set({
        ...body,
      })
      .where(eq(lessons.id, params.lessonId))
      .returning();

    return NextResponse.json(data[0]);
  } catch (error: unknown) {
    return new NextResponse(JSON.stringify(error), {
      status: 400,
    });
  }
};

export const DELETE = async (
  req: Request,
  { params }: { params: { lessonId: number } },
) => {
  const isAdmin = await getIsAdmin();

  if (!isAdmin) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const data = await db
      .delete(lessons)
      .where(eq(lessons.id, params.lessonId))
      .returning();

    return NextResponse.json(data[0]);
  } catch (error: unknown) {
    return new NextResponse(JSON.stringify(error), {
      status: 400,
    });
  }
};
