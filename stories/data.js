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

import img1 from '../demo/rabbit-big.png'
import img2 from '../demo/rabbit-lose.png'
import img3 from '../demo/rabbit-win.png'
import img4 from '../demo/egg-c.png'
import img5 from '../demo/egg.png'
import img6 from '../demo/loin.png'
import img7 from '../demo/xu.png'

var images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
]

import nz1 from '../demo/nz/1.jpeg'
import nz2 from '../demo/nz/2.jpeg'
import nz3 from '../demo/nz/3.jpeg'
import nz4 from '../demo/nz/4.jpeg'
import nz5 from '../demo/nz/5.jpeg'
import nz6 from '../demo/nz/6.jpeg'
import nz7 from '../demo/nz/7.jpeg'
import nz8 from '../demo/nz/8.jpeg'
import nzGif from '../demo/nz/nz.gif'

// var nzImgs = Array(8).fill(0).map((item, index) => (import(`../demo/nz/${index + 1}.jpeg`)))
var nzImgs = [
  nz1,
  nz2,
  nz3,
  nz4,
  nz5,
  nz6,
  nz7,
  nz8,
]

var nzImgs1 = Array(8).fill(0).map((item, index) => (`http://localhost:8080/demo/nz/${index + 1}.jpeg`))

export default {
  starImages,
  images,
  nzImgs,
  nzImgs1,
  nzGif,
}