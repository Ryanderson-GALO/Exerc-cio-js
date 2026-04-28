// ========================================
// Aula 08 — Imports
// ========================================
// Importe as funções dos módulos que você criou e re-exporte para os testes.
// Rode os testes com: npx vitest run exercicios/aula08
// Não mexa no arquivo index.test.js.

// 1. Importe as funções nomeadas de './utils/matematica.js'
//Funções: somar, subtrair, multiplicar, dividir
import { somar, subtrair, multiplicar, dividir } from './utils/matematica.js';
// 2. Importe a função default de './utils/texto.js'
import formatarNome from './utils/texto.js'
//3. Re-exporte tudo para os testes conseguirem acessar
export { somar, subtrair, multiplicar, dividir, formatarNome }
export { somar, subtrair, multiplicar, dividir, formatarNome }
