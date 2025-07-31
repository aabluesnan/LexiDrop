chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "lexidrop",
    title: "LexiDrop",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "lexidrop" && info.selectionText) {
    chrome.storage.local.set({ lexidropText: info.selectionText }, () => {
      chrome.sidePanel.open({ tabId: tab.id });
    });
  }
});
