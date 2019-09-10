import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import globalLoadScript from 'us-utils-asyncloadscript'
import data from './data'
import '../build/index'
// import '../demo/gif.js'
// import '../demo/gif.worker.js'
// import '../demo/async.min.js'
import '../demo/demo.css'

var animation = window.frameAnimation;

function $(id) {
  return document.getElementById(id);
}

// storiesOf('Demo', module)
//   .add('heading', () => '<h1>Hello World</h1>')
//   .add('button', () => {
//     const button = document.createElement('button');
//     button.type = 'button';
//     button.innerText = 'Hello Button';
//     button.addEventListener('click', e => console.log(e));
//     return button;
//   });

var rightRunningMap = ["0 -854", "-174 -852", "-349 -852", "-524 -852", "-698 -851", "-873 -848"];
var leftRunningMap = ["0 -373", "-175 -376", "-350 -377", "-524 -377", "-699 -377", "-873 -379"];
var rabbitWinMap = ["0 0", "-198 0", "-401 0", "-609 0", "-816 0", "0 -96", "-208 -97", "-415 -97", "-623 -97", "-831 -97", "0 -203", "-207 -203", "-415 -203", "-623 -203", "-831 -203", "0 -307", "-206 -307", "-414 -307", "-623 -307"];
var rabbitLoseMap = ["0 0", "-163 0", "-327 0", "-491 0", "-655 0", "-819 0", "0 -135", "-166 -135", "-333 -135", "-500 -135", "-668 -135", "-835 -135", "0 -262"];

storiesOf('兔子动画', module)
  .add('rabbit-repeatForever', () => {
    setTimeout(() => {
      var $rabbit1 = $('rabbit1');
      function repeat() {
        var repeatAnimation = animation().loadImage([data.images]).changePosition($rabbit1, rightRunningMap, data.images[0]).repeatForever();
        repeatAnimation.start(80);
      }
      repeat()
    }, 0)
    return '<div class="rabbit" id="rabbit1"></div>'
  })
  .add('rabbit-repeat3', () => {
    setTimeout(() => {
      var $rabbit2 = $('rabbit2')
      var winAnimation = animation().loadImage([data.images]).changePosition($rabbit2, rabbitWinMap, data.images[2]).repeat(3).then(function() {
        console.log('win animation repeat 3 times and fined');
      });
      winAnimation.start(200);
    }, 0)
    return '<div class="rabbit" id="rabbit2"></div>'
  })
  .add('rabbit-wait1', () => {
    setTimeout(() => {
      var $rabbit3 = $('rabbit3')
      var loseAnimation = animation().loadImage([data.images]).changePosition($rabbit3, rabbitLoseMap, data.images[1]).wait(3000).repeat(1).then(function() {
        console.log('lose');
      });
      loseAnimation.start(200);
    }, 0)
    return '<div class="rabbit" id="rabbit3"></div>'
  })
  .add('rabbit-run', () => {
    setTimeout(() => {
      var $rabbit4 = $('rabbit4')
      var speed = 6;
      var initLeft = 100;
      var finalLeft = 400;
      var frameLength = 6;
      var frame = 4;
      var right = true;
      var interval = 50;

      var runAnimation = animation().loadImage([data.images]).enterFrame(function(success, time) {
          var ratio = time / interval;
          var position;
          var left;
          //向右跑
          if (right) {
              position = rightRunningMap[frame].split(' ');
              left = Math.min(initLeft + speed * ratio, finalLeft);

              if (left === finalLeft) {
                  right = false;
                  frame = 4;
                  success();
                  return;
              }
          } else {
              position = leftRunningMap[frame].split(' ');
              left = Math.max(initLeft, finalLeft - speed * ratio);
              if (left === initLeft) {
                  right = true;
                  frame = 4;
                  success();
                  return;
              }
          }

          $rabbit4.style.backgroundImage = 'url(' + data.images[0] + ')';
          $rabbit4.style.backgroundPosition = position[0] + 'px ' + position[1] + 'px';
          $rabbit4.style.left = left + 'px';
          frame++;
          if (frame == frameLength) {
              frame = 0;
          }
      }).repeat(2).wait(1000).changePosition($rabbit4, rabbitWinMap, data.images[2]).then(function() {
          console.log('finished!');
      });
      runAnimation.start(interval);
    }, 0)
    return '<div class="rabbit" id="rabbit4"></div>'
  })

