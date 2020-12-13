tick = 0;
state = 0;
syncSpeed = 5;

async function intervalFunc() {
  const ms = Date.now()
  var str = "" + ms;
  var test = str.substring(10, 11);
  document.getElementById("sync").textContent = test;
  switch (state) {
    case 0:
      if (test == 5) {
        var test01 = str.substring(11, 12);
        if (test01 == 3) {
          syncSpeed = 100
          state++
        } else {
          const ms = Date.now()
          var str = "" + ms;
          syncSpeed = 5
        }
      }
      break;

    case 1:

      state++
      break;

    case 2:

      state++
      break;

    case 3:
      state++
      break;

    case 4:
      state++
      break;

    case 5:
      const start = Date.now()
      document.getElementById("count").textContent = tick;
      tick++
      const d = new Date();
      var str1 = "" + d;
      var timeDisp = str1.substring(4, 24);
      document.getElementById("time").textContent = timeDisp;
      var mmsDisp = str.substring(0, 14);
      document.getElementById("mms").textContent = mmsDisp;
      state++
      break;

    case 6:
      state++
      break;

    case 7:
      state++
      break;

    case 8:
      state++
      break;

    case 9:
      state = 0
      break;
  }

}

setInterval(intervalFunc, syncSpeed);
