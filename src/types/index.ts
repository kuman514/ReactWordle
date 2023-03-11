export enum TryResult {
  UNTRIED = 'untried',
  CORRECT = 'correct',
  EXISTING = 'existing',
  NEVER = 'never',
}

export type Alphabet =
  'a' | 'b' | 'c' | 'd' | 'e' |
  'f' | 'g' | 'h' | 'i' | 'j' |
  'k' | 'l' | 'm' | 'n' | 'o' |
  'p' | 'q' | 'r' | 's' | 't' |
  'u' | 'v' | 'w' | 'x' | 'y' | 'z';

export interface AppState {
  questionNumber: number;
  answer: string;
  curTry: number;
  inputs: string[];
  letterResult: {
    [k in Alphabet]: TryResult;
  };
  submitResult: TryResult[][];
  correctLetters: number;
  alertMessage: string;
  showResult: boolean;
  alternativeAlert: boolean;
}

export interface AppAction {
  input(letter: Alphabet): void;
  erase(): void;
  submit(): void;
  openResult(): void;
  closeResult(): void;
  randomReset(): void;
  selectReset(wordId: number): void;
}
