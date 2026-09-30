// Public publication metadata and recorded simulation cases.
window.NAV_PUBLICATION = {
  "authors": [
    {
      "name": "Haoxiang Shi",
      "affiliation": "1,2"
    },
    {
      "name": "Zaijing Li",
      "affiliation": "1,2"
    },
    {
      "name": "Muhe Ding",
      "affiliation": "1"
    },
    {
      "name": "Xiang Deng",
      "affiliation": "1"
    },
    {
      "name": "Yaowei Wang",
      "affiliation": "1,2"
    },
    {
      "name": "Liqiang Nie",
      "affiliation": "1"
    }
  ],
  "affiliations": [
    "1 Harbin Institute of Technology (Shenzhen)",
    "2 Pengcheng Laboratory"
  ],
  "paperUrl": "",
  "codeUrl": "",
  "bibtex": "",
  "simulationCases": [
    {
      "id": "sim-01",
      "title": "Pool room platform",
      "dataset": "R2R-CE",
      "episode": 29,
      "model": "GPT-6-Astra / high",
      "video": "assets/videos/sim-01.mp4",
      "poster": "assets/images/sim-01.jpg",
      "instruction": "Leave the sauna and enter the pool room. Stand on the platform at the end of the pool near the lounge chairs.",
      "frames": 11,
      "fps": 2,
      "duration": 5.5,
      "ne": 0.11387944221496582,
      "spl": 0.9640726986913982,
      "ndtw": 0.9057321795165346
    },
    {
      "id": "sim-02",
      "title": "Carpeted hall to the stairs",
      "dataset": "R2R-CE",
      "episode": 47,
      "model": "GPT-6-Astra / high",
      "video": "assets/videos/sim-02.mp4",
      "poster": "assets/images/sim-02.jpg",
      "instruction": "Walk along the carpet. Turn left and enter the rightmost doorway. Wait on the first few steps of the stairs.",
      "frames": 11,
      "fps": 2,
      "duration": 5.5,
      "ne": 0.3871002495288849,
      "spl": 1.0,
      "ndtw": 0.9254441521111049
    },
    {
      "id": "sim-03",
      "title": "Closet through the bedroom door",
      "dataset": "R2R-CE",
      "episode": 77,
      "model": "GPT-6-Astra / high",
      "video": "assets/videos/sim-03.mp4",
      "poster": "assets/images/sim-03.jpg",
      "instruction": "Leave the closet, and walk out of the bedroom. Stop once you exit the bedroom door.",
      "frames": 12,
      "fps": 2,
      "duration": 6.0,
      "ne": 0.4212854206562042,
      "spl": 1.0,
      "ndtw": 0.944685428074588
    },
    {
      "id": "sim-04",
      "title": "Across the hall to the bathroom sink",
      "dataset": "R2R-CE",
      "episode": 87,
      "model": "GPT-6-Astra / high",
      "video": "assets/videos/sim-04.mp4",
      "poster": "assets/images/sim-04.jpg",
      "instruction": "Exit the bathroom. Turn left and then turn right. Turn left and go into the other bathroom. Wait near the sink.",
      "frames": 12,
      "fps": 2,
      "duration": 6.0,
      "ne": 0.05832497775554657,
      "spl": 0.7699330130583928,
      "ndtw": 0.9426438665299471
    },
    {
      "id": "sim-05",
      "title": "Staircase to the kitchen sink",
      "dataset": "RxR-CE",
      "episode": 5,
      "model": "GPT-5.6-Sol / high",
      "video": "assets/videos/sim-05.mp4",
      "poster": "assets/images/sim-05.jpg",
      "instruction": "Our starting point is in front of a staircase, turn towards the right slightly, and take a few steps further towards a kitchen, we're now in the kitchen area, on the right there's a stove and a small island, walk pass that island towards a cabinet that's in front of you, that has a white sink on top, and that's your destination. You'll be facing the windows and the sink.",
      "frames": 17,
      "fps": 2,
      "duration": 8.5,
      "ne": 1.0246928930282593,
      "spl": 1.0,
      "ndtw": 0.9638603042216428
    },
    {
      "id": "sim-06",
      "title": "Washroom through the bedroom to the wardrobe",
      "dataset": "RxR-CE",
      "episode": 4,
      "model": "GPT-5.6-Sol / high",
      "video": "assets/videos/sim-06.mp4",
      "poster": "assets/images/sim-06.jpg",
      "instruction": "You are in a washroom facing towards the corner, turn around and come out of the washroom, take a right turn and go straight to the door, take a right turn and move forward to the mirror, take a right turn and go straight near the door which is on the right side, take a right turn and move forward in the wardrobe room. This is the endpoint.",
      "frames": 24,
      "fps": 2,
      "duration": 12.0,
      "ne": 1.5177373886108398,
      "spl": 0.7072630071317998,
      "ndtw": 0.7938642843352568
    },
    {
      "id": "sim-07",
      "title": "Window room to the blackboard",
      "dataset": "RxR-CE",
      "episode": 33,
      "model": "GPT-5.6-Sol / high",
      "video": "assets/videos/sim-07.mp4",
      "poster": "assets/images/sim-07.jpg",
      "instruction": "You are facing towards the glass window turn right, there is an entry for the another room quite opposite to this room enter into that room, now you can see a black board on your left go near the right of the black board and stand between the glass table, and black board and this is your end point.",
      "frames": 33,
      "fps": 2,
      "duration": 16.5,
      "ne": 1.5351619720458984,
      "spl": 0.7835405539703407,
      "ndtw": 0.8639493506034428
    },
    {
      "id": "sim-08",
      "title": "Dining table to the cushioned chair",
      "dataset": "RxR-CE",
      "episode": 31,
      "model": "GPT-5.6-Sol / high",
      "video": "assets/videos/sim-08.mp4",
      "poster": "assets/images/sim-08.jpg",
      "instruction": "You are facing towards the wall and the glass window. Turn around and walk straightly behind the chairs till you reach the end of the dining table. Now slightly turn left and move towards the black couch in the living room. Again slightly turn left and move towards the sofa chair which has two cushions on it. That will be the end point.",
      "frames": 24,
      "fps": 2,
      "duration": 12.0,
      "ne": 1.1602249145507812,
      "spl": 1.0,
      "ndtw": 0.9145273609462755
    }
  ]
};
