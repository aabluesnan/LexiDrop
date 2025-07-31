function updateContent() {
  chrome.storage.local.get("lexidropText", (data) => {
    document.getElementById("content").textContent = data.lexidropText || "暂无内容";
  });
}
updateContent();
chrome.storage.onChanged.addListener(updateContent);
