async function shortenService(e) {
  const url = document.getElementById("url").value;
  const output = document.getElementById("output");

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({ url });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("/api/shortner", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      const { short_url } = result.data;
      output.innerText = short_url;
    })
    .catch((error) => console.log("error", error));
}
