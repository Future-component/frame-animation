import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import data from './data'
import '../build/index'
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
  
    data.starImages.forEach((src, index) => {
        var ele = document.createElement('div')
        ele.id = `star-${index + 1}`
        ele.setAttribute('class', 'star-item')
        ele.style.backgroundImage = `url(${data.starImages[index + 1]})`
        ele.style.backgroundSize = 'cover'
        ele.style.display = 'none'
        $star.appendChild(ele)
    })
    function frameFunc1() {
        var allEle = document.querySelectorAll('.star-item')
        allEle.forEach((item) => {
            item.style.display = 'none'
        })
        var ele = document.getElementById(`star-${frame}`)
        if (ele) {
            ele.style.display = 'block'
        }
        
        frame++
        if (frame > frameLength) {
            frame = 0;
        }
  
        // requestAnimationFrame(frameFunc1)
        setTimeout(() => {
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