/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Prompt {
  id: string;
  role: string;
  type: string;
  content: {
    ko: string;
    en: string;
  };
  tags: string[];
}

export interface Category {
  id: string;
  title: {
    ko: string;
    en: string;
  };
  icon: string;
  prompts: Prompt[];
}

export type Language = 'ko' | 'en';
