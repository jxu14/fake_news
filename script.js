

var images = document.querySelectorAll("img");
for (var i = 0; i < images.length; i++) {
  if (i === 0) {
    images[i].src = "http://northamarillonow.co/wp2/wp-content/uploads/2016/11/maxresdefault.jpg";
  } else if (i === 1) {
    images[i].src = "http://cdn.cnn.com/cnnnext/dam/assets/160624180431-north-korea-missile-launch-kim-jong-un-we-can-hit-us-dnt-tsr-00002920-full-169.jpg"
  } else if (i === 2) {
    images[i].src = "http://i.dailymail.co.uk/i/pix/2016/08/09/16/2DEB07D800000578-3729527-image-a-1_1470756752507.jpg"
  } else if (i === 3) {
    images[i].src = "https://pbs.twimg.com/profile_images/570756134315642880/c1we-r1P_400x400.png"
  } else {
    images[i].src = "https://usatftw.files.wordpress.com/2017/01/usatsi_9812072-copy.jpg?w=1000&h=600&crop=1"
  }

}

var title = document.querySelectorAll("h1");
for (var i = 0; i < title.length; i++) {
  if (i === 0) {
    title[i].innerHTML = "Kanye West Elected President for 2020";
  } else if (i === 1) {
    title[i].innerHTML = "North Korea launches nuclear missle at America";
  } else if (i === 2) {
    title[i].innerHTML = "Hacker Group hacks facebook, millions of social security numbers stolen";
  } else if (i === 3) {
    title[i].innerHTML = "Illuminati confirmed";
  }else {
    title[i].innerHTML = "Aaron Rodgers back in action";
  }
}

var paragraph = document.querySelectorAll("p");
for(var i = 0; i < paragraph.length; i++){
  if (i === 0) {
    paragraph[i].innerHTML = "kanye is the goat";
  } else if (i === 1) {
    paragraph[i].innerHTML = "america is in danger";
  } else if (i === 2) {
    paragraph[i].innerHTML = "Beware! ";
  } else if (i === 3) {
    paragraph[i].innerHTML = "#Illuminaticonfirmed";
  }else {
    paragraph[i].innerHTML = "the best qb is back";
  }
}
