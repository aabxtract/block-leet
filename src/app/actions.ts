'use server';

import { generateTestCases } from '@/ai/flows/generate-test-cases';
import type { GenerateTestCasesOutput } from '@/ai/flows/generate-test-cases';

export async function handleGenerateTestCases(input: { code: string; prompt: string }): Promise<GenerateTestCasesOutput | { error: string }> {
  try {
    // Basic validation
    if (!input.code || !input.prompt) {
      return { error: 'Code and prompt are required to generate test cases.' };
    }

    const result = await generateTestCases(input);
    return result;
  } catch (e) {
    console.error('Error generating test cases:', e);
    // Return a user-friendly error message
    return { error: 'An unexpected error occurred while generating test cases. Please try again.' };
  }
}
