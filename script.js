const getStartedBtn = document.getElementById('get-started-btn');
const formWrapper = document.getElementById('form-wrapper');
getStartedBtn.addEventListener('click', () => {
  formWrapper.classList.remove('hidden');
  getStartedBtn.classList.add('hidden');
});

const openDisclosure = document.getElementById('open-disclosure');
const disclosureText = document.getElementById('disclosure-text');
openDisclosure.addEventListener('click', () => {
  openDisclosure.classList.add('hidden')
  disclosureText.classList.remove('hidden');
});


const submitBtn = document.getElementById('submit-btn');
const deltaDiv = document.getElementById('delta');
const resultDiv = document.getElementById('result');
const resultsBlock = document.getElementById('results-block');
const intro = document.getElementById('intro');
const donateAmount = document.getElementById('donate-amount');
const xShare = document.getElementById('x-share');
const whatsAppShare = document.getElementById('whatsapp-share');
const linkedInShare = document.getElementById('linkedin-share');
const fbShare = document.getElementById('fb-share');


const formatCurrency = (num) => {
  return num.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 });
};

var taxAmount, formattedTaxAmount = 0.00;

const calculateTaxes = (e) => {
  e.preventDefault();

  const taxAmountInput = document.getElementById('tax-amount');
  cleanAmount = Number(taxAmountInput.value.replace(/[^0-9.]/g, ''));
  taxAmount = 0.008277 * cleanAmount;
  const delta2022 = taxAmount - 0.00172970916 * cleanAmount;

  formattedTaxAmount = formatCurrency(taxAmount);

  resultDiv.textContent = `${formattedTaxAmount}`;
  deltaDiv.textContent = `${delta2022.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`;
  donateAmount.textContent = `${formattedTaxAmount}`;
  resultsBlock.classList.remove('hidden');
  formWrapper.classList.add('hidden');           
  intro.classList.add('hidden');
  xShare.href= `https://twitter.com/intent/tweet?text=In%202023%2C%20my%20U.S%20taxes%20gave%20${encodeURIComponent(formattedTaxAmount)}%20to%20Israel%20to%20kill%2030%2C000%20Palestinians%20in%20Gaza.%20Calculate%20your%20genocide%20tax%20amount%20at%20genocide.tax`
  linkedInShare.href= `https://www.linkedin.com/shareArticle?url=https%3A%2F%2Fgenocide.tax%2F&title=Calculate%20Your%20Genocide%20Tax%20Amount&summary=In%202023%2C%20my%20U.S%20taxes%20gave%20${encodeURIComponent(formattedTaxAmount)}%20to%20Israel%20to%20kill%2030%2C000%20Palestinians%20in%20Gaza.&source=`
  whatsAppShare.href= `https://api.whatsapp.com/send?text=In%202023%2C%20my%20U.S%20taxes%20gave%20${encodeURIComponent(formattedTaxAmount)}%20to%20Israel%20to%20kill%2030%2C000%20Palestinians%20in%20Gaza.%20Calculate%20your%20genocide%20tax%20amount%20at%20https%3A%2F%2Fgenocide.tax%2F
`
  fbShare.href= `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("https://genocide.tax")}`

};

const form = document.querySelector('form');
form.addEventListener('submit', calculateTaxes);


// Instagram sharing
document.getElementById("ig-share").addEventListener("click", function() {
  generateImage();
});

var igShareImg = new Image();

function generateImage() {
  var canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1920;
  var ctx = canvas.getContext("2d");

  var img = new Image();
  img.onload = function() {
    // Draw the image on the canvas
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // Draw text on top of the image
    ctx.font = 'bold 128px Inter';
    ctx.fillStyle = 'white'; // Set text color to white
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.textShadow = '0px 6px 28px rgba(215, 215, 215, 0.45)';
    ctx.fillText(formattedTaxAmount, canvas.width / 2, 700);

    // Convert canvas to data URL with JPEG format
    var dataURL = canvas.toDataURL("image/jpeg");

    // Convert data URL to blob
    var blob = dataURLToBlob(dataURL);

    // Create a File object
    var file = new File([blob], "genocide.fund.jpg", {type: "image/jpeg"});

    // Share the file
    navigator.share({
      title: 'genocide.fund.jpg',
      text: 'Check out this cool campaign I found!',
      files: [file]
    })
    .then(() => console.log('Shared successfully'))
    .catch((error) => console.error('Error sharing:', error));
    };
    img.src = 'ig-story.jpg'; // Replace 'ig-story.png' with the URL of your image template
    }

    // Function to convert data URL to blob
    function dataURLToBlob(dataURL) {
    var parts = dataURL.split(';base64,');
    var contentType = parts[0].split(':')[1];
    var raw = window.atob(parts[1]);
    var rawLength = raw.length;
    var uInt8Array = new Uint8Array(rawLength);
    for (var i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
    }
    return new Blob([uInt8Array], { type: contentType });
    }