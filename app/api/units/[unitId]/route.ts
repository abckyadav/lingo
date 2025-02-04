import db from "@/db/drizzle";
import { units } from "@/db/schema";
import { getIsAdmin } from "@/lib/admin";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: { unitId: number } },
) => {
  const isAdmin = await getIsAdmin();

  if (!isAdmin) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const data = await db.query.units.findFirst({
      where: eq(units.id, params.unitId),
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
  { params }: { params: { unitId: number } },
) => {
  const isAdmin = await getIsAdmin();

  if (!isAdmin) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const body = await req.json();

  try {
    const data = await db
      .update(units)
      .set({
        ...body,
      })
      .where(eq(units.id, params.unitId))
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
  { params }: { params: { unitId: number } },
) => {
  const isAdmin = await getIsAdmin();

  if (!isAdmin) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const data = await db
      .delete(units)
      .where(eq(units.id, params.unitId))
      .returning();

    return NextResponse.json(data[0]);
  } catch (error: unknown) {
    return new NextResponse(JSON.stringify(error), {
      status: 400,
    });
  }
};
