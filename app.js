fetch('./images_gps.json')
    .then(res => res.json())
    .then(data => {
        document.querySelector('p').innerHTML = data.map((a, i) => (`<br/> image: ${a["image"]}, id: ${i}`))
    })