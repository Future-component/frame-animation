/**********************************************
 * created by beth on 2016年6月12日
 * 创建一个动画对象
 **********************************************/

function $(id) {
    return document.getElementById(id);
}

var $rabbit1 = $('rabbit1');
var $rabbit2 = $('rabbit2');
var $rabbit3 = $('rabbit3');
var $rabbit4 = $('rabbit4');
var $egg1 = $('egg1');
var $egg = $('egg');
var $loin = $('loin');
var $xu = $('xu');
var $star = $('star');
var $star1 = $('star1');

var images = ['rabbit-big.png', 'rabbit-lose.png', 'rabbit-win.png', 'egg-c.png', 'egg.png', 'loin.png', 'xu.png']
var rightRunningMap = ["0 -854", "-174 -852", "-349 -852", "-524 -852", "-698 -851", "-873 -848"];
var leftRunningMap = ["0 -373", "-175 -376", "-350 -377", "-524 -377", "-699 -377", "-873 -379"];
var rabbitWinMap = ["0 0", "-198 0", "-401 0", "-609 0", "-816 0", "0 -96", "-208 -97", "-415 -97", "-623 -97", "-831 -97", "0 -203", "-207 -203", "-415 -203", "-623 -203", "-831 -203", "0 -307", "-206 -307", "-414 -307", "-623 -307"];
var rabbitLoseMap = ["0 0", "-163 0", "-327 0", "-491 0", "-655 0", "-819 0", "0 -135", "-166 -135", "-333 -135", "-500 -135", "-668 -135", "-835 -135", "0 -262"];
var loinStyle = [195, 712];
var loinMap = [];

Array(4).fill(0).forEach((item, index) => {
    var left = Math.floor(index * (loinStyle[1] / 4))
    loinMap.push(`-${left} 0`)
});

var egg1Style = [336, 6894];
var egg1Map = [];
Array(18).fill(0).forEach((item, index) => {
    var left = Math.floor(index * (egg1Style[1] * (195 / 336) / 18))
    egg1Map.push(`-${left} 0`);
});

var eggStyle = [336, 3064];
var eggMap = [];
Array(8).fill(0).forEach((item, index) => {
    var left = Math.floor(index * (eggStyle[1] * (195 / 336) / 8))
    eggMap.push(`-${left} 0`);
});

var xuStyle = [195, 712];
var xuMap = [];
Array(4).fill(0).forEach((item, index) => {
    var left = Math.floor(index * (xuStyle[1] / 4))
    xuMap.push(`-${left} 0`);
});

var animation = window.frameAnimation;

// (function() {
//     var loinAn = animation().loadImage([images]).changePosition($loin, loinMap, images[5]).repeatForever();
//     loinAn.start(100);
// })();

// (function() {
//     var egg1An = animation().loadImage([images]).changePosition($egg1, egg1Map, images[3]).repeatForever();
//     egg1An.start(80);
// })();

// (function() {
//     var eggAn = animation().loadImage([images]).changePosition($egg, eggMap, images[4]).repeatForever();
//     eggAn.start(80);
// })();

// (function() {
//     var xuAn = animation().loadImage([images]).changePosition($xu, xuMap, images[6]).repeatForever();
//     xuAn.start(80);
// })();


function repeat() {
    var repeatAnimation = animation().loadImage([images]).changePosition($rabbit1, rightRunningMap, images[0]).repeatForever();
    repeatAnimation.start(80);
}

function win() {
    var winAnimation = animation().loadImage([images]).changePosition($rabbit3, rabbitWinMap, images[2]).repeat(3).then(function() {
        console.log('win animation repeat 3 times and fined');
    });
    winAnimation.start(200);
}

function lose() {
    var loseAnimation = animation().loadImage([images]).changePosition($rabbit4, rabbitLoseMap, images[1]).wait(3000).repeat(1).then(function() {
        console.log('lose');
    });
    loseAnimation.start(200);
}


