import { getFoodMenuProducts } from "@/app/data-access/foodMenuProduct";
import { NextResponse } from "next/server";

export async function GET() {
    console.log('📡 API ROUTE - /central/cardapio/visualizacao/api');
    
    try {
        const foodMenuProducts = (await getFoodMenuProducts()).filter((product) => product.visible);
        return NextResponse.json(foodMenuProducts);
    } catch (err) {
        console.error("GET error", err);
        return NextResponse.json({ error: "Internal" }, { status: 500 });
    }
}