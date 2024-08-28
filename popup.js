let qr;

function generateQR() {
    let text = document.getElementById("text").value;
    if(text) {
        if(qr) {
            qr.clear();
            qr.makeCode(text);
        } else {
            qr = new QRCode(document.getElementById("qrcode"), {
                text: text,
                width: 200,
                height: 200
            });
        }
        document.getElementById("downloadBtn").style.display = "block";
    }
}

function downloadQR() {
    let canvas = document.querySelector("#qrcode canvas");
    let image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    let link = document.createElement('a');
    link.download = "qrcode.png";
    link.href = image;
    link.click();
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("generateBtn").addEventListener("click", generateQR);
    document.getElementById("downloadBtn").addEventListener("click", downloadQR);
});