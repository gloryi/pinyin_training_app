document.addEventListener("DOMContentLoaded", function() {

  var taskNameElement = document.getElementById("task-name");
  var playButton = document.getElementById("play-button");
  var nextButton = document.getElementById("next-button");
  var resultsElement = document.getElementById("results");
  var mainCells = document.getElementsByClassName("sub-cell");
  var pElement = document.getElementById("target-div");

  var currentTask = null;
  var currentCell = null;
  var score = 0;

  // Function to play audio based on cell value
  function playAudio(value) {
    var audioSrc = "./audio/" + value + ".mp3";
    var audio = new Audio(audioSrc);
    audio.play();
  }

  // Function to handle task completion
  function handleTaskCompletion(success) {
    if (success) {
      score++;
      resultsElement.innerHTML += "+";
    } else {
      score--;
      resultsElement.innerHTML += "-";
    }

    // Select new task
    var tasks = ["Guess row", "Guess column"];
    var newTask = tasks[Math.floor(Math.random() * tasks.length)];
    taskNameElement.innerHTML = newTask;
    currentTask = newTask;

    // Reset current cell
    currentCell = null;
  }

  // Event listener for play button
  playButton.addEventListener("click", function() {
    if (currentCell) {
      playAudio(currentCell.getAttribute("data-normalised"));
    }
  });

  // Event listener for next button
  nextButton.addEventListener("click", function() {
    // WTF????
    if (currentTask === "Guess row" && currentCell) {
      handleTaskCompletion(false);
    } else if (currentTask === "Guess column" && currentCell) {
      handleTaskCompletion(false);
    }

    // 
    // resultsElement.innerHTML = "";

    // Pick a random cell
    var availableCells = Array.from(mainCells).filter(function(cell) {
      return !cell.classList.contains("guessed");
    });

    //radicals
    // var wordsSet = new Set(["biàn","biāo","bo","bái","bèi","bí","bā","bāo","bīng","bō","bǐ","chuò","chuān","chuǎn","chàng","chè","chén","chì","chóng","chē","chǎng","chǐ","cùn","cǎo","dà","dòu","dāo","dǎi","dǐng","fù","fāng","fēi","fēng","fǒu","guā","guī","guǎng","guǐ","gàn","gé","gān","gāo","gē","gěn","gōng"
    // ,"gǒng","gǔ","gǔn","huáng","huǒ","hé","hù","hēi","hū","jiàn","jié","jiù","jiōng","jiǎo","jiǔ","jué","jì","jīn","jǐ","kǒu","lì","lóng","lù","lěi","lǎo","lǐ","lǔ","miàn","mián","mài","má","máo","mén","mì","mù","mǎ","mǐ","mǐn","mǔ","niú","niǎo","nè","nǚ","piàn","piě","pán","pí","pū","pǐ","qiàn","qiǎn","quǎn
    // ","qì","qí","qīng","rén","rì","ròu","róu","rù","shou","shuǐ","shé","shì","shí","shān","shēn","shēng","shī","shū","shǐ","shǒu","shǔ","suī","sè","sī","tián","tóu","tǔ","wáng","wéi","wén","wú","wǎ","wǎng","xiāng","xiǎo","xuán","xuè","xué","xì","xíng","xī","xīn","yuè","yuē","yá","yán","yáng","yáo","yè","yì",
    // "yòng","yòu","yóu","yù","yú","yāo","yī","yīn","yǐ","yǐn","yǒu","yǔ","zhuī","zhì","zhú","zhī","zhōu","zhǎng","zhǎo","zhǐ","zhǔ","zi","zì","zú","zǒu","èr","ér","ěr"]);
    
    // xiaone
    var wordsSet = new Set(["yè","chēng","gōng","rě","wǒ","mó","xuān","hú","yǎn","chí","chuān","xià","qiè","jǐ","tí","gù","xī","zi","huā","shā","liǎng","hè","guà","zhě","fǔ","fán","xīng","hū","fēng","jiē","nuǎn","zhòng","bái","shēn","shù","tiǎo","sǎ","rán","yī","qū","hán","xiǎng","gē","rù","wú","dēng","qīng"
    ,"néng","lǎo","áo","shì","wèi","xīn","xiá","bǎ","shòu","huí","liáng","wēi","bǐ","yā","fān","zhú","yǔ","lín","zài","yuè","luò","yōu","kàn","wàng","sān","mǎ","qí","chén","fú","fù","rǔ","shuí","liú","qíng","huà","qiān","ma","qián","bù","mù","biàn","yù","pǔ","hóng","huá","yǐng","jiān","shān","nǐ","qǐng","sè"
    ,"de","bàn","a","sǎn","lǚ","xiào","gèng","miàn","guāng","pá","rén","jiā","nà","fā","pí","zhī","nào","cháng","jié"]);
    
    //xinzhe
    var wordsSet = new Set(["bái","bō","bǎ","bǎi","chén","chéng","cì","cǎn","de","duō","dì","dú",
    "dī","dǒng","fàng","fù","fǎ","fǎn","gè","gē","gěi","gǎn","huái","huí","hé","hén","hóng","hún",
    "jiá","jiù","jué","jì","jìng","jīng","kū","liú","liǎn","lèi","lì","líng","lǐ","mèng","mì","míng","měi",
    "mǒ","niàn","nián","nà","néng","nǐ","pò","què","qì","qíng","qù","qún","qǔ","ràng","rén","shuí","shèng",
    "shì","shòu","shǎo","shǒu","suì","suǒ","sī","tòng","tóng","wàng","wèi","wú","wēi","wǒ","xiāng","xiǎng",
    "xù","xún","xīn","yán","yè","yì","yìn","yí","yòu","yù","yī","yǎn","yǔ","zhe","zhè","zhēn","zhōng","zhǐ","zuì","zài","ài"]);

    var availableCells = Array.from(mainCells).filter(function (cell) {
      console.log("Custom word set specified:", Array.from(wordsSet));
      // return !cell.classList.contains("guessed") && wordsSet.has(cell.getAttribute("data-pin"));
      return !cell.classList.contains("guessed");
    });

    if (availableCells.length === 0) {
      // All cells have been guessed, reset the class
      Array.from(mainCells).forEach(function(cell) {
        cell.classList.remove("guessed");
      });
    } else {
      currentCell = availableCells[Math.floor(Math.random() * availableCells.length)];
      currentCell.classList.add("guessed");
      playAudio(currentCell.getAttribute("data-normalised"));
    }
  });

  for (var i = 0; i < mainCells.length; i++) {
    mainCells[i].addEventListener("click", function() {
      
      if (this.classList.contains("guessed")) {
        return;
      }

      var row = this.getAttribute("data-row");
      var col = this.getAttribute("data-col");
      var rowHeader = this.getAttribute("data-row-header");
      var colHeader = this.getAttribute("data-col-header");
      var value = this.innerHTML;

      // Update the <p> element with the clicked cell data
      pElement.innerHTML = "Word: " + value + "<br>" +
        "Row Header: " + rowHeader + "<br>" +
        "Column Header: " + colHeader + "<br>" + preprocess(rowHeader) + "<br>" + "<br>" + preprocess(colHeader) + "<br>";

      if (currentTask === "Guess row") {
        if (rowHeader === currentCell.getAttribute("data-row-header")) {
          handleTaskCompletion(true);
        } else {
          handleTaskCompletion(false);
        }
      } else if (currentTask === "Guess column") {
        if (colHeader === currentCell.getAttribute("data-col-header")) {
          handleTaskCompletion(true);
        } else {
          handleTaskCompletion(false);
        }
      }

      // Store the clicked cell
      // currentCell = this;

      // Play audio based on sub-cell value
      playAudio(this.getAttribute("data-normalised"));
    });
  }
});


