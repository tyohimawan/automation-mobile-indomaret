import { $ } from '@wdio/globals';
import { keranjangScreenSelectors } from '../../utils/selectors';

type SelectorKey = keyof typeof keranjangScreenSelectors;

class CartScreen {
    private getSelector(selectorKey: SelectorKey) {
        return keranjangScreenSelectors[selectorKey];
    }

    private parseRupiah(text: string): number {
        return parseInt(text.replace(/[^0-9]/g, ''), 10);
    }

    public async tapButtonDelivery() {
        const btnDelivery = await $(this.getSelector('BUTTON_DELIVERY'));
        await btnDelivery.waitForDisplayed({ timeout: 10000 });
        await btnDelivery.click();
    }

    public async tapButtonInstanShipping() {
        const btnInstanShipping = await $(this.getSelector('BUTTON_INSTAN_SHIPPING'));
        await btnInstanShipping.waitForDisplayed({ timeout: 10000 });
        await btnInstanShipping.click();
    }

    public async tapButtonRegularShipping() {
        const btnRegularShipping = await $(this.getSelector('BUTTON_REGULAR_SHIPPING'));
        await btnRegularShipping.waitForDisplayed({ timeout: 10000 });
        await btnRegularShipping.click();
    }

    public async tapButtonCancelShippingMethod() {
        const btnCancelShippingMethod = await $(this.getSelector('BUTTON_CANCEL_DELIVERY_METHOD'));
        await btnCancelShippingMethod.waitForDisplayed({ timeout: 10000 });
        await btnCancelShippingMethod.click();
    }

    public async tapButtonKonfirmasiPembayaran() {
        const btnKonfirmasiPembayaran = await $(this.getSelector('BUTTON_KONFIRMASI_DELIVERY_METHOD'));
        await btnKonfirmasiPembayaran.waitForDisplayed({ timeout: 10000 });
        await btnKonfirmasiPembayaran.click();
    }

    public async tapButtonBeli() {
        const btnBeli = await $(this.getSelector('BUTTON_BELI'));
        await btnBeli.waitForDisplayed({ timeout: 10000 });
        await btnBeli.click();
    }

    public async getHargaBarang() {
        const hargaBarangElement = await $(this.getSelector('HARGA_BARANG'));
        await hargaBarangElement.waitForDisplayed({ timeout: 10000 });
        return this.parseRupiah(await hargaBarangElement.getText());
    }

    public async getHargaPengiriman() {
        const hargaPengirimanElement = await $(this.getSelector('HARGA_PENGIRIMAN'));
        await hargaPengirimanElement.waitForDisplayed({ timeout: 10000 });
        return this.parseRupiah(await hargaPengirimanElement.getText());
    }

    public async getTotalBayar() {
        const totalBayarElement = await $(this.getSelector('TOTAL_PEMBAYARAN'));
        await totalBayarElement.waitForDisplayed({ timeout: 10000 });
        return this.parseRupiah(await totalBayarElement.getText());
    }

    public async tapButtonTotalPembayaran() {
        const btnTotalPembayaran = await $(this.getSelector('BUTTON_TOTAL_PEMBEYARAN'));
        await btnTotalPembayaran.waitForDisplayed({ timeout: 10000 });
        await btnTotalPembayaran.click();
    }

    public async tapCloseButtonTotalPembayaran() {
        const btnCloseTotalPembayaran = await $(this.getSelector('BUTTON_CLOSE_TOTAL_PEMBEYARAN'));
        await btnCloseTotalPembayaran.waitForDisplayed({ timeout: 10000 });
        await btnCloseTotalPembayaran.click();
    }
}

export default new CartScreen();
