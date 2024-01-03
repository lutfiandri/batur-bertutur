const preprocessYoutubeEmbed = (markdownContent) => {
  let wrappedContent = markdownContent;

  // Find all occurrences of iframes in the content
  const iframes = wrappedContent.match(/<iframe[\s\S]*?<\/iframe>/g);

  // Replace iframes with wrapped div
  if (iframes) {
    for (const iframe of iframes) {
      const wrappedIframe = `<div class="iframe-wrapper">${iframe}</div>`;
      wrappedContent = wrappedContent.replace(iframe, wrappedIframe);
    }
  }

  return wrappedContent;
};

export const preprocessMarkdownData = (markdownContent) => {
  return preprocessYoutubeEmbed(markdownContent);
};
