import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const client =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query", "info", "warn", "error"], // Логирование запросов
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = client;
