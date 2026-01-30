import { 
    AutoroutingPipeline1_OriginalUnravel, 
    AutoroutingPipelineSolver as AutoroutingPipelineSolver2_PortPointPathing, 
} from "@tscircuit/capacity-autorouter";


const SOLVERS = [
    AutoroutingPipelineSolver2_PortPointPathing,
    AutoroutingPipeline1_OriginalUnravel,
]

const detectUnfixableRoutingIssues = () => {
    /**
     * TODO: 
     * - some of the trace generated are impossible to fixed like they are on same layer crossing other trace of different net.
     * - some trace could enter the wrong obstacle pad area, it still connections but this is just wrong 
     */
    // Relaxed DRC Passed  = detectUnfixableRoutingIssues
}

const failureOutput = (solver: AutoroutingPipelineSolver2_PortPointPathing) => {
    /**
     * TODO: this will take the solver and create each pipeline stage svg output
     * failing in detectUnfixableRoutingIssues is also a failure as is solver.failed
     */
}


const outputTabled = () => {
    /**
     * TODO: impliment a table that will look like this
     * +----------------+----------------+----------------+------------------------------+
     * |   Solver         | Total Time (ms)      | Success Rate   | % Relaxed DRC Passed |
     * +----------------+----------------+----------------+------------------------------+
     * |   AutoroutingPipelineSolver2_PortPointPathing       | 120            | 100%           |          20%               |
     * |   AutoroutingPipeline1_OriginalUnravel              | 150            | 90%            |          30%               |
     * |   Solver A       | 200            | 80%            |          40%               |
     * |   Solver B       | 180            | 85%            |          10%               |
     * +----------------+----------------+----------------+-----------------------------+
     */
}


/**
 * Run benchmark script
 * This benchmarks the autorouter against
 * some predefined scenarios and outputs the results.
 */
const main = async () => {
    // read all the simple route json in lib/dataset

    // for each .srj.json files in the folder
    // loop through each solver in SOLVERS
    // run the solver on the scenario
    // run impossibleTraceDetection
    // make outputTabled
    // output the results to console and create a .txt files
}