import { $ } from '@wdio/globals';
import { keranjangScreenSelectors } from '../../utils/selectors';

type SelectorKey = keyof typeof keranjangScreenSelectors;

class CartScreen {
    private getSelector(selectorKey: SelectorKey) {
        return keranjangScreenSelectors[selectorKey];
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
}

export default new CartScreen();
