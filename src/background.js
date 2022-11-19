chrome.action.onClicked.addListener((tab) => {
  // open proposal
  chrome.tabs.create({
    url: "https://www.lancers.jp/mypage/proposals",
  });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["src/content.js"],
  });
});
