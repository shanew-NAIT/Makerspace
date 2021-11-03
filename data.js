var APP_DATA = {
  "scenes": [
    {
      "id": "0-makerspace1",
      "name": "Makerspace1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.16033489956936364,
        "pitch": -0.0068354979829283735,
        "fov": 1.4019787994768
      },
      "linkHotspots": [
        {
          "yaw": 1.6058588758839383,
          "pitch": 0.11913066958566532,
          "rotation": 0,
          "target": "1-makerspace2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-makerspace2",
      "name": "makerspace2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.13380283056162057,
        "pitch": 0.07114519280927212,
        "fov": 1.4019787994768
      },
      "linkHotspots": [
        {
          "yaw": -3.0928054379614025,
          "pitch": 0.13307169801368168,
          "rotation": 0,
          "target": "0-makerspace1"
        },
        {
          "yaw": 0.12644841476215518,
          "pitch": 0.1287393533366732,
          "rotation": 6.283185307179586,
          "target": "2-makerspace3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-makerspace3",
      "name": "makerspace3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1054273000516543,
          "pitch": 0.25563793267988366,
          "rotation": 0,
          "target": "1-makerspace2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "NAIT Library Makerspace",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