function run() {
    var speed = 6;
    var initLeft = 100;
    var finalLeft = 400;
    var frameLength = 6;
    var frame = 4;
    var right = true;
    var interval = 50;

    var runAnimation = animation().loadImage([images]).enterFrame(function(success, time) {
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

        $rabbit2.style.backgroundImage = 'url(' + images[0] + ')';
        $rabbit2.style.backgroundPosition = position[0] + 'px ' + position[1] + 'px';
        $rabbit2.style.left = left + 'px';
        frame++;
        if (frame == frameLength) {
            frame = 0;
        }
    }).repeat(2).wait(1000).changePosition($rabbit2, rabbitWinMap, images[2]).then(function() {
        console.log('finished!');
    });
    runAnimation.start(interval);
}

// repeat();
// win();
// lose();
// run();

var starStyle = [1187, 1080]
const starImages = Array(34).fill('//static.uskid.com/class/tuoke/star1').map((cdn, index) => `${cdn}/${index + 1}.png`).concat([
    "https://hq-static.smartstudy.com/web/garden/jxbled29_aHTINQKRYweb8ASjQ8MgVwQo.png",
    "https://hq-static.smartstudy.com/web/garden/jxblefq7_S0rzQlLz3ba7cZeL6FTp6sze.png",
    "https://hq-static.smartstudy.com/web/garden/jxblehwy_CyuP6LlMPBKvhc5MOusIv6ce.png",
    "https://hq-static.smartstudy.com/web/garden/jxblekcr_Ql2MUVTpR1KoPEq0nNiEQi9P.png",
    "https://hq-static.smartstudy.com/web/garden/jxblemuj_5Gc6blUP1Eu51FcJVkwGmtl7.png",
    "https://hq-static.smartstudy.com/web/garden/jxbleplx_gmUtAU647xjgJzab5m9Zv0PJ.png",
    "https://hq-static.smartstudy.com/web/garden/jxbl4i0u_1NERHPF1moh5T4amIEVZpRIC.png",
    "https://hq-static.smartstudy.com/web/garden/jxbl4khc_XCIon8zbER7DFfmCDJoyb3O7.png",
    "https://hq-static.smartstudy.com/web/garden/jxbl4mvp_GAwjzcLgaEi64EwOmOZQn7f2.png",
    "https://hq-static.smartstudy.com/web/garden/jxbl4p3x_Sm1REItuSTL5JynvIJDwlx4V.png",
    "https://hq-static.smartstudy.com/web/garden/jxbl4ri2_EjUknteer8vYyVXBA2kc1My2.png",
    "https://hq-static.smartstudy.com/web/garden/jxbl4u4h_UKMpFelddwLGvioKq9deomYl.png",
    "https://hq-static.smartstudy.com/web/garden/jxbl4wil_av6Yx5qvdTfJ7hYbVV3Jhhv5.png",
    "https://hq-static.smartstudy.com/web/garden/jxbl4yse_MmsKWpIoCU6fGr7EWWS5b2C4.png",
    "https://hq-static.smartstudy.com/web/garden/jwugxbq7_kWhFYLteKW4hJxD59P8oOhZV.png",
    "https://hq-static.smartstudy.com/web/garden/jwugxfh6_j5npLjKa0YF5jLy9L4U7Nzw4.png",
    "https://hq-static.smartstudy.com/web/garden/jwuh2peh_1cRq6bMMX3LFjO7Zl7UmnFFa.png",
    "https://hq-static.smartstudy.com/web/garden/jwuh309t_Z0s1hwXEkXs8uRiPi6ug197O.png",
    "https://hq-static.smartstudy.com/web/garden/jwuh347j_tIqW22QjCkMLE7kBzbsPCZxH.png",
    "https://hq-static.smartstudy.com/web/garden/jwuh3703_vFfHx4KR2N0eeQB4K1onjXpJ.png",
    "https://hq-static.smartstudy.com/web/garden/jwuh3aow_zFX01REgpfqA1N6EKnxoSucb.png",
    "https://hq-static.smartstudy.com/web/garden/jwuh3ds1_yOOlIYGs9lrqGHrad3Dh7BhO.png",
    "https://hq-static.smartstudy.com/web/garden/jwuh3gex_Q4pqn1CjUXUOa7aFANdVRa1U.png",
    "https://hq-static.smartstudy.com/web/garden/jwuh3ivb_o6tzVXzore4bGj1ycjq3YFYZ.png",
    "https://hq-static.smartstudy.com/web/garden/jwuh3lf0_YRX6Krj9RtJQb32Pel63fhL8.png",
    "https://hq-static.smartstudy.com/web/garden/jwuh3o45_4Lp7nVJniVattwEjYqwmOOH4.png",
    "https://hq-static.smartstudy.com/web/garden/jwuh3qa2_7gPCtt2pnAtMQMYnQCdVpAc1.png",
    "https://hq-static.smartstudy.com/web/garden/jwuh3taq_WXNnCj30b5jmh7Uxazr0JZQ6.png",
    "https://hq-static.smartstudy.com/web/garden/jwuh3vzn_Z59ebsfiXsRKecYZueX0lPHq.png",
    "https://hq-static.smartstudy.com/web/garden/jwuh3yud_nLhs8DMZo4tfCjoELfV1nVLm.png",
    "https://hq-static.smartstudy.com/web/garden/jwuh41uu_XUbo9eLNvcQbOq4xuLqPaKje.png",
    "https://hq-static.smartstudy.com/web/garden/jwuh44jv_dVluBFEEdHYN2exBFLvgzo6i.png",
    "https://hq-static.smartstudy.com/web/garden/jwuh483x_DCRLsE4Em27TRUaxDGM4g4mv.png",
    "https://hq-static.smartstudy.com/web/garden/jwuh4c58_9gahNQBVQjUw7GOKpgSXBr15.png",
    "https://hq-static.smartstudy.com/web/garden/jwuh4f8n_UQBElQk0W2mv5MmgOIh68cAJ.png",
    "https://hq-static.smartstudy.com/web/garden/jwuh4ij2_nxJTuzdcfjHQ9QFeMgPmH6rH.png",
    "https://hq-static.smartstudy.com/web/garden/jwuh4lre_s1AjPcBJR88OU4BkOn1zrfp3.png",
    "https://hq-static.smartstudy.com/web/garden/jwuh4peb_Io35hgP5a4IgGAW9MR4UkcKg.png",
    "https://hq-static.smartstudy.com/web/garden/jwuh4smm_DSRqg0vpa4dHcDM9WZzj0fC5.png",
    "https://hq-static.smartstudy.com/web/garden/jwuh4w6e_rk46PikWzt0peQbAmzCXfOjP.png",
    "https://hq-static.smartstudy.com/web/garden/jwuh4zq6_U0cplEdmmNFvt7lwEOXxHuhR.png",
    "https://hq-static.smartstudy.com/web/garden/jwuh52kz_nWKhADK6ARPIpnQ7pbneceYQ.png",
    "https://hq-static.smartstudy.com/web/garden/jwuh55tm_nZNHMGirXrWswsAVgH7VHcpS.png",
    "https://hq-static.smartstudy.com/web/garden/jwuh58da_EmjgCUFMYsezaQUD9A6DlDAD.png",
    "https://hq-static.smartstudy.com/web/garden/jwuh5aww_oiXNBBuvGW98QwIvihMetzOg.png",
    "https://hq-static.smartstudy.com/web/garden/jwuh5duc_0HALvqP8jTYIe8vFxtHnTc86.png",
    "https://hq-static.smartstudy.com/web/garden/jwuh5hjp_zs2S1wO8ilLrpNXEixpDDXSb.png",
    "https://hq-static.smartstudy.com/web/garden/jwuh5kkf_T4JXGkWHogfOluwGuFislcv0.png"
])

