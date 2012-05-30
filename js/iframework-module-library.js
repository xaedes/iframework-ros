// Module is used for Iframework.Library and has info about ins and outs
// Node is used by Graph, and has info about x, y, w, h

$(function(){

  var library = new Iframework.Modules(
    [
      {"src":"http://forresto.github.com/meemoo-modules/canvasarray.html","info":{"title":"canvas array","author":"forresto","description":"hold a stack of canvases for reuse, click sends it, arrows navigate to prev/next"},"inputs":[{"name":"image","type":"image","description":"","min":"","max":"","default":""}],"outputs":[{"name":"image","type":"image"}]},
      {"src":"http://forresto.github.com/meemoo-image/transform.html","info":{"title":"transform","author":"forresto","description":"scale, translate, and/or rotate image (centered)"},"inputs":[],"outputs":[]},
      {"src":"http://forresto.github.com/meemoo-image/combine.html","info":{"title":"combine","author":"forresto","description":"combine image layers"},"inputs":[],"outputs":[]},
      {"src":"http://forresto.github.com/meemoo-image/text.html","info":{"title":"text","author":"forresto","description":"text to image"},"inputs":[],"outputs":[]},
      {"src":"http://forresto.github.com/meemoo-image/spritesheet.html","info":{"title":"spritesheet","author":"forresto","description":"makes a single-image filmstrip sprite sheet"},"inputs":[],"outputs":[]},
      {"src":"http://forresto.github.com/meemoo-image/spritesplit.html","info":{"title":"spritesplit","author":"forresto","description":"separates images from filmstrip sprite sheet"},"inputs":[],"outputs":[]},
      {"src":"http://forresto.github.com/meemoo-blend/blend.html","info":{"title":"blend","author":"forresto","description":"blend imageData under and over with given mode"},"inputs":[],"outputs":[]},
      {"src":"http://forresto.github.com/meemoo-image/mask.html","info":{"title":"alpha mask","author":"forresto","description":"use a grayscale image as the alpha for another image"},"inputs":[],"outputs":[]},
      {"src":"http://forresto.github.com/meemoo-image/threshold.html","info":{"title":"threshold","author":"forresto","description":"image to monochrome via luminosity threshold"},"inputs":[],"outputs":[]},
      {"src":"http://forresto.github.com/meemoo-image/alpha.html","info":{"title":"alpha","author":"forresto","description":"use a greyscale image as the alpha for a color image"},"inputs":[],"outputs":[]},
      {"src":"http://forresto.github.com/meemoo-image/aviary.html","info":{"title":"aviary","author":"aviary","description":"aviary.com image editor with enhance, brightness, contrast, crop, paint, stickers, text..."},"inputs":[],"outputs":[]},
      {"src":"http://forresto.github.com/meemoo-canvas2gif/canvas2gif.html","info":{"title":"gif","author":"forresto","description":"canvas image data to animated gif"},"inputs":[{"name":"image","type":"image","description":"","min":"","max":"","default":""},{"name":"quality","type":"int","description":"from 0 (fastest) to 100 (best)","min":"0","max":"100","default":""},{"name":"delay","type":"int","description":"","min":"","max":"","default":""},{"name":"matte","type":"color","description":"","min":"","max":"","default":""},{"name":"finalize","type":"bang","description":"","min":"","max":"","default":""}],"outputs":[{"name":"gif","type":"data:image/gif"}]},
      {"src":"http://forresto.github.com/meemoo-modules/file-reader-image.html","info":{"title":"image file","author":"forresto","description":"Select or drag local images to get the canvas pixel data. Requires a browser with the FileReader API, like Firefox or Chrome."},"inputs":[],"outputs":[]},
      {"src":"http://forresto.github.com/meemoo-modules/imgur.html","info":{"title":"imgur","author":"forresto","description":"image data url to Imgur image sharing service"},"inputs":[{"name":"dataurl","type":"data:image","description":"","min":"","max":"","default":""},{"name":"title","type":"string","description":"","min":"","max":"","default":""},{"name":"caption","type":"string","description":"","min":"","max":"","default":""}],"outputs":[{"name":"pageurl","type":"string"},{"name":"imageurl","type":"string"}]},
      {"src":"http://forresto.github.com/meemoo-modules/delay.html","info":{"title":"delay","author":"forresto","description":"hold a stack of stack of data until buffer is full"},"inputs":[],"outputs":[]},
      {"src":"http://forresto.github.com/meemoo-modules/timer.html","info":{"title":"timer","author":"forresto","description":"countdown to bang"},"inputs":[],"outputs":[]},
      {"src":"http://forresto.github.com/meemoo-modules/clock.html","info":{"title":"clock","author":"forresto","description":"time: hours minutes seconds with percentages"},"inputs":[],"outputs":[]},
      {"src":"http://forresto.github.com/meemoo-modules/metronome.html","info":{"title":"metronome","author":"forresto","description":"meemoo.js module for rhythm in bpm or ms"},"inputs":[{"name":"ms","type":"int","description":"","min":"","max":"","default":""},{"name":"bpm","type":"number","description":"","min":"","max":"","default":""},{"name":"start","type":"bang","description":"","min":"","max":"","default":""},{"name":"stop","type":"bang","description":"","min":"","max":"","default":""}],"outputs":[{"name":"beat","type":"bang"}]},
      {"src":"http://forresto.github.com/meemoo-modules/taptempo.html","info":{"title":"taptempo","author":"forresto","description":"tap out your rhythm, averages last 4 taps"},"inputs":[],"outputs":[]},
      {"src":"http://forresto.github.com/meemoo-paint/paint.html","info":{"title":"paint","author":"forresto","description":"canvas pixel paint"},"inputs":[{"name":"image","type":"image","description":"background image, part of output","min":"","max":"","default":""},{"name":"tracing","type":"image","description":"tracing image, not part of output","min":"","max":"","default":""},{"name":"undo","type":"bang","description":"","min":"","max":"","default":""},{"name":"clear","type":"bang","description":"","min":"","max":"","default":""},{"name":"send","type":"bang","description":"","min":"","max":"","default":""}],"outputs":[{"name":"image","type":"image"}]},
      {"src":"http://forresto.github.com/meemoo-camcanvas/onionskin.html","info":{"title":"cam+onionskin","author":"taboca + forresto + ginger","description":"flash webcam image to canvas with onionskin of last frame"},"inputs":[{"name":"capture","type":"bang","description":"","min":"","max":"","default":""},{"name":"onionskin","type":"image","description":"","min":"","max":"","default":""},{"name":"width","type":"int","description":"","min":"1","max":"640","default":""},{"name":"height","type":"int","description":"","min":"1","max":"480","default":""},{"name":"quality","type":"int","description":"","min":"0","max":"100","default":""}],"outputs":[{"name":"image","type":"image"}]},
      {"src":"http://forresto.github.com/meemoo-camcanvas/webcam2canvas.html","info":{"title":"cam","author":"taboca + Forrest Oliphant","description":"flash webcam image to canvas"},"inputs":[{"name":"capture","type":"bang","description":"","min":"","max":"","default":""},{"name":"width","type":"int","description":"","min":"1","max":"640","default":""},{"name":"height","type":"int","description":"","min":"1","max":"480","default":""},{"name":"quality","type":"int","description":"","min":"0","max":"100","default":""}],"outputs":[{"name":"image","type":"image"}]},
      {"src":"http://forresto.github.com/meemoo-modules/reflow.html","info":{"title":"reflow","description":"glitches by reflowing image data"},"inputs":[{"name":"image","type":"image","description":"","min":"","max":"","default":""}],"outputs":[{"name":"image","type":"image"}]},
      {"src":"http://forresto.github.com/meemoo-jpgglitch/jpgglitch.html","info":{"title":"jpgglitch","author":"mutaphysis + forresto","description":"jpg to glitched jpg, click image to set glitchPos"},"inputs":[{"name":"jpg","type":"data:image/jpeg","description":"","min":"","max":"","default":""},{"name":"glitchPos","type":"number","description":"","min":0,"max":1,"default":""},{"name":"glitchVal","type":"int","description":"","min":0,"max":255,"default":""},{"name":"random","type":"int","description":"","min":0,"max":100,"default":""}],"outputs":[{"name":"jpg","type":"data:image/jpeg"}]},
      {"src":"http://forresto.github.com/meemoo-modules/img2canvas.html","info":{"title":"img2canvas","author":"forresto","description":"image data url to canvas image data"},"inputs":[{"name":"dataurl","type":"data:image","description":"","min":"","max":"","default":""}],"outputs":[{"name":"image","type":"image"}]},
      {"src":"http://forresto.github.com/meemoo-modules/processing.html","info":{"title":"processing.js","description":"processing code loader"},"inputs":[{"name":"image","type":"image","description":"","min":"","max":"","default":""},{"name":"send","type":"bang","description":"","min":"","max":"","default":""},{"name":"pressed","type":"bang","description":"","min":"","max":"","default":""},{"name":"code","type":"code:java","description":"","min":"","max":"","default":""}],"outputs":[{"name":"image","type":"image"}]},
      {"src":"http://forresto.github.com/meemoo-modules/audioarray.html","info":{"title":"audioarray","author":"forresto","description":"hold and address a stack of audio objects"},"inputs":[{"name":"audio","type":"data:audio","description":"","min":"","max":"","default":""},{"name":"title","type":"string","description":"","min":"","max":"","default":""},{"name":"send","type":"int","description":"","min":"","max":"","default":""},{"name":"play","type":"int","description":"play the id specified","min":"","max":"","default":""},{"name":"playall","type":"bang","description":"","min":"","max":"","default":""}],"outputs":[]},
      {"src":"http://forresto.github.com/meemoo-modules/speech2text.html","info":{"title":"speech2text","author":"forresto","description":"speech to text with x-webkit-speech"},"inputs":[{"name":"send","type":"bang","description":"","min":"","max":"","default":""}],"outputs":[{"name":"text","type":"string"}]},
      {"src":"http://forresto.github.com/meemoo-speak.js/text2speech.html","info":{"title":"text2speech","author":"forresto","description":"text to speech with speak.js"},"inputs":[{"name":"text","type":"string","description":"","min":"","max":"","default":""},{"name":"amplitude","type":"int","description":"","min":0,"max":100,"default":""},{"name":"pitch","type":"int","description":"","min":0,"max":100,"default":""},{"name":"speed","type":"int","description":"speed in words-per-minute","min":0,"max":"","default":""},{"name":"wordgap","type":"int","description":"gap between words in ms","min":0,"max":5000,"default":""}],"outputs":[{"name":"audio","type":"data:audio/x-wav"},{"name":"info","type":"string"}]}
    ]
  );
  
  Iframework.loadLibrary(library);

});
