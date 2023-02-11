const loadScript = (src, callback) => {
    var script = document.createElement("script");
    script.src = src;
    script.onload = () => {
        console.log("Loaded script with SRC:" + src)
        callback(null, src);
    }
    script.onerror = () => {
        // console.log("Error in loading script with SRC: " + src);
        callback(new Error("Error in loading script with SRC: " + src))
    }
    document.body.appendChild(script);
}

const hello = (error, src) => {
    if (error) {
        console.log(error)
        return
    }
    alert("hello world " + src);
}

const goodMorning = (error, src) => {
    alert("good Morning world" + src);
}


loadScript("https://cddn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js", hello)