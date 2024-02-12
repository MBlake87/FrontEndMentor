const highScore: number | boolean = 1;

const stuff: number[] | string[] = [];

type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

type SkiSchoolStudent = {
  name: string;
  age: number;
  sport: "ski" | "snowboard";
  level: SkillLevel;
};

type RGB = {
  r: number;
  g: number;
  b: number;
};

type HSL = {
  h: number;
  s: number;
  l: number;
};

let RGBHSL: (RGB | HSL)[] = [];

function greet(message: string | string[]) {
  if (typeof message === "string") {
    return `Hello ${message}`;
  }
  for (let messages of message) {
    return `Greetings ${message}`;
  }
}
