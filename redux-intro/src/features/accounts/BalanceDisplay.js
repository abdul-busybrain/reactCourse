function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "NGN",
  }).format(value);
}

function BalanceDisplay() {
  return <div className="balance">{formatCurrency(123456)}</div>;
}

export default BalanceDisplay;
