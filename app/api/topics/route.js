const { default: mongodb } = require("@/libs/mongodb");
const { NextResponse } = require("next/server");
import topic from "@/models/topic";

export async function POST(request){
    const {title, description} = await request.json();
    await topic.create({title,description});
    return NextResponse.json({message: "Topic Created "}, {status:201});
}

export async  function GET(){

}

// export async function GET(){

// }