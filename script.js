function covid() {
  var country = document.getElementById("input1").value;
  var dateOne = document.getElementById("input2").value;
  var dateTwo = document.getElementById("input3").value;
  const url = `https://api.covid19api.com/country/${country}?from=${dateOne}T00:00:00Z&to=${dateTwo}T00:00:00Z`;
  fetch(url).then((response) => {
    return response.json();
  })
  .then(data => {
    var confirmed = (data[data.length - 1].Confirmed);
    var active = (data[data.length - 1].Active);
    var death = console.log(data[data.length - 1].Deaths);
    document.getElementById("demo").innerHTML+="<p class=\"para\">Confirmed Cases: " + confirmed +
          "</p><p class=\"para\">Active Cases: " + active + "</p><p class=\"para\">Death Cases:" + death +"</p>"
  });
}
