/**
 * Generates the web component definition script for benchmark cards.
 */
export const generateWebComponents = () => {
  return `<script>
    class BenchmarkCard extends HTMLElement {
        connectedCallback() {
            const title = this.getAttribute('title');
            const content = this.innerHTML;
            this.innerHTML = \`
                <div class="bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-lg">
                    \${title ? \`<h3 class="text-lg font-semibold text-blue-200 mb-4">\${title}</h3>\` : ''}
                    <div>\${content}</div>
                </div>
            \`;
        }
    }
    customElements.define('benchmark-card', BenchmarkCard);
</script>`
}
