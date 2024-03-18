# pinyin_training_app
Simple one-page html app to train listening and speaking of chinese phonetics. 
To make it work, create in the root directory "audio" folder and put there are audios from this repository https://github.com/davinfifield/mp3-chinese-pinyin-sound

The main conept is listen new syllable "next button". Look for it in the chart. And repeat atloud all the 4 tones of this syllable. Script are picking random syllables from all the chart non-repeating untill all the table is marked.

![PINCHART](https://github.com/gloryi/pinyin_training_app/assets/32369259/bd4de87d-4fd4-46ce-ac7f-d7e7ae29a3c3)

Use the other buttons to navigate within chart by primary finals.
Chart is colored according to them.
Examples in chart are taken from list of 5k most frequent hanzi characters.

You could also add to html line <blockquote>
<div id="target-div"></div></blockquote>
 to see additional information about sounds and how to pronounce them correctly. It already included into css and js. Just removed from html for more clear navigation.
