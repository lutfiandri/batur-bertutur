const preprocessYoutubeEmbed = (markdownContent) => {
  // const youtubeRegex =
  // /<iframe.*?src=["'](https:\/\/www\.youtube\.com\/embed\/[a-zA-Z0-9_-]+\?.*?)".*?<\/iframe>/g;

  // const youtubeRegex =
  //   /<iframe[\s\S]*?src=["'](https:\/\/www\.youtube\.com\/embed\/[a-zA-Z0-9_-]+\?.*?)".*?<\/iframe>/g;

  // const wrappedContent = markdownContent.replace(
  //   youtubeRegex,
  //   '<div class="iframe-wrapper">$&</div>'
  // );

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

  console.log(2, wrappedContent);

  return wrappedContent;
};

export const preprocessMarkdownData = (markdownContent) => {
  console.log(1, markdownContent);
  return preprocessYoutubeEmbed(markdownContent);
};
