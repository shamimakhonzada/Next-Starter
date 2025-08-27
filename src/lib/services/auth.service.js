import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { prisma } from "../prisma.js";

export async function register({ name, email, password }) {
  // check if user exists
  const existing = await prisma.users.findUnique({ where: { email } });
  if (existing) throw new Error("User already exists");

  // hash password
  const hashed = await bcrypt.hash(password, 10);

  const user = await prisma.users.create({
    data: { name, email, password: hashed, role: "USER" },
  });

  // generate token
  const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });
  return { user, token };
}

export async function login({ email, password }) {
  const user = await prisma.users.findUnique({ where: { email } });
  if (!user) throw new Error("User not found");

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new Error("Invalid credentials");

  const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });
  return { user, token };
}
