export function escapeHtml(code: string) {
  if (typeof code !== 'string') return '';
  return code.replace(/>{@html `<code class="language-/g, '><code class="language-').replace(/<\/code>`}<\/pre>/g, '</code></pre>');
}