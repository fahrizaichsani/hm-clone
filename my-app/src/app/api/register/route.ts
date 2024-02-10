import { UserModel } from "@/db/models/User";

export async function POST(request: Request) {
  const body = await request.json();
  const user = await UserModel.register(body);
  return Response.json(user);
}
