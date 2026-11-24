import { writeFileSync, mkdirSync } from "node:fs";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "Out of office. Unwatered since March, my leaves are on strike and my roots filed for sunlight. Back when I'm remembered.", "utf8");
