function blurIt() {

  // restrict it for specific websites ( girlfaction, members.girlfaction)
  // enalble/disable it on click, you will need to be able to present sometimes

  // by url/keyword/element on sites/
  // or button to select current website PROD READY

  if(window.location.href.includes('loveher') || window.location.href.includes('clubstroke') || window.location.href.includes('yanks') || window.location.href.includes('solotouch') || window.location.href.includes('sheloves') || window.location.href.includes('masturbation') ) {

    if(document.getElementById('blurryCheck')) {
      return
    }
    
    const blurryCheck = document.createElement('div')
    blurryCheck.setAttribute("id", "blurryCheck")
    document.querySelector('body').appendChild(blurryCheck)

    const style = document.createElement('style');
    style.innerHTML = `
    img, video {
      filter: blur(10px);
    }
    `;
    document.head.appendChild(style);
  
  }


}

function unBlurIt(){
  const style = document.createElement('style');
  style.innerHTML = `
  img, video {
    filter: blur(0px) !important;
  }
  `;
  document.head.appendChild(style);
}

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && tab.active) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: blurIt
    });
  }
})

chrome.action.onClicked.addListener((tab) => {
  if(!tab.url.includes("chrome://")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: unBlurIt
    });
  }
});
