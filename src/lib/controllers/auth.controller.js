import { NextResponse } from "next/server";
import * as authService from "../services/auth.service.js";

export async function signupController(data) {
  try {
    const result = await authService.register(data);
    return NextResponse.json(result, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}

export async function signinController(data) {
  try {
    const result = await authService.login(data);
    return NextResponse.json(result, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 401 });
  }
}
