// 5000 -> "Rp5.000"
export function formatRupiah(value) {
  return "Rp" + new Intl.NumberFormat("id-ID").format(value);
}
