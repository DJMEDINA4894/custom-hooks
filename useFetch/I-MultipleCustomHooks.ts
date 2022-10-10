

export interface I_BreakingBad {
  quote_id: number,
  quote: string,
  author: string,
  series: string
}

export interface I_ObjCustomHook {
  data: I_BreakingBad[],
  isLoading: boolean,
  hasError: boolean|null
}
