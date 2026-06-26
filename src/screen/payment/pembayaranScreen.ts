import { $ } from '@wdio/globals';

declare const browser: any;
import { pembayaranScreenSelectors } from '../../utils/selectors';

type SelectorKey = keyof typeof pembayaranScreenSelectors;

class PembayaranScreen {
    private getSelector(selectorKey: SelectorKey) {
        return pembayaranScreenSelectors[selectorKey];
    }

    public async scrollDown() {
        await browser.execute('mobile: scrollGesture', {
            left: 0, top: 400, width: 1080, height: 1600,
            direction: 'down',
            percent: 0.5
        });
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
