import { $ } from '@wdio/globals';

import { pembayaranScreenSelectors } from '../../utils/selectors';

type SelectorKey = keyof typeof pembayaranScreenSelectors;

class PembayaranScreen {
    private getSelector(selectorKey: SelectorKey) {
        return pembayaranScreenSelectors[selectorKey];
    }

    public async scrollDown() {
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setSwipeDeadZonePercentage(0.4).scrollForward()').waitForExist({ timeout: 10000 });
    }

    public async tapButtonKonfirmasiPembayaran() {
        const btnKonfirmasi = await $(this.getSelector('BUTTON_SUBMIT_PEMBAYARAN'));
        await btnKonfirmasi.waitForDisplayed({ timeout: 10000 });
        await btnKonfirmasi.click();
    }

    public async tapVABCA() {
        const btnVABCA = await $(this.getSelector('BUTTON_VA_BCA'));
        await btnVABCA.waitForDisplayed({ timeout: 10000 });
        await btnVABCA.click();
    }

    public async tapVAMANDIRI() {
        const btnVAMANDIRI = await $(this.getSelector('BUTTON_VA_MANDIRI'));
        await btnVAMANDIRI.waitForDisplayed({ timeout: 10000 });
        await btnVAMANDIRI.click();
    }
}

export default new PembayaranScreen();
