import { CHALLENGE_TYPE_ENUM } from "@/lib/utils";

export const CHALLENGES = [
  {
    id: 1,
    lessonId: 1,
    type: CHALLENGE_TYPE_ENUM.SELECT,
    order: 1,
    question: "Which one of these is the 'the man'?",
  },
  {
    id: 2,
    lessonId: 1,
    type: CHALLENGE_TYPE_ENUM.ASSIST,
    order: 2,
    question: "the man",
  },
  {
    id: 3,
    lessonId: 1,
    type: CHALLENGE_TYPE_ENUM.SELECT,
    order: 3,
    question: "Which one of these is the 'the robot'?",
  },
  {
    id: 4,
    lessonId: 2,
    type: CHALLENGE_TYPE_ENUM.SELECT,
    order: 4,
    question: "Which one of these is the 'the woman'?",
  },
  {
    id: 5,
    lessonId: 2,
    type: CHALLENGE_TYPE_ENUM.SELECT,
    order: 5,
    question: "Which one of these is the 'the woman'?",
  },
  {
    id: 6,
    lessonId: 2,
    type: CHALLENGE_TYPE_ENUM.SELECT,
    order: 6,
    question: "Which one of these is the 'the woman'?",
  },
];