function uskidStar1(fps) {
    var frameLength = starImages.length - 1;
    var frame = 1;

    var starAn = animation().loadImage(starImages, function() {
        console.log('图片加载成功')
    }).enterFrame(function(success, time) {
        // console.log('time', frame, images)

        $star.style.backgroundImage = `url(${starImages[frame].img})`
        frame++;
        if (frame > frameLength) {
            frame = 0;
            success();
            return;
        }
    }).repeatForever()
    starAn.start(fps || 120)
}

function uskidStar2(fps) {
    var frameLength = starImages.length - 1;
    var frame = 1;

    function frameFunc() {
        $star.style.backgroundImage = `url(${starImages[frame]})`
        frame++
        if (frame > frameLength) {
            frame = 0;
        }
        // requestAnimationFrame(frameFunc)
        setTimeout(() => {
            frameFunc()
        }, fps || 120)
    }
    frameFunc()
}

function uskidStar3(fps) {
    var frameLength = starImages.length - 1;
    var frame = 1;

    starImages.forEach((src, index) => {
        var ele = document.createElement('div')
        ele.id = `star-${index + 1}`
        ele.setAttribute('class', 'star-item')
        ele.style.backgroundImage = `url(${starImages[index + 1]})`
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

// uskidStar1()
// uskidStar2()
// uskidStar3()

// uskidStar1(80)
// uskidStar2(80)
// uskidStar3(80)

// uskidStar1(40)
// uskidStar2(40)
// uskidStar3(40)

// var startClassImages = Array(8).fill('https://static.uskid.com/class/tuoke/startClassOrgin').map((cdn, index) => `${cdn}/${index + 1}.png`)
var startClassImages = [
    '//static.uskid.com/file/jpeg/k07pnuvw_hXIuBzf2x3gnJbowgABaqGLp.jpeg'
]
var endClassImages = [
    'https://hq-static.smartstudy.com/web/garden/jxbl4ri2_EjUknteer8vYyVXBA2kc1My2.png',
    'https://hq-static.smartstudy.com/web/garden/jxbl4i0u_1NERHPF1moh5T4amIEVZpRIC.png',
    'https://hq-static.smartstudy.com/web/garden/jxbl4khc_XCIon8zbER7DFfmCDJoyb3O7.png',
    'https://hq-static.smartstudy.com/web/garden/jxbl4mvp_GAwjzcLgaEi64EwOmOZQn7f2.png',
    'https://hq-static.smartstudy.com/web/garden/jxbl4p3x_Sm1REItuSTL5JynvIJDwlx4V.png',
  ]
function uskidStartClass() {
    var frameLength = startClassImages.length;
    var frame = 1;

    var starAn = animation().loadImage(startClassImages, function() {
        console.log('图片加载成功')
    }).enterFrame(function(success, time) {
        // console.log('time', frame, images)

        $star.style.backgroundImage = `url(${startClassImages[frame].img})`
        frame++;
        if (frame > frameLength) {
            frame = 0;
            success();
            return;
        }
    }).repeatForever()
    starAn.start(80)
}
// uskidStartClass()

function uskidEndClass() {
    var frameLength = endClassImages.length;
    var frame = 1;

    var starAn = animation().loadImage(endClassImages, function() {
        console.log('图片加载成功')
    }).enterFrame(function(success, time) {
        // console.log('time', frame, images)

        $star.style.backgroundImage = `url(${endClassImages[frame].img})`
        frame++;
        if (frame > frameLength) {
            frame = 0;
            success();
            return;
        }
    }).repeatForever()
    starAn.start(120)
}
// uskidEndClass()

// animation(ele, positions, imgUrl);

// function animation(ele, positions, imgUrl) {

//     ele.style.backgroundImage = 'url(' + imgUrl + ')';
//     ele.style.backgroundRepeat = 'no-repeat';

//     var index = 0;

//     function run() {

//         var position = positions[index].split(' ');
//         ele.style.backgroundPosition = position[0] + 'px ' + position[1] + 'px';
//         index++;
//         if (index >= position.length) {
//             index = 0;
//         }
//         setTimeout(run, 80);
//     }

//     run();
// }