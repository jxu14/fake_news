

// var images = document.querySelectorAll("img");
// for (var i = 0; i < images.length; i++) {
//   if (i === 0) {
//     images[i].src = "http://northamarillonow.co/wp2/wp-content/uploads/2016/11/maxresdefault.jpg";
//   } else if (i === 1) {
//     images[i].src = "http://cdn.cnn.com/cnnnext/dam/assets/160624180431-north-korea-missile-launch-kim-jong-un-we-can-hit-us-dnt-tsr-00002920-full-169.jpg"
//   } else if (i === 2) {
//     images[i].src = "http://i.dailymail.co.uk/i/pix/2016/08/09/16/2DEB07D800000578-3729527-image-a-1_1470756752507.jpg"
//   } else if (i === 3) {
//     images[i].src = "https://pbs.twimg.com/profile_images/570756134315642880/c1we-r1P_400x400.png"
//   // } else {
//   //   images[i].src = "https://usatftw.files.wordpress.com/2017/01/usatsi_9812072-copy.jpg?w=1000&h=600&crop=1"
//   }

// }

// var title = document.querySelectorAll("h1");
// for (var i = 0; i < title.length; i++) {
//   if (i === 0) {
//     title[i].innerHTML = "Kanye West Elected President for 2020";
//   } else if (i === 1) {
//     title[i].innerHTML = "North Korea launches nuclear missle at America";
//   } else if (i === 2) {
//     title[i].innerHTML = "Hacker Group hacks facebook, millions of social security numbers stolen";
//   } else if (i === 3) {
//     title[i].innerHTML = "Illuminati confirmed";
//   }else {
//     title[i].innerHTML = "Aaron Rodgers back in action";
//   }
// }

// var paragraph = document.querySelectorAll("p");
// for(var i = 0; i < paragraph.length; i++){
//   if (i === 0) {
//     paragraph[i].innerHTML = "kanye is the goat";
//   } else if (i === 1) {
//     paragraph[i].innerHTML = "america is in danger";
//   } else if (i === 2) {
//     paragraph[i].innerHTML = "Beware! ";
//   } else if (i === 3) {
//     paragraph[i].innerHTML = "#Illuminaticonfirmed";
//   }else {
//     paragraph[i].innerHTML = "the best qb is back";
//   }
// }

var rand =  Math.floor(Math.random() * 5);
var title = document.querySelectorAll("h1");
var subtitle = document.querySelectorAll("h2");
var paragraph = document.querySelectorAll("p");
var images = document.querySelectorAll("img");
var buttons = document.querySelectorAll("button");
if (rand === 0) {
  for(var i = 0; i < paragraph.length; i++){
    paragraph[i].innerHTML = "kanye west 100/100";
  }
  for (var i = 0; i < images.length; i++) {
    images[i].src = "http://northamarillonow.co/wp2/wp-content/uploads/2016/11/maxresdefault.jpg";
  }
  for(var i = 0; i < title.length; i++){
    title[i].innerHTML = "Kanye West appointed president for 2020";
  }
  for(var i = 0; i < subtitle.length; i++){
    subtitle[i].innerHTML = "don't worry this is fake news";
  } 
  for(var i = 0; i < buttons.length; i++) {
    buttons[i].innerHTML = "CLICK HERE TO DONATE TO KANYE";
  }
} else if (rand === 1) {
  for(var i = 0; i < paragraph.length; i++){
    paragraph[i].innerHTML = "america is in danger";
  }
  for (var i = 0; i < images.length; i++) {
    images[i].src = "http://cdn.cnn.com/cnnnext/dam/assets/160624180431-north-korea-missile-launch-kim-jong-un-we-can-hit-us-dnt-tsr-00002920-full-169.jpg";
  }
  for(var i = 0; i < title.length; i++){
    title[i].innerHTML = "North Korean launches ballistic missile at U.S.";
  }
  for(var i = 0; i < subtitle.length; i++){
    subtitle[i].innerHTML = "don't worry this is fake news";
  }
  for(var i = 0; i < buttons.length; i++) {
    buttons[i].innerHTML = "CLICK HERE TO BE SAFE";
  }
} else if (rand === 2) {
  for(var i = 0; i < paragraph.length; i++){
    paragraph[i].innerHTML = "Are you affected? Go to www.thisisnotavirus.com to check the list of names of affected persons. Make sure to enter your social security number and give as all your info";
  }
  for (var i = 0; i < images.length; i++) {
    images[i].src = "http://i.dailymail.co.uk/i/pix/2016/08/09/16/2DEB07D800000578-3729527-image-a-1_1470756752507.jpg";
  }
  for(var i = 0; i < title.length; i++){
    title[i].innerHTML = "Facebook hacked, millions of SSIDs stolen";
  }
  for(var i = 0; i < subtitle.length; i++){
    subtitle[i].innerHTML = "don't worry this is fake news";
  }
  for(var i = 0; i < buttons.length; i++) {
    buttons[i].innerHTML = "CLICK HERE TO RECOVER YOUR SSID";
  }
} else if (rand === 3) {
  for(var i = 0; i < paragraph.length; i++){
    paragraph[i].innerHTML = "The Illuminati is a real organization, triangles and eyes are there to haunt you, the government is plotting something.";
  }
  for (var i = 0; i < images.length; i++) {
    images[i].src = "https://pbs.twimg.com/profile_images/570756134315642880/c1we-r1P_400x400.png";
  }
  for(var i = 0; i < title.length; i++){
    title[i].innerHTML = "Illuminati confirmed";
  }
  for(var i = 0; i < subtitle.length; i++){
    subtitle[i].innerHTML = "don't worry this is fake news";
  }
  for(var i = 0; i < buttons.length; i++) {
    buttons[i].innerHTML = "CLICK HERE TO LEARN ABOUT THE ILLUMINATI";
  }
} else if (rand === 4) {
  for(var i = 0; i < paragraph.length; i++){
    paragraph[i].innerHTML = "hE WAS supposed to be out until week 12 at least, but he ate a magic potion and is now back better than ever. He threw for 10 tds, an NFL record and rushed for 25 yards and a TD. He had a 110% completion percentage, also a record.";
  }
  for (var i = 0; i < images.length; i++) {
    images[i].src = "https://usatftw.files.wordpress.com/2017/01/usatsi_9812072-copy.jpg?w=1000&h=600&crop=1";
  }
  for(var i = 0; i < title.length; i++){
    title[i].innerHTML = "Aaron Rodgers Back in action earlier than expected, breaking records";
  }
  for(var i = 0; i < subtitle.length; i++){
    subtitle[i].innerHTML = "don't worry this is fake news";
  }
  for(var i = 0; i < buttons.length; i++) {
    buttons[i].innerHTML = "CLICK HERE TO BUY RODGERS'S MAGIC POTION";
  }
}

var firsttitle = document.querySelector("title");
firsttitle.addEventListener("mouseover", function(){
  firsttitle.style.color = "red";
})

var titles = document.getElementsByClassName("title");
  for(var i = 0; i <titles.length; i ++){
    titles[i].addEventListener("mouseover",function(){
      for(var i =0; i< title.length; i++){
        title[0].innerHTML = title[0].innerHTML.replace(/Korea/g,"Kim");
      }
    })
}
