import dbConnect from "@/lib/dbConnect";


export async function POST(req) {
  try {
    const body = await req.json();
    const collection = await dbConnect("products");
    const result = await collection.insertOne(body);

    return new Response(
      JSON.stringify({ success: true, id: result.insertedId }),
      { status: 200 }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500 }
    );
  }
}
