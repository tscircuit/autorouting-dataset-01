import {
  AutoroutingPipeline1_OriginalUnravel,
  AutoroutingPipelineSolver as AutoroutingPipelineSolver2_PortPointPathing,
} from "@tscircuit/capacity-autorouter"
import type { SolverConstructor } from "types/run-benchmark/SolverConstructor"

export const SOLVER_CONSTRUCTOR_LIST: SolverConstructor[] = [
  AutoroutingPipelineSolver2_PortPointPathing,
  AutoroutingPipeline1_OriginalUnravel,
]
