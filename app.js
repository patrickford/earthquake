let html = "";
for (let i=0; i<data.length; i++) {
  html += `<tr><td>${data[i].magnitude}</td><td>${data[i].title}</td></tr>`
}
$('.data').html(html)