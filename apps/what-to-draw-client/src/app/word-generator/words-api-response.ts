export interface Definition {
  definition: string;
  partOfSpeech: string;
}

export interface WordsApiResponse {
  word: string;
  definitions: Definition[];
}
