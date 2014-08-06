var lastUtterance = '';
var speaking = false;
var globalUtteranceIndex = 0;

if (localStorage['lastVersionUsed'] != '1') {
  localStorage['lastVersionUsed'] = '1';
  chrome.tabs.create({
    url: chrome.extension.getURL('options.html')
  });
}

var lastWorld;
function getWordsBetween(fullText,startingSpeakingIndex,endingSpeakingIndex) {
  textArray = fullText.substr(startingSpeakingIndex,endingSpeakingIndex).split(' ');
  lastWord = textArray.pop();
  return textArray.slice(0,textArray.length - 1).join(' ');
}


function speak(utterance) {
  if (speaking && utterance == lastUtterance) {
    chrome.tts.stop();
    return;
  }
  speaking = true;
  lastUtterance = utterance;
  globalUtteranceIndex++;
  var utteranceIndex = globalUtteranceIndex;
  chrome.browserAction.setIcon({path: 'page_speaker16-active.png'});
  words = utterance.split(' ');
  numberOfWords = words.length;
  limit = 100;
  numberOfTimesIteration = Math.ceil(numberOfWords/limit);
  for(var i = 0; i < numberOfTimesIteration; i++) {
    var startingSpeakingIndex = i * limit;
    var endingSpeakingIndex = startingSpeakingIndex + limit;
    var text = words.slice(startingSpeakingIndex,endingSpeakingIndex).join(' ');
    var rate = localStorage['rate'] || 1.0;
    var pitch = localStorage['pitch'] || 1.0;
    var volume = localStorage['volume'] || 1.0;
    var voice = localStorage['voice'];
    var enqueue;
    option = {rate: rate, pitch: pitch, volume: volume, voice: voice,utteranceIndex: utteranceIndex};
    if(i == 0) {
      console.log(text);
      option["enqueue"] = false;
      speakText(text,option); 
    }
    else {
      console.log(text);
      option["enqueue"] = true;
      if(i == (numberOfTimesIteration - 1)) {
        option["isLastText"] = true
      }
      speakText(text,option);
    }
  }

}



function speakText(text, option) {
  var rate = parseFloat(option['rate']);
  var pitch = parseFloat(option['pitch']);
  var volume = parseFloat(option['volume']);
  var voice = option['voice'];
  var enqueue = option['enqueue'];
  var utteranceIndex = option['utteranceIndex'];
  var isLastText = option['isLastText'];
  chrome.tts.speak(
    text,
    {
      voiceName: voice,
      rate: rate,
      enqueue: enqueue,
      pitch: pitch,
      volume: volume,
      onEvent: function(evt) {
        if (evt.type == 'interrupted' || evt.type == 'cancelled' || evt.type == 'error') {
          if (utteranceIndex == globalUtteranceIndex) {
            speaking = false;
            chrome.browserAction.setIcon({path: 'page_speaker16.png'});
           }
        } else if ( (evt.type == 'end')  && isLastText) {
            speaking = false;
            chrome.browserAction.setIcon({path: 'page_speaker16.png'});
        }

      }
    }
  );
}






function initBackground() {
  loadContentScriptInAllTabs();

  var defaultKeyString = getDefaultKeyString();
  var keyString = localStorage['page_speaker'];
  if (keyString == undefined) {
    keyString = defaultKeyString;
    localStorage['page_speaker'] = keyString;
  }
  sendKeyToAllTabs(keyString);

  chrome.extension.onRequest.addListener(
      function(request, sender, sendResponse) {
        if (request['init']) {
          sendResponse({'key': localStorage['page_speaker']});
        } else if (request['speak']) {
          speak(request['speak']);
        }
      });

  chrome.browserAction.onClicked.addListener(
      function(tab) {
        chrome.tabs.sendRequest(
            tab.id,
            {'speakSelection': true});
  });
  
}

initBackground();