function scrollToSection(sectionId) {
  var sectionElement = document.getElementById(sectionId);
  if (sectionElement) {
    sectionElement.scrollIntoView({ behavior: 'smooth' });
  }
}


document.addEventListener("DOMContentLoaded", function() {
    var mainCells = document.getElementsByClassName("sub-cell");
    var emptycells = document.getElementsByClassName("empty-cell");
    var pElement = document.getElementById("target-div");

    
  
    for (var i = 0; i < mainCells.length; i++) {
      mainCells[i].addEventListener("click", function() {
        var row = this.getAttribute("data-row");
        var col = this.getAttribute("data-col");
        var rowHeader = this.getAttribute("data-row-header");
        var colHeader = this.getAttribute("data-col-header");
        var value = this.innerHTML;
  
        // Update the <p> element with the clicked cell data
        pElement.innerHTML = "Word: " + value + "<br>"  +
        //   + "Row: " + row + "<br>"
        //   + "Column: " + col + "<br>"
          + "Row Header: " + rowHeader + "<br>"
          + "Column Header: " + colHeader + "<br>" + preprocess(rowHeader) + "<br>" + "<br>" + preprocess(colHeader) + "<br>";
      });
    }
  
    var subCells = document.getElementsByClassName("sub-cell");
  
    for (var j = 0; j < subCells.length; j++) {
      subCells[j].addEventListener("click", function() {
        this.style.backgroundColor = "#AEC6CF";
        var value = this.getAttribute("data-normalised");
  
        // Call the set_p function with the clicked sub-cell value
        set_p(value);
  
        // Play audio based on sub-cell value
        // if (/[a-z]$/i.test(value)) {
          var audioSrc = "./audio/" + value + ".mp3";
          var audio = new Audio(audioSrc);
          audio.play();

          for (var i = 0; i < emptycells.length; i++) {
            emptycells[i].innerHTML = this.innerHTML.replace(/\s/g, '<br>').replace('<br><br>', '<br>');
          }

        // }
      });
    }
  });
  
  function set_p(value) {
    // Update the <p> element with the pre-processed value
    var pElement = document.getElementById("target-div");
    var preprocessedValue = preprocess(value);
    // pElement.innerHTML = "Value: " + preprocessedValue;
  }
  



  function preprocess(value) {
    if (/^(a).*/i.test(value)) {
      return "<br>" + "<b>" + value + "</b>" + "<br>" + "Open your mouth wide and relax your tongue in its lowest place. The sound of [ɑ] is pronounced like “ah” in English, as the sound you might make when the doctor examines your tonsils." + "The opening of mouth is getting smaller in this order: [ɑ]＞[e]＞[i]." + "The height of tongue is getting lower in this order: [i]＞[e]＞[ɑ]";
    } else if (/^(e).*/i.test(value)){
return "<br>" + "<b>" + value + "</b>" + "<br>" + "Open your mouth half but unrounded; put your tongue in a mid-high position and slightly rearward. The sound of [e] sounds like the “e” in English the word “her”."+ "The opening of mouth is getting smaller in this order: [ɑ]＞[e]＞[i]." + "The height of tongue is getting lower in this order: [i]＞[e]＞[ɑ]";
    } else if (/^(i).*/i.test(value)){
return "<br>" + "<b>" + value + "</b>" + "<br>" + "Narrow your mouth and pull your lips back; put your tongue in a high position and slightly towards the front without touching the hard palate. The sound of [i] is similar to the “ea” in the English word “weak”."+ "The opening of mouth is getting smaller in this order: [ɑ]＞[e]＞[i]." + "The height of tongue is getting lower in this order: [i]＞[e]＞[ɑ]";
    }else if (/^(v).*/i.test(value)) { return "<br>" + "<b>" + value + "</b>" + "<br>" +"First, try to pronounce the pinyin final [i] or “ee” in English word “bee”, and then gradually round and tighten your lips in an “O” shape. Make it faster! Combine these sounds together. The vowel [ü] will naturally come out.";}
else if (/^(o).*/i.test(value)) { return"<br>" + "<b>" + value + "</b>" + "<br>" +" Put the tongue at the bottom of your mouth and push the lips forward into a small “O” circle. The sound of [o] sounds like the “-aw” in English “law”.";}
else if (/^(u).*/i.test(value)) { return "<br>" + "<b>" + value + "</b>" + "<br>" +"Push the lips forward hard to make a smaller round gap. The sound of [u] sounds like the “oo” in the English word “wood”.";}
else if (/^(er).*/i.test(value)) { return "<br>" + "<b>" + value + "</b>" + "<br>" +"Keep your tongue in the position of “e” and then slightly roll up tip of your tongue. ";}
else if (/^(b).*/i.test(value)) { return "<br>" + "<b>" + value + "</b>" + "<br>" +"Close your lips tightly and then let a little bit of airflow comes out your mouth by a sudden release of lips but with no vibration of the vocal cord. The sound of [b] is like the “b” in English word “bird”. [b] [p] are bilabial plosive initials. Vocal cord: [b] [p] are both voiceless.";}
else if (/^(p).*/i.test(value)) { return "<br>" + "<b>" + value + "</b>" + "<br>" +"The position of articulation is the same as that of [b] and then push the airflow forcibly out without vibration of the vocal cord. The sound of [p] is more like the “p” in English word “park”. [b] [p] are bilabial plosive initials. Vocal cord: [b] [p] are both voiceless.";}
else if (/^(d).*/i.test(value)) { return "<br>" + "<b>" + value + "</b>" + "<br>" +"Make an obstacle by keeping your tip of tongue touch the upper alveolar ridge, compress air in your mouth and then release the airflow by quickly break through the obstacle without vibration of the cord. The sound of [d] is similar to the “d” in the English word “down”. [d] [t] are alveolar plosive initials.";}
else if (/^(t).*/i.test(value)) { return "<br>" + "<b>" + value + "</b>" + "<br>" +"The position of articulation is the same as that of [d] but airflow is pushed out forcibly from mouth without vibration of the cord. The sound of [t] is similar to the “t” in the English word “touch”. Vocal cord: [d] [t] are both voiceless.";}
else if (/^(g).*/i.test(value)) { return "<br>" + "<b>" + value + "</b>" + "<br>" +"Form an obstacle by raising the back of tongue to touch the soft palate and then release the airflow by quickly break through the obstacle without vibration of the cord. The sound of [g] is similar to the “g” in English word “go”.";}
else if (/^(k).*/i.test(value)) { return "<br>" + "<b>" + value + "</b>" + "<br>" +"The position of articulation is the same as that of [g] but airflow is pushed out forcibly without vibration of the vocal cord. The sound of [k] sound like the “k” in English word “king”.";}
else if (/^(n).*/i.test(value)) { return "<br>" + "<b>" + value + "</b>" + "<br>" +"Make the tip of your tongue touch against the upper alveolar ridge and let the airflow comes out from nasal cavity companied with the release of the closure in mouth and the vibration of the vocal cord. The sound of [n] is more like the “n” in English word “nine”. [n] is a nasal initial while [l] is a literal initial. [n] [l] are both with the vibration of vocal cord.";}
else if (/^(l).*/i.test(value)) { return "<br>" + "<b>" + value + "</b>" + "<br>" +"Open your mouth slightly, make the tip of your tongue contact the upper alveolar bridge soft and then let the airflow comes out from the sides of the tongue-tip with the vibration of vocal cord. The sound of [l] is similar to the “l” in English word “like”. [n] is a nasal initial while [l] is a literal initial. [n] [l] are both with the vibration of vocal cord.";}
else if (/^(j).*/i.test(value)) { return "<br>" + "<b>" + value + "</b>" + "<br>" +"Press the tip of your tongue against the back of lower teeth, raise the front of your tongue to contact hard palate and then squeeze the airflow out through the passage thus made without vibration of the vocal cord. The sound of [j] sounds kind of like “j” in English word “jeep”. [j] [q] [x] are all voiceless initials.";}
else if (/^(q).*/i.test(value)) { return "<br>" + "<b>" + value + "</b>" + "<br>" +"The position of articulation is the same as that of [j] but it requires strong aspiration without vibration of the vocal cord. The sound of [q] kind of sounds like “ch” in English word “cheat”. [j] [q] [x] are all voiceless initials.";}
else if (/^(x).*/i.test(value)) { return "<br>" + "<b>" + value + "</b>" + "<br>" +"Put the tip of your tongue against the back of the lower teeth, raise the front of your tongue near the hard palate and then squeeze the airflow out without vibration of the vocal cord. The sound of [x] kind of sounds like the “sh” in the English word “sheep”. [j] [q] [x] are all voiceless initials.";}
else if (/^(z).*/i.test(value)) { return "<br>" + "<b>" + value + "</b>" + "<br>" +"Lengthen your mouth, spread your tongue companied with pressing the tip of your tongue against the upper alveolar ridge and then loosen the tongue-tip a little to let the airflow out without vibration of the vocal cord. The sound of [z] is like the “z” in the English word “buzz”.";}
else if (/^(c).*/i.test(value)) { return "<br>" + "<b>" + value + "</b>" + "<br>" +"The position of articulation is the same as that of [z] but you should blow the air out strongly. The sound of [c] is similar to the “ts” in the English word “sits”.";}
else if (/^(s).*/i.test(value)) { return "<br>" + "<b>" + value + "</b>" + "<br>" +"Let the tip of your tongue contact the back of lower teeth, raise the mid-part of your tongue to form a small interstice with the upper teeth and then squeeze the airflow out through it. The sound of [s] is similar to the “s” in English word “see”.";}
else if (/^(zh).*/i.test(value)) { return "<br>" + "<b>" + value + "</b>" + "<br>" +"Raise the tip of your tongue to touch the hard palate in order to form an obstacle and the airflow comes out suddenly by break through the obstacle without vibration of the vocal cord. The sound of [zh] kind of sounds like the “j” in English word “jack”.";}
else if (/^(ch).*/i.test(value)) { return "<br>" + "<b>" + value + "</b>" + "<br>" +"The position of articulation is the same as that of [zh] but airflow comes out strongly. The sound of [ch] is similar as the “ch” in English word “church”.";}
else if (/^(sh).*/i.test(value)) { return "<br>" + "<b>" + value + "</b>" + "<br>" +"Curl up the tip of your tongue closing to the hard palate and release the airflow through the passage thus made with fraction without vibration of the vocal cord. The sound of [sh] is similar to the “sh” in English word “sheep”.";}
else if (/^(r).*/i.test(value)) { return "<br>" + "<b>" + value + "</b>" + "<br>" +"The position of articulation is the same as that of [sh] but the airflow comes out with fraction and with vibration of the vocal cord. The sound of [r] kind of sounds like the “r” in English word “right”.";}
  }


  function startFontGlitter() {
    const elements = document.querySelectorAll('.empty-cell');
    const animationDuration = 3000; // Duration of each color transition in milliseconds
  
    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  
    function interpolateColors(startColor, endColor, progress) {
      const startRGB = hexToRgb(startColor);
      const endRGB = hexToRgb(endColor);
  
      const r = Math.floor(startRGB.r + (endRGB.r - startRGB.r) * progress);
      const g = Math.floor(startRGB.g + (endRGB.g - startRGB.g) * progress);
      const b = Math.floor(startRGB.b + (endRGB.b - startRGB.b) * progress);
  
      return rgbToHex(r, g, b);
    }
  
    function hexToRgb(hex) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
          }
        : null;
    }
  
    function rgbToHex(r, g, b) {
      return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
    }
  
    function animateColorTransition(element) {
      const startColor = getRandomColor();
      let endColor = getRandomColor();
      let startTime = null;
  
      function updateColor(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsedTime = timestamp - startTime;
        const progress = elapsedTime / animationDuration;
  
        if (progress >= 1) {
          startTime = null;
          element.style.color = endColor;
          endColor = getRandomColor();
        } else {
          const color = interpolateColors(startColor, endColor, progress);
          element.style.color = color;
          requestAnimationFrame(updateColor);
        }
      }
  
      requestAnimationFrame(updateColor);
    }
  
    elements.forEach(element => {
      animateColorTransition(element);
    });

    // function applyGlitterEffect() {
    //   elements.forEach(element => {
    //     animateColorTransition(element);
    //   });
    // }

    // setInterval(applyGlitterEffect, 5000); // Adjust the interval (in milliseconds) as desired
  }
  
  // Start the font glitter effect when the page finishes loading
  window.addEventListener('load', startFontGlitter);