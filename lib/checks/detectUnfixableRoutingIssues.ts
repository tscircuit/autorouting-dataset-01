const detectUnfixableRoutingIssues = () => {
  /**
   * TODO:
   * - some of the trace generated are impossible to fixed like they are on same layer crossing other trace of different net.
   * - some trace could enter the wrong obstacle pad area, it still connections but this is just wrong
   */
  // Relaxed DRC Passed  = detectUnfixableRoutingIssues
  return false
}

export { detectUnfixableRoutingIssues }
