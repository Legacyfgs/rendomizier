// Get DOM elements
const cameraPreview = document.getElementById('camera-preview');
const mirrorImage = document.getElementById('mirror-image');
const captureBtn = document.getElementById('capture-btn');
const editBtn = document.getElementById('edit-btn');

// Initialize camera
navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
        cameraPreview.srcObject = stream;
        cameraPreview.play();
    })
    .catch((error) => console.error('Camera access error:', error));

// Capture button click
captureBtn.addEventListener('click', () => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = cameraPreview.videoWidth;
    canvas.height = cameraPreview.videoHeight;
    context.drawImage(cameraPreview, 0, 0, canvas.width, canvas.height);

    // Create mirror duplicate (flip horizontally)
    context.translate(canvas.width, 0);
    context.scale(-1, 1);
    mirrorImage.src = canvas.toDataURL('image/png');
});

// Edit button click (implement your editing logic here)
editBtn.addEventListener('click', () => {
    // Allow partial or complete replacement
    // Handle user permissions and storage
    // Implement sharing and downloading
    // Add song upload and subtitles (if needed)
});


//web share API
const shareData = {
    title: "MDN",
    text: "Learn web development on MDN!",
    url: "https://developer.mozilla.org",
  };
 
  const btn = document.querySelector("button");
  const resultPara = document.querySelector(".result");
  
  btn.addEventListener("click", async () => {
    try {
      await navigator.share(shareData);
      resultPara.textContent = "MDN shared successfully";
    } catch (err) {
      resultPara.textContent = `Error: ${err}`;
    }
  });
  

  //To handle sharing images using the Web Share API
  const imageFile = new File([], "my-image.png", { type: "image/png" });


  //Invoke the Share Dialog
  if (navigator.canShare && navigator.canShare({ files: [imageFile] })) {
    navigator.share({
      files: [imageFile],
      title: "My Awesome Image",
      text: "Check out this cool image!",
    });
  }
  
  function openModal(imageSrc) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = imageSrc;
  }
  
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  
// to add the button 
$('#addPhotosBtn').click(function() {
  $(this).parents().find('#addPhotosInput').click();
});

document.getElementById('addPhotosInput').onchange = e => {
  const file = e.target.files[0];
  const url = URL.createObjectURL(file);
  const li = ` <li> <img src=" ${url} ">
   <span><i class="fa fa-trash"></i></span>
   </li>`
  $('.photos-list ul').append(li);
};

$('#addVideosBtn').click(function() {
  $(this).parents().find('#addVideosInput').click();
});

document.getElementById('addVideosInput').onchange = e => {
  const file = e.target.files[0];
  const url = URL.createObjectURL(file);
  const li = ` <li> <video controls="controls" src=" ${url} " type="video/mp4" width="400px" height="200px"></video>
       <span><i class="fa fa-trash"></i></span>
   </li>`
  $('.video-list ul').append(li);
};


const video = document.getElementById('video');
const canvas = document.getElementById('mirror-canvas');
const ctx = canvas.getContext('2d');

video.addEventListener('play', () => {
    const w = video.videoWidth;
    const h = video.videoHeight;
    canvas.width = w;
    canvas.height = h;

    function drawFrame() {
        if (video.paused || video.ended) return;
        ctx.clearRect(0, 0, w, h);

        // Apply mirror effect
        ctx.scale(-1, 1);
        ctx.drawImage(video, -w, 0, w, h);
        ctx.scale(-1, 1); // Reset scale

        requestAnimationFrame(drawFrame);
    }

    video.play();
    drawFrame();
});


const customButton = document.getElementById('customButton');
const fileInput = document.getElementById('myFile');
const customText = document.getElementById('customText'); // Create a <span> element for displaying the file name

customButton.addEventListener('click', () => {
    fileInput.click(); // Trigger the hidden file input
});

fileInput.addEventListener('change', () => {
    const fileName = fileInput.files[0].name;
    customText.textContent = fileName;
});


function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

//that's for the editing btn 

    const image = document.getElementById('mirror-image');
    const editButton = document.getElementById('edit-btn');

    // Add event listener to the Edit button
    editButton.addEventListener('click', applyFilters);

    function applyFilters() {
        // Apply the grayscale filter
        image.style.filter = 'grayscale(100%)';
        // You can adjust the percentage (0% to 100%) for desired effect
    }

// for the file upload 

function getFile() {
  document.getElementById("upfile").click();
}

function sub(obj) {
  var file = obj.value;
  var fileName = file.split("\\");
  document.getElementById("yourBtn").innerHTML = fileName[fileName.length - 1];
  document.myForm.submit();
  event.preventDefault();
}