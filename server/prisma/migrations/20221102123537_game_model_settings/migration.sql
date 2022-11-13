-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Game" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL,
    "firstTeamCountrySideCode" TEXT NOT NULL,
    "secondTeamCountrySideCode" TEXT NOT NULL
);
INSERT INTO "new_Game" ("date", "firstTeamCountrySideCode", "id", "secondTeamCountrySideCode") SELECT "date", "firstTeamCountrySideCode", "id", "secondTeamCountrySideCode" FROM "Game";
DROP TABLE "Game";
ALTER TABLE "new_Game" RENAME TO "Game";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
