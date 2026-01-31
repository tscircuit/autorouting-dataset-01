import type {
  AutoroutingPipeline1_OriginalUnravel,
  AutoroutingPipelineSolver as AutoroutingPipelineSolver2_PortPointPathing,
} from "@tscircuit/capacity-autorouter"

export type SolverConstructor =
  | typeof AutoroutingPipelineSolver2_PortPointPathing
  | typeof AutoroutingPipeline1_OriginalUnravel
