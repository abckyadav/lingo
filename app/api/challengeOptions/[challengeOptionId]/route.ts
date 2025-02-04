import db from "@/db/drizzle";
import { challengeOptions } from "@/db/schema";
import { getIsAdmin } from "@/lib/admin";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: { challengeOptionId: number } },
) => {
  const isAdmin = await getIsAdmin();

  if (!isAdmin) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const data = await db.query.challengeOptions.findFirst({
      where: eq(challengeOptions.id, params.challengeOptionId),
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
  { params }: { params: { challengeOptionId: number } },
) => {
  const isAdmin = await getIsAdmin();

  if (!isAdmin) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const body = await req.json();

  try {
    const data = await db
      .update(challengeOptions)
      .set({
        ...body,
      })
      .where(eq(challengeOptions.id, params.challengeOptionId))
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
  { params }: { params: { challengeOptionId: number } },
) => {
  const isAdmin = await getIsAdmin();

  if (!isAdmin) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const data = await db
      .delete(challengeOptions)
      .where(eq(challengeOptions.id, params.challengeOptionId))
      .returning();

    return NextResponse.json(data[0]);
  } catch (error: unknown) {
    return new NextResponse(JSON.stringify(error), {
      status: 400,
    });
  }
};
