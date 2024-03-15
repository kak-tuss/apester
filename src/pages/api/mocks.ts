import { Question } from "@/interfaces";

export const questionsMock: Question[] = [
    {
        id: "somehash",
        question : "Which country won the mondial of 2022?",
        answers : [
            {
                answer: "Argentina",
                isTrue: true
            }, {
                answer: "France",
                isTrue: false
            }, {
                answer: "Croatia",
                isTrue: false
            }, {
                answer: "Brazil",
                isTrue: false   
            }
        ]
    }
];
