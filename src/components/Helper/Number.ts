// hooks/useMinimalRegexFormat.ts

import { useMemo } from 'react';

/**
 * The most minimal hook using Regex to format numbers with commas.
 */
export const useMinimalRegexFormat = (
  num: number | string | undefined | null
): string => {
  
  return useMemo(() => {
    const numberValue = typeof num === 'string' ? parseFloat(num) : num;

    if (num === undefined || num === null || isNaN(Number(numberValue))) {
      return '';
    }

    // محاسبه در یک خط با استفاده از replace و Regex
    return Math.floor(Number(numberValue)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }, [num]);
};