storiesOf('其他动画', module)
  .add('egg1', () => {
    var egg1Style = [336, 6894];
    var egg1Map = [];
    Array(18).fill(0).forEach((item, index) => {
      var left = Math.floor(index * (egg1Style[1] * (195 / 336) / 18))
      egg1Map.push(`-${left} 0`);
    });
    setTimeout(() => {
      var $egg1 = $('egg1')
      var egg1An = animation().loadImage([data.images]).changePosition($egg1, egg1Map, data.images[3]).repeatForever();
      egg1An.start(80);
    }, 0)
    return '<div class="uskid" id="egg1"></div>'
  })
  .add('egg', () => {
    var eggStyle = [336, 3064];
    var eggMap = [];
    Array(8).fill(0).forEach((item, index) => {
        var left = Math.floor(index * (eggStyle[1] * (195 / 336) / 8))
        eggMap.push(`-${left} 0`);
    });
    setTimeout(() => {
      var $egg = $('egg')
      var eggAn = animation().loadImage([data.images]).changePosition($egg, eggMap, data.images[4]).repeatForever();
      eggAn.start(80);
    }, 0)
    return '<div class="uskid" id="egg"></div>'
  })
  .add('loin', () => {
    var loinStyle = [195, 712];
    var loinMap = [];

    Array(4).fill(0).forEach((item, index) => {
        var left = Math.floor(index * (loinStyle[1] / 4))
        loinMap.push(`-${left} 0`)
    });
    setTimeout(() => {
      var $loin = $('loin')
      var loinAn = animation().loadImage([data.images]).changePosition($loin, loinMap, data.images[5]).repeatForever();
      loinAn.start(100);
    }, 0)
    return '<div class="uskid" id="loin"></div>'
  })
  .add('xu', () => {
    var xuStyle = [195, 712];
    var xuMap = [];
    Array(4).fill(0).forEach((item, index) => {
        var left = Math.floor(index * (xuStyle[1] / 4))
        xuMap.push(`-${left} 0`);
    });
    setTimeout(() => {
      var $xu = $('xu')
      var xuAn = animation().loadImage([data.images]).changePosition($xu, xuMap, data.images[6]).repeatForever();
      xuAn.start(80);
    }, 0)
    return '<div class="uskid" id="xu"></div>'
  })

  function uskidStar1(fps) {
    var $star = $('star');
    var frameLength = data.starImages.length - 1;
    var frame = 1;
    var flag = 0
    var count = 1
  
    $star.innerText = '图片加载中。。。。。。'
    var starAn = animation().loadImage(data.starImages, function() {
        console.log('图片加载成功')
        $star.innerText = '图片加载成功'
        $star.addEventListener('click', function() {
          if (!flag) {
            flag = 1
            starAn.pause()
          } else {
            flag = 0
            starAn.start(fps || 120)
          }
        })
    }).enterFrame(function(success, time) {
        // console.log('time', frame, images)
  
        $star.style.backgroundImage = `url(${data.starImages[frame].img})`
        frame++;
        if (frame > frameLength) {
            $star.innerText = '动画执行次数：' + count
            count++
            frame = 0;
            success();
            return;
        }
    }).repeatForever()
    starAn.start(fps || 120)
  }
  
  
  function uskidStar2(fps) {
    var $star = $('star');
    var frameLength = data.starImages.length - 1;
    var frame = 1;
    var flag = 0
    var timer = null
    var count = 1
  
    $star.addEventListener('click', function() {
      if (!flag) {
        flag = 1
        clearTimeout(timer)
        timer = null
      } else {
        flag = 0
        frameFunc()
      }
    })
    function frameFunc() {
        $star.style.backgroundImage = `url(${data.starImages[frame]})`
        frame++
        if (frame > frameLength) {
           $star.innerText = '动画执行次数：' + count
           count++
          frame = 0;
        }
        // requestAnimationFrame(frameFunc)
        timer = setTimeout(() => {
          frameFunc()
        }, fps || 120)
    }
    frameFunc()
  }
  
  function uskidStar3(fps) {
    var $star = $('star');
    var frameLength = data.starImages.length - 1;
    var frame = 1;
    var timer = null
    var flag = 0
    var count = 1
  
    data.starImages.forEach((src, index) => {
        var ele = document.createElement('div')
        ele.id = `star-${index + 1}`
        ele.setAttribute('class', 'star-item')
        ele.style.backgroundImage = `url(${data.starImages[index + 1]})`
        ele.style.backgroundSize = 'cover'
        ele.style.display = 'none'
        $star.appendChild(ele)
    })

    $star.addEventListener('click', function() {
      if (!flag) {
        flag = 1
        clearTimeout(timer)
        timer = null
      } else {
        flag = 0
        frameFunc1()
      }
    })
    function frameFunc1() {
        if (frame === 1) {
          var ele = document.getElementById(`star-${frameLength}`)
          ele.style.display = 'none'
        } else {
          var ele = document.getElementById(`star-${frame - 1}`)
          ele.style.display = 'none'
        }
        var ele = document.getElementById(`star-${frame}`)
        if (ele) {
            ele.style.display = 'block'
        }
        
        frame++
        if (frame > frameLength) {
          console.log('动画执行次数：' + count)
          count++
          frame = 1;
        }
  
        // requestAnimationFrame(frameFunc1)
        timer = setTimeout(() => {
            frameFunc1()
        }, fps || 120)
    }
    frameFunc1()
  }
  
