// background.js

// When the extension is installed or updated, create the context menu.
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "classifyReview",
      title: "Classify Review",
      contexts: ["selection"]  // Only show when text is selected
    });
  });
  
  // Listen for clicks on our context menu items.
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    console.log("Selected text:");
    if (info.menuItemId === "classifyReview") {
      // info.selectionText has the selected text from the context menu
      const selectedText = info.selectionText.trim();
    //   alert(`Selected text: ${selectedText}`);
       console.log("Selected text:", selectedText);
  
      // Send a message to the content script in the current tab with the selected text.
      chrome.tabs.sendMessage(tab.id, {
        type: "CLASSIFY_TEXT",
        text: selectedText
      });
    }
  });
  