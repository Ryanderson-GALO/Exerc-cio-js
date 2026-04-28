// ========================================
// Aula 08 — Imports
// ========================================
// Importe as funções dos módulos que você criou e re-exporte para os testes.
// Rode os testes com: npx vitest run exercicios/aula08
// Não mexa no arquivo index.test.js.

// 1. Importando named exports
import { somar, subtrair, multiplicar, dividir } from './utils/matematica.js';
export { somar, subtrair, multiplicar, dividir, formatarNome }
