'use client';
/**
 * @description this function copy prop text to user clipboard
 */

export const copyToClipBoard = (text: string) => {
  navigator.clipboard.writeText(text);
};
