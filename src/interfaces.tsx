export interface Answer {
    answer: string;
    isTrue: boolean;
}
export interface Question {
    id: string;
    question: string;
    answers: Answer[];
}