import { $ } from '@wdio/globals';

declare const browser: any;
import { berandaScreenSelectors } from '../../utils/selectors';

type SelectorKey = keyof typeof berandaScreenSelectors;

class BerandaScreen {
    private getSelector(selectorKey: SelectorKey) {
        return berandaScreenSelectors[selectorKey];
    }

    public async tapButtonClosePopup() {
        const btnClosePopup = await $(this.getSelector('BUTTON_CLOSE_POPUP'));
        await btnClosePopup.waitForDisplayed({ timeout: 10000 });
        await btnClosePopup.click();
    }

    public async closePopupIfPresent() {
        try {
            const btnClosePopup = await $(this.getSelector('BUTTON_CLOSE_POPUP'));
            await btnClosePopup.waitForDisplayed({ timeout: 5000 });
            await btnClosePopup.click();
        } catch {
            // popup not present, continue
        }
    }

    public async tapButtonNavBeranda() {
        const btnNavBeranda = await $(this.getSelector('BUTTON_NAV_BERANDA_ID'));
        await btnNavBeranda.waitForDisplayed({ timeout: 10000 });
        await btnNavBeranda.click();
    }

    public async tapButtonNavKeranjang() {
        const btnNavKeranjang = await $(this.getSelector('BUTTON_NAV_KERANJANG_ID'));
        await btnNavKeranjang.waitForDisplayed({ timeout: 10000 });
        await btnNavKeranjang.click();
    }

    public async scrollToTop() {
        await browser.execute('mobile: scrollGesture', {
            left: 0, top: 400, width: 1080, height: 1600,
            direction: 'up',
            percent: 1.0
        });
    }

    public async tapButtonNavAkun() {
        const btnNavBeranda = await $(this.getSelector('BUTTON_NAV_BERANDA_ID'));
        await btnNavBeranda.waitForDisplayed({ timeout: 10000 });
        await this.scrollToTop();
        const btnNavAkun = await $(this.getSelector('BUTTON_NAV_AKUN_ID'));
        await btnNavAkun.waitForDisplayed({ timeout: 10000 });
        await btnNavAkun.click();
    }

    public async tapSearchProduct() {
        const searchInput = await $(this.getSelector('SEARCH_PRODUCT_INPUT_FIELD'));
        await searchInput.waitForDisplayed({ timeout: 10000 });
        await searchInput.click();
    }
}

export default new BerandaScreen();
