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
                <div class="bg-white rounded-lg p-6 border border-gray-300 shadow-lg">
                    \${title ? \`<h3 class="text-lg font-semibold text-blue-800 mb-4">\${title}</h3>\` : ''}
                    <div>\${content}</div>
                </div>
            \`;
        }
    }
    customElements.define('benchmark-card', BenchmarkCard);
</script>`
}
