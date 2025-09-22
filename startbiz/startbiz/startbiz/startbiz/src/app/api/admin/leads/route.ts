import { NextRequest, NextResponse } from "next/server";
import { Lead } from "@/lib/models/Lead";
import { connectToDatabase } from "@/lib/db";

export async function GET(request: NextRequest) {
  try {
    await connectToDatabase();

    // Récupération de tous les leads, triés par date de création (plus récents en premier)
    const leads = await Lead.find({})
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json(leads);
  } catch (error) {
    console.error("Erreur lors de la récupération des leads:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des leads" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    await connectToDatabase();

    const { id, status, notes } = await request.json();

    const lead = await Lead.findByIdAndUpdate(
      id,
      { 
        status,
        ...(notes && { $push: { notes } })
      },
      { new: true }
    );

    if (!lead) {
      return NextResponse.json(
        { error: "Lead non trouvé" },
        { status: 404 }
      );
    }

    return NextResponse.json(lead);
  } catch (error) {
    console.error("Erreur lors de la mise à jour du lead:", error);
    return NextResponse.json(
      { error: "Erreur lors de la mise à jour du lead" },
      { status: 500 }
    );
  }
}


