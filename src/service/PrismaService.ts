import { INestApplication, Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on("beforeExit", async () => {
      await app.close();
    });
  }

  page<Type>(prisma, model, page: number, size: number) {
    return prisma
      .$transaction([
        model.count(),
        model.findMany({
          take: size,
          skip: page * size,
        }),
      ])
      .then((res) => {
        return {
          totalElements: res[0],
          totalPages: Math.round(res[0] / size),
          content: res[1],
        };
      })
      .catch((err) => console.error(err));
  }
}
