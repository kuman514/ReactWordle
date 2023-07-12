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

export enum GameResult {
  PLAYING = 'playing',
  COMPLETE = 'complete',
  FAILED = 'failed',
}

export enum SpecialInputType {
  SUBMIT = 'submit',
  ERASE = 'erase',
}

export interface AppState {
  wordList?: string[];
  wordContainer?: Record<string, true>;
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
  recentAlertDate: Date;
  showResult: boolean;
}

export interface AppAction {
  loadWordList(wordList: string[]): void;
  input(letter: Alphabet): void;
  erase(): void;
  submit(): void;
  openResult(): void;
  closeResult(): void;
  randomReset(): void;
  selectReset(wordId: number): void;
}

export interface AxiosGetWordleWordListResponse {
  data: string[];
}
