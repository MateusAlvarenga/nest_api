-- CreateTable
CREATE TABLE "Usuarios" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Movies" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "director" TEXT NOT NULL,
    "plot" TEXT NOT NULL,
    "poster" TEXT NOT NULL,
    "imdb" TEXT NOT NULL,
    "tmdb" TEXT NOT NULL,
    "genre_id" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Movies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Actors" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "movie_id" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Actors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reviews" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "stars" INTEGER NOT NULL,
    "movie_id" INTEGER,
    "user_id" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Reviews_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_email_key" ON "Usuarios"("email");

-- CreateIndex
CREATE INDEX "Usuarios_email_name_idx" ON "Usuarios"("email", "name");

-- CreateIndex
CREATE INDEX "Movies_title_director_plot_poster_imdb_tmdb_idx" ON "Movies"("title", "director", "plot", "poster", "imdb", "tmdb");

-- CreateIndex
CREATE INDEX "Actors_name_idx" ON "Actors"("name");

-- CreateIndex
CREATE INDEX "Categories_name_idx" ON "Categories"("name");

-- CreateIndex
CREATE INDEX "Reviews_title_content_idx" ON "Reviews"("title", "content");

-- AddForeignKey
ALTER TABLE "Movies" ADD CONSTRAINT "Movies_genre_id_fkey" FOREIGN KEY ("genre_id") REFERENCES "Categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Actors" ADD CONSTRAINT "Actors_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "Movies"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "Movies"("id") ON DELETE SET NULL ON UPDATE CASCADE;
