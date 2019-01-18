export interface WordsApiQueryResult {
  definition: string;
  partOfSpeech: string;
  synonyms: string[];
  typeOf: string[];
  hasParts: string[];
}

export interface WordsApiResponse {
  word: string;
  results: WordsApiQueryResult[];
}
