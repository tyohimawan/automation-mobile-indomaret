import { Given, When } from '@wdio/cucumber-framework';

import BerandaScreen from '../../screen/home/berandaScreen';
import AkunScreen from '../../screen/profile/akunScreen';
import { credentials } from '../../utils/testData/credentials';

Given(/^user tap button Akun$/, async () => {
    await BerandaScreen.closePopupIfPresent();
    await BerandaScreen.tapButtonNavAkun();
});

When(/^user tap button Masuk\/Daftar$/, async () => {
    await AkunScreen.clickButtonLogin();
});

When(/^user input Nomor Handphone atau Email$/, async () => {
    await AkunScreen.inputNoHpAtauEmail(credentials.phone);
});

When(/^user tap button Lanjut$/, async () => {
    await AkunScreen.clickButtonLanjutkan();
});

When(/^user input Kata Sandi$/, async () => {
    await AkunScreen.inputPassword(credentials.password);
});

When(/^user tap button Masuk$/, async () => {
    await AkunScreen.clickButtonLanjutkan();
});

When(/^user tap button Nanti Saja$/, async () => {
    await AkunScreen.clickButtonNantiSaja();
});

When(/^user tap button Beranda$/, async () => {
    await BerandaScreen.tapButtonNavBeranda();
    await BerandaScreen.closePopupIfPresent();
});
