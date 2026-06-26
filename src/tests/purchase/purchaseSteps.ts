import { When, Then } from '@wdio/cucumber-framework';

import BerandaScreen from '../../screen/home/berandaScreen';
import SearchScreen from '../../screen/home/searchScreen';
import ProductScreen from '../../screen/home/productScreen';
import CartScreen from '../../screen/cart/cartScreen';
import PembayaranScreen from '../../screen/payment/pembayaranScreen';

When(/^user search item with (.+)$/, async (value: string) => {
    await BerandaScreen.tapSearchProduct();
    await SearchScreen.inputSearchProduct(value);
});

When(/^user tap first item$/, async () => {
    await SearchScreen.tapProductCardPertama();
});

When(/^user tap button Keranjang$/, async () => {
    await ProductScreen.tapButtonTambahKeranjang();
});

When(/^user tap button Cart$/, async () => {
    await ProductScreen.tapButtonKeranjang();
});

When(/^user select shipping method Instan$/, async () => {
    await CartScreen.tapButtonDelivery();
    await CartScreen.tapButtonInstanShipping();
});

When(/^user tap button Konfirmasi$/, async () => {
    await CartScreen.tapButtonKonfirmasiPembayaran();
});

When(/^user check Total Pembayaran$/, async () => {
    await CartScreen.tapButtonTotalPembayaran();
    const hargaBarang = await CartScreen.getHargaBarang();
    const hargaPengiriman = await CartScreen.getHargaPengiriman();
    const totalBayar = await CartScreen.getTotalBayar();

    const totalHarga = hargaBarang + hargaPengiriman;

    if (totalHarga !== totalBayar) {
        throw new Error(`Total pembayaran tidak sesuai. Harga Barang: ${hargaBarang}, Ongkir: ${hargaPengiriman}, Total Bayar: ${totalBayar}`);
    }
    await CartScreen.tapCloseButtonTotalPembayaran();
});

When(/^user tap button Beli$/, async () => {
    await CartScreen.tapButtonBeli();
});

When(/^user select Virtual Account BCA$/, async () => {
    await PembayaranScreen.scrollDown();
    await PembayaranScreen.tapVABCA();
});

Then(/^user tap button Bayar Sekarang$/, async () => {
    await PembayaranScreen.tapButtonKonfirmasiPembayaran();
});
