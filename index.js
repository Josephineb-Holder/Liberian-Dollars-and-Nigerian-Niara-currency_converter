const exchangeRate = 195;
const nigExchangeRate = 1600;

function convertToLrd() {
  let liberianDollars = document.getElementById("lrd_usd").value;
  let lrdValue = liberianDollars * exchangeRate;
  let abbrValue = "LRD";
  document.getElementById("lrd").value = `$ ${lrdValue} ${abbrValue}`;
}

function convertToUsd() {
  let usd = document.getElementById("lrd_usd").value;
  let usdValue = usd / exchangeRate;
  let abbrValue = "USD";
  document.getElementById("lrd").value = `$ ${usdValue} ${abbrValue}`;
}

function convertToNgn() {
  let ngnNiara = document.getElementById("ngn_usd").value;
  let ngnValue = ngnNiara * nigExchangeRate;
  let abbrValue = "Niara";
  document.getElementById("niara").value = `$ ${ngnValue} ${abbrValue}`;
}

function convertNiaraToUsd() {
  let usd = document.getElementById("ngn_usd").value;
  let usdValue = usd / nigExchangeRate;
  let abbrValue = "USD";
  document.getElementById("niara").value = `$ ${usdValue} ${abbrValue}`;
}
