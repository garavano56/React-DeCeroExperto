
export interface ScrambleWordsState {
    currentWord: string;
    errorCounter: number;
    guess: string;
    isGameOver: boolean;
    maxAllowErrors: number;
    maxSkips: number;
    points: number;
    scrambledWord: string;
    skipCounter: number;
    words: string[];
    totalWords: number;
}

export type ScrambleWordsAction = 
  | { type: 'SET_GUESS', payload: string }
  | { type: 'CHECK_ANSWER' }
  | { type: 'SKIP_WORD' }
  | { type: 'START_NEW_GAME', payload: ScrambleWordsState };

const GAME_WORDS = [
  'REACT',
  'JAVASCRIPT',
  'TYPESCRIPT',
  'HTML',
  'ANGULAR',
  'SOLID',
  'NODE',
  'VUEJS',
  'SVELTE',
  'EXPRESS',
  'MONGODB',
  'POSTGRES',
  'DOCKER',
  'KUBERNETES',
  'WEBPACK',
  'VITE',
  'TAILWIND',
];

// Esta función mezcla el arreglo para que siempre sea aleatorio
const shuffleArray = (array: string[]) => {
  return array.sort(() => Math.random() - 0.5);
};

// Esta función mezcla las letras de la palabra
const scrambleWord = (word: string = '') => {
  return word
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');
};

export const getInitialState = (): ScrambleWordsState => {

    const shuffledWords = shuffleArray([...GAME_WORDS]);    // Se mezcla el arreglo

    return {
        currentWord: shuffledWords[0],   // Primera palabra del arreglo.
        errorCounter: 0,
        guess: '',
        isGameOver: false,
        maxAllowErrors: 3,
        maxSkips: 3,
        points: 0,
        scrambledWord: scrambleWord( shuffledWords[0] ),
        skipCounter: 0,
        words: shuffledWords,   // Arreglo de palabras mezcladas
        totalWords: shuffledWords.length
    }
}

export const scrambledWordsReducer = (state: ScrambleWordsState, action: ScrambleWordsAction): ScrambleWordsState => {

  switch(action.type) {
    case 'SET_GUESS':
      return {
        ...state,
        guess: action.payload.trim().toUpperCase()
      }

    case 'CHECK_ANSWER': {
      if (state.guess === state.currentWord) {   // Lo que la persona escribe es igual a la palabra a adivinar
        const newWords = state.words.slice(1);

        return {
          ...state,
          words: newWords,
          points: state.points + 1,
          guess: '',
          currentWord: newWords[0],  // Palabra nueva a adivinar
          scrambledWord: scrambleWord(newWords[0])
        }
      }  
    }
      
    return {
      ...state,
      guess: '',
      errorCounter: state.errorCounter + 1,
      isGameOver: state.errorCounter + 1 >= state.maxAllowErrors
    }
    
    case 'SKIP_WORD': {

      if (state.skipCounter >= state.maxSkips ) return state; 

      const updatedWords = state.words.slice(1);    // Recorto la palabra para pasar a la siguiente

      return {
        ...state,
        skipCounter: state.skipCounter + 1,             // Contador de veces que se pueden Saltar
        words: updatedWords,                            // Arreglo nuevo de la palabras que quedan
        currentWord: updatedWords[0],                   // palabra a adivinar con la 1° posición del arreglo nuevo
        scrambledWord: scrambleWord(updatedWords[0]),    // Reordeno las letras de la palabra para adivinar
        guess: ''
      }

    // setGuess('');

    }
    
    case 'START_NEW_GAME': {
      return action.payload;
    }

    default: 
      return state;
  }

}