storiesOf('送星星动画测试', module)
  .add('图像预加载-120fps', () => {
    setTimeout(() => {
      uskidStar1()
    }, 0)
    return '<div class="star" id="star"></div>'
  })
  .add('图像预加载-80fps', () => {
    setTimeout(() => {
      uskidStar1(80)
    }, 0)
    return '<div class="star" id="star"></div>'
  })
  .add('图像预加载-40fps', () => {
    setTimeout(() => {
      uskidStar1(40)
    }, 0)
    return '<div class="star" id="star"></div>'
  })
  .add('背景替换-120fps', () => {
    setTimeout(() => {
      uskidStar2()
    }, 0)
    return '<div class="star" id="star"></div>'
  })
  .add('背景替换-80fps', () => {
    setTimeout(() => {
      uskidStar2(80)
    }, 0)
    return '<div class="star" id="star"></div>'
  })
  .add('背景替换-40fps', () => {
    setTimeout(() => {
      uskidStar2(40)
    }, 0)
    return '<div class="star" id="star"></div>'
  })
  .add('元素隐藏-120fps', () => {
    setTimeout(() => {
      uskidStar3()
    }, 0)
    return '<div class="star" id="star"></div>'
  })
  .add('元素隐藏-80fps', () => {
    setTimeout(() => {
      uskidStar3(80)
    }, 0)
    return '<div class="star" id="star"></div>'
  })
  .add('元素隐藏-40fps', () => {
    setTimeout(() => {
      uskidStar3(40)
    }, 0)
    return '<div class="star" id="star"></div>'
  })

storiesOf('表情包', module)
  .add('哪吒', () => {
    setTimeout(() => {
      var $star = $('star');
      var frameLength = data.nzImgs.length - 1;
      var frame = 1;
      var flag = 0
      var count = 1
    
      $star.innerText = '图片加载中。。。。。。'
      var starAn = animation().loadImage(data.nzImgs, function() {
          console.log('图片加载成功')
          $star.innerText = '图片加载成功'
      }).enterFrame(function(success, time) {
          // console.log('time', frame, images)
          $star.style.backgroundImage = `url(${data.nzImgs[frame].img})`
          frame++;
          if (frame > frameLength) {
              $star.innerText = '动画执行次数：' + count
              count++
              frame = 0;
              success();
              return;
          }
      }).repeatForever()
      starAn.start(500)
    }, 0)
    return '<div class="star" id="star"></div>'
  })

