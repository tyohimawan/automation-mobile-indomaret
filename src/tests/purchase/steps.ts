import { Given, When, Then } from '@wdio/cucumber-framework';

import BerandaScreen from '../../screen/home/berandaScreen';
import AkunScreen from '../../screen/profile/akunScreen';
import SearchScreen from '../../screen/home/searchScreen';
import ProductScreen from '../../screen/home/productScreen';
import CartScreen from '../../screen/cart/cartScreen';
import PembayaranScreen from '../../screen/payment/pembayaranScreen';

Given(/^user tap button Akun$/, async () => {
    await BerandaScreen.tapButtonNavAkun();
});

When(/^user tap button Masuk\/Daftar$/, async () => {
    await AkunScreen.clickButtonLogin();
});

When(/^user input Nomor Handphone atau Email with (.+)$/, async (value: string) => {
    await AkunScreen.inputNoHpAtauEmail(value);
});

When(/^user tap button Lanjut$/, async () => {
    await AkunScreen.clickButtonLanjutkan();
});

When(/^user input Kata Sandi with (.+)$/, async (value: string) => {
    await AkunScreen.inputPassword(value);
});

When(/^user tap button Masuk$/, async () => {
    await AkunScreen.clickButtonLanjutkan();
});

When(/^user tap button Nanti Saja$/, async () => {
    await AkunScreen.clickButtonNantiSaja();
});

When(/^user tap button Beranda$/, async () => {
    await BerandaScreen.tapButtonNavBeranda();
});

// When(/^user tap close popup banner$/, async () => {
//     await BerandaScreen.tapButtonClosePopup();
// });

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
