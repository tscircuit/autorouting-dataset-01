/**
 * Generates the summary table section with benchmark results.
 */
export const generateSummaryTable = (summary_json: {
  tableHeaderList: string[]
  tableRowList: string[][]
}) => {
  const header_html = summary_json.tableHeaderList
    .map(
      (header) =>
        `<th class="px-4 py-3 text-left text-blue-700 font-semibold">${header}</th>`,
    )
    .join("")

  const rows_html = summary_json.tableRowList
    .map(
      (row) => `
      <tr class="hover:bg-gray-50 transition-colors">
          ${row.map((cell) => `<td class="px-4 py-3">${cell}</td>`).join("")}
      </tr>
    `,
    )
    .join("")

  return `<section class="mb-8">
    <h2 class="text-2xl font-semibold text-blue-700 mb-4">Summary Table</h2>
    <benchmark-card>
        <div class="overflow-x-auto">
            <table class="w-full text-sm">
                <thead class="bg-gray-100">
                    <tr>${header_html}</tr>
                </thead>
                <tbody class="divide-y divide-gray-200">${rows_html}</tbody>
            </table>
        </div>
    </benchmark-card>
</section>`
}