storiesOf('动画', module)
  .add('canvas-路径', () => {
    function init() {
      function customizePath(path, func) {
        const pathElement = document.createElementNS('http://www.w3.org/2000/svg',"path"); 
        pathElement.setAttributeNS(null, 'd', path);
          const length = pathElement.getTotalLength();
          const duration = 1000; 
          const interval = length / duration;
          let time = 0, step = 0; 
        
            const timer = setInterval(function() {
              if (time <= duration) {
                    const x = parseInt(pathElement.getPointAtLength(step).x);
                    const y = parseInt(pathElement.getPointAtLength(step).y);
                    func(x, y);
                    step++;
              } else {
                    clearInterval(timer)
              }
          }, interval);
      }
      
      const path = 'M0,0 C8,33.90861 25.90861,16 48,16 C70.09139,16 88,33.90861 88,56 C88,78.09139 105.90861,92 128,92 C150.09139,92 160,72 160,56 C160,40 148,24 128,24 C108,24 96,40 96,56 C96,72 105.90861,92 128,92 C154,93 168,78 168,56 C168,33.90861 185.90861,16 208,16 C230.09139,16 248,33.90861 248,56 C248,78.09139 230.09139,96 208,96 L48,96 C25.90861,96 8,78.09139 8,56 Z';
      const canvas = document.querySelector('canvas');
      const context = canvas.getContext('2d');
      function move(x, y) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.beginPath();
            context.arc(x, y, 25, 0, Math.PI*2, true);
            context.fillStyle = '#f0f';
            context.fill();
            context.closePath();
      }

      customizePath(path, move)
    }
    
    setTimeout(() => {
      init()
    }, 0)
    return '<canvas></canvas>'
  })
  .add('canvas-帧动画', () => {
    setTimeout(() => {
      var canvas = document.querySelector( '#cavsElem' );
      var ctx = canvas.getContext( '2d' );
      var frameLength = data.nzImgs1.length - 1;
      var frame = 1;
      var flag = 0
      var count = 1
      var canvasImgs = []
      var timer = null

      canvas.addEventListener('click', function() {
        if (!flag) {
          flag = 1
          clearTimeout(timer)
          timer = null
        } else {
          flag = 0
          frameFunc()
        }
      })
      function frameFunc() {
        if (!canvasImgs[frame]) {
          var img = new Image()
          img.src = data.nzImgs1[frame];
          img.setAttribute('crossOrigin', 'anonymous');
          //定义图片加载成功的回调函数
          img.onload = function() {
            canvasImgs[frame] = img
            ctx.clearRect(0,0,canvas.width,canvas.height);
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
          }
        } else {
          ctx.clearRect(0,0,canvas.width,canvas.height);
          ctx.drawImage(canvasImgs[frame], 0, 0, canvas.width, canvas.height)
        }

        frame++
        if (frame > frameLength) {
          // console.log('动画执行次数：' + count)
          count++
          frame = 1;
        }
  
        // requestAnimationFrame(frameFunc1)
        timer = setTimeout(() => {
          frameFunc()
        }, 120)
      }

      frameFunc()

    }, 0)
    return '<canvas class="star" id="cavsElem"></canvas>'
  })
  .add('canvas-导出gif', () => {
    setTimeout(() => {
      globalLoadScript()('/gif.js', () => {
        var btn = document.querySelector('button')
      var startTime = null;
      var ref2 = null
      var ref1 = null
      var ref = null
      var now = ((ref = window.performance) != null ? (ref1 = ref.now) != null ? ref1.bind(window.performance) : void 0 : void 0) || Date.now;

      var loadImage = function(src, callback) {
        var img;
        img = new Image();
        img.onload = function() {
          return callback(null, img);
        };
        img.onerror = function() {
          return callback(new Error("Could load " + src));
        };
        return img.src = src;
      };

      var blobURLSupport = ((ref2 = window.URL) != null ? ref2.createObjectURL : void 0) != null;

      var buildDataURL = (function() {
        var charMap, i, j;
        charMap = {};
        for (i = j = 0; j < 256; i = ++j) {
          charMap[i] = String.fromCharCode(i);
        }
        return function(data) {
          var k, ref3, str;
          str = '';
          for (i = k = 0, ref3 = data.length; 0 <= ref3 ? k < ref3 : k > ref3; i = 0 <= ref3 ? ++k : --k) {
            str += charMap[data[i]];
          }
          return 'data:image/gif;base64,' + btoa(str);
        };
      })();


      btn.addEventListener('click', () => {
        var renderimg = document.querySelector('.render');
        var imagesEle = document.querySelectorAll('.original')
        var images = []
        imagesEle.forEach(item => {
          images.push(item.src)
        })

        var gif = new GIF({
          debug: true,
          quality: 10,
          workers: 2
        });

        gif.on('start', function() {
          return startTime = now();
        });
        gif.on('finished', function(blob, data) {
          var delta;
          if (blobURLSupport) {
            renderimg.src = URL.createObjectURL(blob);
          } else {
            renderimg.src = buildDataURL(data);
          }
          delta = now() - startTime;
          return console.log('text', "Rendered " + images.length + " frame(s) at q" + gif.options.quality + " in " + (delta.toFixed(2)) + "ms");
        });
        gif.on('progress', function(p) {
          return console.log('text', "Rendering " + images.length + " frame(s) at q" + gif.options.quality + "... " + (Math.round(p * 100)) + "%");
        });

        var load = function(images, index, callback) {
          if (index >= images.length) {
            callback()
          } else {
            loadImage(images[index], (error, img) => {
              console.log('img: ', img, index)
              images[index] = img
              load(images, index + 1, callback)
            })
          }
        }

        load(images, 0, () => {
          var image, j, len;
          console.log(images)
          
          for (j = 0, len = images.length; j < len; j++) {
            image = images[j];
            gif.addFrame(image, {
              delay: 120, // 延迟时间
              copy: true
            });
          }

          // gif.setOption('dither', this.value === 'None' ? false : this.value);
          // gif.abort();

          // gif.setOption('repeat', value);
          // gif.abort();

          // gif.setOption('quality', 5); // 30 - 1
          // gif.abort();
          gif.render();
        })
        // async.map(images, loadImage, function(error, images) {
         
        // });

        // gif.on('finished', function(blob) {
        //   window.open(URL.createObjectURL(blob));
        // });
        
        // gif.render();

      })
    })
    }, 0)

    var imagesHtml = data.nzImgs1.map((img) => (`<img class="original" src=${img} />`))
    return `<button>导出gif图</button><div class="images">
      <img class="render" />
      ${imagesHtml}
    </div>`
  })