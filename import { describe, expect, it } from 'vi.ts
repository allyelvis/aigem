import { describe, expect, it } from 'vitimport { describe, expect, it } from 'vitest';
import { renderMarkdown } from './utils';

describe('renderMarkdown', () => {
  it('should render markdown to HTML', () => {
    const markdown = '# Heading 1\n\nThis is a paragraph.';
    const expectedHtml = '<h1>Heading 1</h1>\n<p>This is a paragraph.</p>\n';
    expect(renderMarkdown(markdown)).toBe(expectedHtml);
  });

  it('should handle empty markdown', () => {
    const markdown = '';
    const expectedHtml = '';
    expect(renderMarkdown(markdown)).toBe(expectedHtml);
  });

  it('should handle markdown with only whitespace', () => {
    const markdown = '   ';
    const expectedHtml = '';
    expect(renderMarkdown(markdown)).toBe(expectedHtml);
  });
});
est';
import { renderMarkdown } from './utils';

describe('renderMarkdown', () => {
    it('should render markdown to HTML', () => {
        const markdown = '# Heading 1\n\nThis is a paragraph.';
        const expectedHtml = '<h1>Heading 1</h1>\n<p>This is a paragraph.</p>\n';
        expect(renderMarkdown(markdown)).toBe(expectedHtml);
    });

    it('should handle empty markdown', () => {
        const markdown = '';
        const expectedHtml = '';
        expect(renderMarkdown(markdown)).toBe(expectedHtml);
    });

    it('should handle markdown with only whitespace', () => {
        const markdown = '   ';
        const expectedHtml = '';
        expect(renderMarkdown(markdown)).toBe(expectedHtml);
    });
});
